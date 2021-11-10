import Flow from './Flow';

export default class Turn extends Flow {

  constructor(name: string) {
    super(name);
  }

  public start(reset = false) {
    super.start(reset);
    this.emit('m_start_turn', { turn: this._value, name: this.playerName(this._value) });
    // this._turn = 0;
    // this.startTurn();
  }

  public end() {
    super.end();
    this.emit('m_end_turn', { turn: this._value, name: this.playerName(this._value) });
  }

  public next_value() {
    ++ this._value;
    this._done = (this._value === this._n);
  }

}
