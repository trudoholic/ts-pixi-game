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

    this.addButton();
    this.addButton();
  }

    /**
     * addButton
     */
    public addButton() {
      const button = new Button();
      this.addChild(button);
      this.buttons.push(button);

      const padding = 20;
      const r = this.buttons.reduce((width: number, it) => (
        button.x = width,
        button.y = 10,
        width + button.width + 10
      ), padding);
      console.log("r =", r);

      this.bg.width = r + padding;
      this.bg.height = button.height + 20;

    }

}
