import * as PIXI from 'pixi.js'
import emitter from '../../eventEmitter'

export default class Button extends PIXI.Container {

  private bg: PIXI.Sprite;
  private fg: PIXI.Sprite;
  private label: PIXI.Text;
  private textStyle: PIXI.TextStyle;

  private _disabled: boolean = true;

  constructor(text: string) {
    super();
    this.name = text;

    const width = 80, height = 30, padding = 2;

    const bg = this.bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    bg.tint = 0x808080;
    bg.width  = width;
    bg.height = height;
    this.addChild(bg);

    const fg = this.fg = new PIXI.Sprite(PIXI.Texture.WHITE);
    fg.tint = 0xffffff;
    fg.width  = width  - padding - padding;
    fg.height = height - padding - padding;
    fg.x = padding;
    fg.y = padding;
    fg.visible = false;
    this.addChild(fg);

    this.textStyle = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'Arial',
      fontSize: 16,
      fill: 0xffffff,
    });

    this.label = new PIXI.Text(text, this.textStyle);
    if (this.label.width > width) {
      this.label.width = width;
    }
    this.label.anchor.set(0.5, 0.5);
    this.addChild(this.label);
    this.label.position.set(width / 2, height / 2);

    this.interactive = true;
    this.buttonMode  = true;
    this.on('pointerup', this.onPointerUp);
    this.on('pointerover', () => this.fg.alpha = .5);
    this.on('pointerout',  () => this.fg.alpha = 1);

  }

  public onPointerUp(event: PIXI.InteractionEvent) {
    event.stopPropagation();
    if (this._disabled) {
      return;
    }
    emitter.emit('click_button', {
      targetName: event.target.name,
      currentTargetName: event.currentTarget.name,
    });
  }

  /**
   * setText
   */
  public setText(text: string) {
    this.label.text = this.name + ': ' + text;
  }

  public disable() {
    this._disabled = true;
    this.textStyle.fill = 0xffffff;
    this.label.style = this.textStyle;
    this.bg.tint = 0x808080;
    this.fg.visible = false;
  }

  public enable() {
    const COLOR = 0x35654d;
    this._disabled = false;
    this.textStyle.fill = COLOR;
    this.label.style = this.textStyle;
    this.bg.tint = COLOR;
    this.fg.visible = true;
  }

}
