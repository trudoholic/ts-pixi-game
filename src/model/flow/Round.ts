import Flow from './Flow';

export default class Round extends Flow {

  constructor(name: string) {
    super(name);
  }

  public start(reset = false) {
    super.start(reset);
    this.emit('m_start_round', { round: this._value });
    // this._turn = 0;
    // this.startTurn();
  }

  public end() {
    this.emit('m_end_round', { round: this._value });
  }

  public next_value() {
    ++ this._value;
    this._done = false;
  }

}
