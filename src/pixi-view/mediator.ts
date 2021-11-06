import emitter from '../eventEmitter'
import Button from './ui/Button'

import click_button from './actions/click_button';
import click_stage  from './actions/click_stage';

import m_start  from './actions/m_start';

class Mediator {

  private uiMap = new Map();

  constructor() {
    emitter.on('click_button', click_button());
    emitter.on('click_stage',  click_stage());

    emitter.on('m_start', m_start());

  }

  /**
   * getButton
   */
  public getButton(id: string): Button {
    return this.uiMap.get(id);
  }

  /**
   * register
   */
  public register(button: Button) {
    this.uiMap.set(button.name, button);
  }

}

const mediator = new Mediator();

export default mediator;
