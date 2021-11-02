import emitter from '../eventEmitter';

export default class ConsView {

  constructor() {

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

    emitter.on('test', this.log);
    emitter.on('test2', this.log2);
  }

    /**
     * log
     */
    public log(payload: any) {
      console.log("-->", payload.targetName, payload.currentTargetName);
    }
    public log2(payload: any) {
      console.log("==>", payload.targetName, payload.currentTargetName);
    }

}
