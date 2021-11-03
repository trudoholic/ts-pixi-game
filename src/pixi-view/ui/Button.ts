import * as PIXI from 'pixi.js'
import emitter from '../../eventEmitter'

export default class Button extends PIXI.Container {

  private label: PIXI.Text;

  constructor(text: string) {
    super();
    // this.name = "Button";
    this.name = text;

    const width = 80, height = 30;
    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    sprite.tint = 0x808080;
    sprite.width  = width;
    sprite.height = height;
    this.addChild(sprite);

    const textStyle = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'Arial',
      fontSize: 16,
      fill: 0xffffff,
    });

    this.label = new PIXI.Text(text, textStyle);
    // this.label = new PIXI.Text('0', textStyle);
    if (this.label.width > width) {
      this.label.width = width;
    }
    this.label.anchor.set(0.5, 0.5);
    this.addChild(this.label);
    this.label.position.set(width / 2, height / 2);

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
