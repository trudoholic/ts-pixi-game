import emitter from '../eventEmitter'
import Button from './ui/Button'

class Mediator {

  private uiMap = new Map();

  constructor() {
    emitter.on('click_button', (payload: any) => {
      const button = this.uiMap.get(payload.targetName);
      console.log('# button:', payload.targetName, !!button);
      if (button) {
        // button.alpha = .25;
        button.setText('OK');
      }
    });
  }

  /**
   * register
   */
  public register(button: Button) {
    // console.log('mediator.register:', button.name);
    this.uiMap.set(button.name, button);
  }

}


const mediator = new Mediator();

export default mediator;
