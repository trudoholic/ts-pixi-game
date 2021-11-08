import emitter from '../eventEmitter';
import Comp from './Comp';
import config from '../config'

class Model {

  private _active: boolean = false;
  private _root: Comp = new Comp('root');
  private _players: Comp = new Comp('players');

  private _round: number = 0;

  constructor() {
    this._root.add(this._players);
    config.players.forEach(it => this._players.add(new Comp(it.name)));
    console.log(this._players.children);
  }

  /**
   * Game
   */
  public start() {
    if (! this._active) {
      this._active = true;
      emitter.emit('m_start', {});

      this._round = 0;
      this.startRound();
    }
  }

  public end() {
    if (this._active) {
      this.endRound();

      this._active = false;
      emitter.emit('m_end', {});
    }
  }

  public next() {
    if (this._active) {
      this.endRound();
      ++ this._round;
      this.startRound();
    }
  }

  /**
   * Round
   */
  public startRound() {
    emitter.emit('m_start_round', { round: this._round });
  }

  public endRound() {
    emitter.emit('m_end_round', { round: this._round });
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
