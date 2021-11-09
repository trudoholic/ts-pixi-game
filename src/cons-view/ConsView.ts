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

    emitter.on('m_start', () => this.info('Game Start'));
    emitter.on('m_end', () => this.info('Game End'));

    // emitter.on('m_start_round', (payload: any) => this.info(`Round ${payload.round} Start`));
    // emitter.on('m_end_round', (payload: any)   => this.info(`Round ${payload.round} End`));

    emitter.on('m_start_round', (payload: any) => this.group(`Round ${payload.round} Start`));
    emitter.on('m_end_round', (payload: any) => this.groupEnd(`Round ${payload.round} End`));

    emitter.on('m_start_turn', (payload: any) => this.group(`Turn ${payload.turn} Start : ${payload.name}`));
    emitter.on('m_end_turn', (payload: any) => this.groupEnd(`Turn ${payload.turn} End : ${payload.name}`));

    emitter.on('m_start_phase', (payload: any) => this.group(`Phase ${payload.phase} Start : ${payload.name}`));
    emitter.on('m_skip_phase', (payload: any) => this.logB(`skip: ${payload.name}`));
    emitter.on('m_end_phase', (payload: any) => this.groupEnd(`Phase ${payload.phase} End : ${payload.name}`));

    emitter.on('m_start_imp', (payload: any) => this.logB(`${payload.imp} | ${payload.lim}`));

  }

  /**
   * info
   */
  public info(msg: string) {
    console.info("#", msg);
  }

  /**
   * group
   */
  public group(msg: string) {
    console.group(msg);
    console.log(msg);
  }

  /**
   * groupEnd
   */
  public groupEnd(msg: string) {
    console.log(msg);
    console.groupEnd();
  }

  /**
   * logB
   */
  public logB(msg: string) {
    console.log(`%c${msg}`, 'color: #66f');
  }

  /**
   * log
   */
  public log(payload: any) {
    console.log("-->", payload.targetName, payload.currentTargetName);
  }

}
