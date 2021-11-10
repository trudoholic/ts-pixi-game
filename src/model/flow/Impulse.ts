import Flow from './Flow';

export default class Impulse extends Flow {

  constructor(name: string) {
    super(name);
  }

  public start(reset = false) {
    super.start(reset);
    this.emit('m_start_imp', { imp: this._value, lim: Flow._phaseLim });
  }

  public end() {
    super.end();
    this.emit('m_end_imp', { imp: this._value, lim: Flow._phaseLim });
  }

  public next_value() {
    ++ this._value;
    this._done = (Flow._phaseLim < 0 || this._value === Flow._phaseLim);
  }

}
