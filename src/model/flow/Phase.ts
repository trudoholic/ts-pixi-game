import Flow from './Flow';

export default class Phase extends Flow {

  constructor(name: string) {
    super(name);
  }

  public start(reset = false) {
    super.start(reset);
    const phase =  this.phase(this._value);
    this.emit('m_start_phase', { phase: this._value, name: phase?.name });
    Flow._phaseLim = phase?.lim ?? -1;

    const skip = Flow._phaseLim < 0;
    if (skip) {
      this.emit('m_skip_phase', { phase: this._value, name: phase?.name });
      this.next();
    }
    else {
      (this.at(0) as Flow)?.start(true);
    }
  }

  public end() {
    super.end();
    const phase =  this.phase(this._value);
    this.emit('m_end_phase', { phase: this._value, name: phase?.name });
  }

  public next_value() {
    ++ this._value;
    this._done = (this._value === this.phasesLength);
  }

}
