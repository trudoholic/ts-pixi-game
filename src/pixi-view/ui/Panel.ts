import * as PIXI from 'pixi.js'
import Button from "./Button"

export default class Panel extends PIXI.Container {

  private conf: any;
  private bg: PIXI.Sprite;
  private buttonsContainer = new PIXI.Container;

  constructor(conf: any) {
    super();
    this.conf = conf;
    this.name = "Panel";
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
      // this.x = this.conf.dockX > 0 ? (this.conf.dockX < 1 ? (this.parent.width - this.bg.width) / 2 : this.parent.width - this.bg.width) : 0;
    }

}
