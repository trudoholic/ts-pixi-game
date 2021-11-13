import * as PIXI from 'pixi.js'
import config from '../config'

class World extends PIXI.Container {

  private g = new PIXI.Graphics();

  constructor() {
    super();
    this.name = "World";
    this.addChild(this.g);
  }

  public init(rect: PIXI.Rectangle) {
    const g = this.g;
    g.lineStyle(1, 0xffffff);
    g.drawRect(150, 80, rect.width - 300, 100);

    config.players.forEach((it, i) => {
      g.drawRect(30 + i * 390, 200, 370, 500);
      g.drawRect(30 + i * 390 + 123, 200, 123, 500);
    });

    g.drawRect(150, 720, rect.width - 300, 100);
  }


}

const world = new World();

export default world;
