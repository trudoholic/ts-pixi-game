import Comp from '../Comp';
import Zone from './Zone';
import config from '../../config'

export default class Player extends Comp {

  constructor(name: string) {
    super(name);

    config.zones.forEach(it => this.add(new Zone(this.name + it.name)));
    // console.log(this.childrenList);

    // config.zones.forEach(it => {
    //   let name = this.name + it.name, zone = new Zone(name);
    //   this.add(zone);
    //   zone.test = '#' + name;
    // });
  }

}
