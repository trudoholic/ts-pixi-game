export default class Comp {

  protected _children: Array<Comp> = [];
  protected _name: string = '';
  protected _parent: Comp | null = null;

  constructor(name: string) {
    this._name = name;
  }

  public add(comp: Comp) {
    comp.parent = this;
    this._children.push(comp);
  }

  public at(i: number) {
    return this._children[i];
  }

  public get children() {
    return this._children.map(it =>it.name);
  }

  public get name() {
    return this._name;
  }

  public get parent() {
    return this._parent;
  }

  public set parent(comp: Comp | null) {
    this._parent = comp;
  }

}
