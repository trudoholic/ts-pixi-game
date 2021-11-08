export default class Comp {

  private _children: Array<Comp> = [];
  private _name: string = '';
  private _parent: Comp | null = null;

  constructor(name: string) {
    this._name = name;
  }

  public add(comp: Comp) {
    this._children.push(comp);
    comp.parent = this;
  }

  public get children() {
    return this._children.map(it =>it.name);
  }

  public get name() {
    return this._name;
  }

  public set parent(comp: Comp) {
    this._parent = comp;
  }

}
