import emitter from '../eventEmitter';

class Model {

  /**
   *
   */
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
    console.log("Model start!");
    emitter.emit('m_start', { targetName: 'New' });
  }
}

const model = new Model();

export default model;
