import emitter from './eventEmitter';
import loadCommands from './commands';

import Model from "./model/Model"
import ConsView from "./cons-view/ConsView"
import PixiView from "./pixi-view/PixiView"

const model = new Model();
// model.hello();

const consView = new ConsView();
const pixiView = new PixiView();
// pixiView.hello();

loadCommands(emitter);
