import * as PIXI from 'pixi.js'
// import emitter from '../eventEmitter'

import Button from "./Button"

export default class Panel extends PIXI.Container {

  constructor() {
    super();
    this.name = "Panel";
    this.interactive = true;
    this.on('pointerup', e => { e.stopPropagation() });

    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    sprite.alpha = .5;
    this.addChild(sprite);

    const button = new Button();
    this.addChild(button);

    sprite.width  = button.width  + 20;
    sprite.height = button.height + 20;

    button.x = 10;
    button.y = 10;
  }

}
