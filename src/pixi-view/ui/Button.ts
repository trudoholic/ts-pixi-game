import * as PIXI from 'pixi.js'
import emitter from '../../eventEmitter'

export default class Button extends PIXI.Container {

  constructor() {
    super();
    this.name = "Button";

    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    sprite.tint = 0xffff00;
    sprite.width  = 40;
    sprite.height = 30;
    this.addChild(sprite);

    this.interactive = true;
    this.buttonMode  = true;
    this.on('pointerup', this.onPointerUp);
  }

  public onPointerUp(event: PIXI.InteractionEvent) {
    event.stopPropagation();
    emitter.emit('test2', {
      targetName: event.target.name,
      currentTargetName: event.currentTarget.name,
    });
  }

}
