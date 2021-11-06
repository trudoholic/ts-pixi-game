import * as PIXI from 'pixi.js'
import Button from './Button'
import mediator from '../mediator'

export default class Panel extends PIXI.Container {

  private bg: PIXI.Sprite;
  private buttonsContainer = new PIXI.Container;
  private conf: any;
  private rect: PIXI.Rectangle;

  constructor(rect: PIXI.Rectangle, conf: any = {}) {
    super();
    this.conf = conf;
    this.name = "Panel";
    this.rect = rect;

    this.interactive = true;
    this.on('pointerup', e => { e.stopPropagation() });

    const bg = this.bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    bg.alpha = .5;
    this.addChild(bg);
    this.addChild(this.buttonsContainer);
  }

    /**
     * addButton
     */
    public addButton(text: string) {
      const button = new Button(text);
      mediator.register(button);
      this.buttonsContainer.addChild(button);
      this.conf.isVert ? this.adjustY(button) : this.adjustX(button);
    }

    /**
     * adjustX
     */
    private adjustX(button: Button) {
      const paddingX = 20, paddingY = 15, gap = 10;
      const list = this.buttonsContainer.children;
      const bgWidth = list.reduce((width: number, it) => (
        (it as Button).x = width,
        (it as Button).y = paddingY,
        width + (it as Button).width + gap
      ), paddingX);
      this.bg.width = bgWidth - gap + paddingX;
      this.bg.height = button.height + paddingY + paddingY;
      this.setPos();
    }

    /**
     * adjustY
     */
    private adjustY(button: Button) {
      const paddingX = 20, paddingY = 15, gap = 10;
      const list = this.buttonsContainer.children;
      const bgHeight = list.reduce((height: number, it) => (
        (it as Button).x = paddingX,
        (it as Button).y = height,
        height + (it as Button).height + gap
      ), paddingY);
      this.bg.width = button.width + paddingX + paddingX;
      this.bg.height = bgHeight - gap + paddingY;
      this.setPos();
    }

    /**
     * setPos
     */
    private setPos() {
      const dW = this.rect.width - this.bg.width;
      const dH = this.rect.height - this.bg.height;
      this.x = ! this.conf.dockX ? 0 : this.conf.dockX < 1 ? dW / 2 : dW;
      this.y = ! this.conf.dockY ? 0 : this.conf.dockY < 1 ? dH / 2 : dH;
    }

}
