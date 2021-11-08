import emitter from '../eventEmitter';

export default class ConsView {

  constructor() {

    //document.body.onkeyup = function(e){}

    document.addEventListener('keydown', event => {
      if (event.repeat) {
        event.preventDefault();
        return;
      }
      console.log('KEYDOWN');
      console.log('Alt: ', event.altKey);
      console.log('Ctrl: ', event.ctrlKey);
      console.log('Shift: ', event.shiftKey);
    });

    document.addEventListener('keypress', event => {
      event.preventDefault();
      if (event.repeat) { return; }
      console.log('KEYPRESS');
      console.log('ASCII код: ', event.charCode);
    });

    document.addEventListener('keyup', event => {
      event.preventDefault();
      console.log('KEYUP');
      console.log('Key: ', event.key);
      console.log('keyCode: ', event.keyCode);
      console.log('Строковый код: ', event.code);
    });

    emitter.on('m_end', () => this.info('Game End'));
    emitter.on('m_start', () => this.info('Game Start'));

    emitter.on('m_end_round', (payload: any)   => this.info(`Round ${payload.round} End`));
    emitter.on('m_start_round', (payload: any) => this.info(`Round ${payload.round} Start`));

  }

    /**
     * info
     */
    public info(msg: string) {
      console.info("#", msg);
    }

    /**
     * log
     */
    public log(payload: any) {
      console.log("-->", payload.targetName, payload.currentTargetName);
    }

}
