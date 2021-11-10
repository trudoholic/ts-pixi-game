import emitter from '../eventEmitter';
import Comp from './Comp';
import config from '../config'

import Flow  from './flow/Flow'
import Round from './flow/Round'
import Turn  from './flow/Turn'
import Phase from './flow/Phase'
import Impulse from './flow/Impulse'

class Model {

  private _active: boolean = false;
  private _root: Comp = new Comp('root');
  private _players: Comp = new Comp('players');

  private _f_round: Flow;
  private _f_turn:  Flow;
  private _f_phase: Flow;
  private _f_imp:   Flow;

  constructor() {
    this._root.add(this._players);
    config.players.forEach(it => this._players.add(new Comp(it.name)));
    console.log(this._players.children);

    this._f_round = new Round('Round');
    this._f_turn = new Turn('Turn');
    this._f_round.add(this._f_turn);
    this._f_phase = new Phase('Phase');
    this._f_turn.add(this._f_phase);
    this._f_imp = new Impulse('Impulse');
    this._f_phase.add(this._f_imp);
  }

  public start() {
    if (! this._active) {
      this._active = true;
      emitter.emit('m_start', {});
      this._f_round.start(true);
    }
  }

  public end() {
    if (this._active) {
      this._f_imp.end();
      this._f_phase.end();
      this._f_turn.end();
      this._f_round.end();
      this._active = false;
      emitter.emit('m_end', {});
    }
  }

  public next() {
    if (this._active) {
      this._f_imp.next();
    }
  }

}

// super();
// Focused
// Expanded/Toggled/Selected
// Disabled Enabled
// Hover and Active Activated
// Pressed Clicked Dragged

const model = new Model();

export default model;
