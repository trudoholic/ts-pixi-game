import emitter from './eventEmitter';
import loadCommands from './commands';

// import model from "./model/model"
import ConsView from "./cons-view/ConsView"
import PixiView from "./pixi-view/PixiView"

// const model = new Model();
// model.hello();

const consView = new ConsView();
const pixiView = new PixiView();
// pixiView.hello();

loadCommands(emitter);
