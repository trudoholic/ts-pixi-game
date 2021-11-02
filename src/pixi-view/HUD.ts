import * as PIXI from 'pixi.js'
import emitter from '../eventEmitter'

import config from '../config'
import Panel from "./ui/Panel"

export default class HUD extends PIXI.Container {

  constructor() {
    super();
    this.name = "HUD";

    const panel = new Panel();
    this.addChild(panel);
    config.players.forEach(it => panel.addButton(it.name));
  }

}
