import * as PIXI from 'pixi.js'
import emitter from '../eventEmitter'
import mediator from './mediator'

import config from '../config'
import Panel from "./ui/Panel"

export default class HUD extends PIXI.Container {

  constructor(rect: PIXI.Rectangle) {
    super();
    this.name = "HUD";

    const panelA = new Panel(rect, { isVert: true });
    this.addChild(panelA);
    ['Draw', 'Play', 'Hand', 'Keep'].forEach(it => panelA.addButton(it));

    const panelB = new Panel(rect, { isVert: true, dockX: 1 });
    this.addChild(panelB);
    ['Deck', 'Pile', 'Round', 'Player'].forEach(it => panelB.addButton(it));

    const panelC = new Panel(rect, { dockX: .5 });
    this.addChild(panelC);
    ['New', 'Next', 'End'].forEach(it => panelC.addButton(it));

    const panelD = new Panel(rect, { dockX: .5, dockY: 1 });
    this.addChild(panelD);
    config.players.forEach(it => panelD.addButton(it.name));

    const button = mediator.getButton('New');
    if (button) {
      button.enable();
    }

  }

}
