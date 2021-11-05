import * as PIXI from 'pixi.js'
import emitter from '../eventEmitter'

import config from '../config'
import Panel from "./ui/Panel"

export default class HUD extends PIXI.Container {

  constructor(rect: PIXI.Rectangle) {
    super();
    this.name = "HUD";

    const panelA = new Panel(rect);
    this.addChild(panelA);
    config.players.forEach(it => panelA.addButton(it.name));

    const panelB = new Panel(rect, { isVert: true, dockX: .5, dockY: .5 });
    this.addChild(panelB);
    config.players.forEach(it => panelB.addButton(it.name));

  }

}
