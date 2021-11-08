import emitter from '../eventEmitter'
import Button from './ui/Button'

import click_button from './actions/click_button';
import click_stage  from './actions/click_stage';

import m_end  from './actions/m_end';
import m_start  from './actions/m_start';

class Mediator {

  private uiMap = new Map();

  constructor() {
    emitter.on('click_button', click_button());
    emitter.on('click_stage',  click_stage());

    emitter.on('m_end', m_end());
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

  /**
   * toggle button
   */
  public toggle(id: string, enable: boolean) {
    const button = this.getButton(id);
    if (button) {
      enable ? button.enable() : button.disable();
    }
  }

  /**
   * toggle button list
   */
  public toggleList(ids: Array<string>, enable: boolean) {
    ids.forEach((id: string) => {
      this.toggle(id, enable);
    });
  }

}

const mediator = new Mediator();

export default mediator;
