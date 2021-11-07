import emitter from '../eventEmitter';

class Model {

  private _active: boolean = false;

  constructor() {
    // super();
    // Focused
    // Expanded/Toggled/Selected
    // Disabled Enabled
    // Hover and Active Activated
    // Pressed Clicked Dragged

  }

  /**
   * start
   */
  public start() {
    if (! this._active) {
      this._active = true;
      emitter.emit('m_start', {});
    }
  }

  /**
   * end
   */
  public end() {
    if (this._active) {
      this._active = false;
      emitter.emit('m_end', {});
    }
  }

}

const model = new Model();

export default model;
