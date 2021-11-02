// import * as PIXI from 'pixi.js-legacy';
import * as PIXI from 'pixi.js'
import emitter from '../eventEmitter'

import HUD from "./HUD"

export default class PixiView {

  private app: PIXI.Application;

  /**
   *
   */
  constructor() {
    this.app = new PIXI.Application({
      width: 1200,
      height: 900,
      backgroundColor: 0x35654d,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
    });

    const view = this.app.view;
    document.body.appendChild(view);

    // tsconfig.json :: "esModuleInterop": true,
    this.app.stage.name = "stage";
    this.app.stage.interactive = true;
    this.app.stage.hitArea = this.app.screen;
    this.app.stage.on('pointerup', this.onPointerUp);

    // this.test();
    // this.hit_test();

    const hud = new HUD();
    this.app.stage.addChild(hud);

  }

  /**
   * onPointerUp
   */
  public onPointerUp(event: PIXI.InteractionEvent) {
    event.stopPropagation();
    // const e = event.data.originalEvent;
    // if (e) {
      // const target = e.target as PIXI.Container;
      // const currentTarget = e.currentTarget as PIXI.Container;
      // console.log(">>", (e.target as any).name, (e.currentTarget as any).name);
    // }

    emitter.emit('test', {
      targetName: event.target.name,
      currentTargetName: event.currentTarget.name,
    });
  }

  /**
   * hit_test
   */
  public hit_test() {
    const container = new PIXI.Container();
    container.name = "container";
    this.app.stage.addChild(container);

    container.interactive = true;
    container.on('pointerup', this.onPointerUp);

    // const texture = PIXI.Texture.from('examples/assets/bunny.png');
    const texture = PIXI.Texture.WHITE; // 16x16
    for (let i = 0; i < 25; i++) {
        const bunny = new PIXI.Sprite(texture);
        bunny.alpha = 0.5;
        bunny.anchor.set(0.5);
        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        bunny.name = "bunny_" + i;
        container.addChild(bunny);

        bunny.interactive = true;
        bunny.buttonMode  = true;
        bunny.on('pointerup', this.onPointerUp);
    }

    container.x = this.app.screen.width / 2;
    container.y = this.app.screen.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
  }

  /**
   * test
   */
  public test() {
    const container = new PIXI.Container();
    this.app.stage.addChild(container);

    const texture = PIXI.Texture.WHITE;
    for (let i = 0; i < 25; i++) {
        const bunny = new PIXI.Sprite(texture);
        bunny.alpha = 0.5;
        bunny.anchor.set(0.5);
        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }

    container.x = this.app.screen.width / 2;
    container.y = this.app.screen.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    this.app.ticker.add((delta) => {
        container.rotation -= 0.01 * delta;
    });
  }

  /**
   * hello
   */
  public hello() {
    console.log("hello Pixi View!");
  }

}
