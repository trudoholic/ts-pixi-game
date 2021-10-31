// import * as PIXI from 'pixi.js-legacy';
import * as PIXI from 'pixi.js';

export default class PixiView {

  private app: PIXI.Application;

  /**
   *
   */
  constructor() {
    // super();
    this.app = new PIXI.Application({
      width: 1200,
      height: 900,
      backgroundColor: 0x35654d,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
    });

    const view = this.app.view;
    document.body.appendChild(view);
    this.test();

  }

    /**
     * test
     */
    public test() {
      const container = new PIXI.Container();
      this.app.stage.addChild(container);

      // const texture = PIXI.Texture.from('examples/assets/bunny.png');
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
