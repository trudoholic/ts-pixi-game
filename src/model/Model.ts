import emitter from '../eventEmitter';
import Comp from './Comp';
import config from '../config'

import Flow from './flow/Flow'
import Round from './flow/Round'

class Model {

  private _active: boolean = false;
  private _root: Comp = new Comp('root');
  private _players: Comp = new Comp('players');
  private _n: number = 0;

  private _round: number = 0;
  private _turn:  number = 0;
  private _phase: number = 0;
  private _phaseLim: number = -1;
  private _imp: number = 0;

  private _f_round: Flow;

  constructor() {
    this._root.add(this._players);
    this._n = config.players.length;
    config.players.forEach(it => this._players.add(new Comp(it.name)));
    console.log(this._players.children);

    this._f_round = new Round('Round');
  }

  /**
   * Game
   */
  public start() {
    if (! this._active) {
      this._active = true;
      emitter.emit('m_start', {});

      //
      this._f_round.start(true);
      /*/
      this._round = 0;
      this.startRound();
      /*/
    }
  }

  public end() {
    if (this._active) {
      /*/
      this.endImpulse();
      this.endPhase();
      this.endTurn();
      this.endRound();
      /*/
      this._f_round.end();
      //

      this._active = false;
      emitter.emit('m_end', {});
    }
  }

  public next() {
    if (this._active) {
      this._f_round.next();
    }
  }


  public next_() {
    if (this._active) {
      //
      this.endImpulse();
      ++ this._imp;
      if (this._phaseLim < 0 || this._imp === this._phaseLim) {
        //
        this.endPhase();
        ++ this._phase;
        if (this._phase === config.phases.length) {
          //
          this.endTurn();
          ++ this._turn;
          if (this._turn === this._n) {
            //
            this.endRound();
            ++ this._round;
            this.startRound();
            //
          }
          else {
            this.startTurn();
          }
          //
        }
        else {
          this.startPhase();
        }
        //
      }
      else {
        this.startImpulse();
      }
      //
    }
  }

  /**
   * Round
   */
  public startRound() {
    emitter.emit('m_start_round', { round: this._round });
    this._turn = 0;
    this.startTurn();
  }

  public endRound() {
    emitter.emit('m_end_round', { round: this._round });
  }

  /**
   * Turn
   */
  public startTurn() {
    const name = this._players.at(this._turn).name;
    emitter.emit('m_start_turn', { turn: this._turn, name: name });
    this._phase = 0;
    this.startPhase();
  }

  public endTurn() {
    const name = this._players.at(this._turn).name;
    emitter.emit('m_end_turn', { turn: this._turn, name: name });
  }

  /**
   * Phase
   */
  public startPhase() {
    const name = config.phases.at(this._phase)?.name;
    emitter.emit('m_start_phase', { phase: this._phase, name: name });
    this._phaseLim = config.phases.at(this._phase)?.lim ?? -1;
    const skip = this._phaseLim < 0;
    if (skip) {
      emitter.emit('m_skip_phase', { phase: this._phase, name: name });
      this.next();
    }
    else {
      this._imp = 0;
      this.startImpulse();
    }
  }

  public endPhase() {
    const name = config.phases.at(this._phase)?.name;
    emitter.emit('m_end_phase', { phase: this._phase, name: name });
  }

  /**
   * Impulse
   */
  public startImpulse() {
    emitter.emit('m_start_imp', { imp: this._imp, lim: this._phaseLim });
  }

  public endImpulse() {
    emitter.emit('m_end_imp', { imp: this._imp, lim: this._phaseLim });
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
