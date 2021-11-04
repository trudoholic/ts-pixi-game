import * as PIXI from 'pixi.js'
// import emitter from '../eventEmitter'

import Button from "./Button"

export default class Panel extends PIXI.Container {

  private bg: PIXI.Sprite;
  private buttons: Array<Button> = [];

  constructor() {
    super();
    this.name = "Panel";
    this.interactive = true;
    this.on('pointerup', e => { e.stopPropagation() });

    const bg = this.bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    bg.alpha = .5;
    this.addChild(bg);
  }

    /**
     * addButton
     */
    public addButton(text: string) {
      const button = new Button(text);
      this.addChild(button);
      this.buttons.push(button);

      const paddingX = 20, paddingY = 15, gap = 10;
      const bgWidth = this.buttons.reduce((width: number, it) => (
        button.x = width,
        button.y = paddingY,
        width + button.width + gap
      ), paddingX);

      // console.log("bgWidth =", bgWidth);

      this.bg.width = bgWidth - gap + paddingX;
      this.bg.height = button.height + paddingY + paddingY;

    }

}
