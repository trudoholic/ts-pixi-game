import Flow from './Flow';

export default class Phase extends Flow {

  constructor(name: string) {
    super(name);
  }

  public start(reset = false) {
    super.start(reset);
    const phase =  this.phase(this._value);
    this.emit('m_start_phase', { phase: this._value, name: phase?.name });
    const phaseLim = phase?.lim ?? -1;
    const skip = phaseLim < 0;
    if (skip) {
      this.emit('m_skip_phase', { phase: this._value, name: phase?.name });
      this.next();
    }
    else {
      // this._imp = 0;
      // this.startImpulse();
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
