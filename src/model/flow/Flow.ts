import emitter from '../../eventEmitter';
import Comp from '../Comp';
import config from '../../config'

export default class Flow extends Comp {

  protected _value: number = 0;
  protected _done: boolean = false;
  protected _n: number = 0;

  constructor(name: string) {
    super(name);
    this._n = config.players.length;
  }

  public emit(id: string, payload: any) {
    emitter.emit(id, payload);
  }

  public start(reset = false) {
    if (reset) { this._value = 0; }
  }

  public end() {
  }

  public next_value() {
    // ++ this._value;
    // this._done = false;
  }

  public next() {
    this.end();
    this.next_value();
    if (this._done) {
      (this.parent as Flow)?.next();
    }
    else {
      this.start();
    }

  }

}
