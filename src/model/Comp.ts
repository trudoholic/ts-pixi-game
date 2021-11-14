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

  public length() {
    return this._children.length;
  }

  public get childrenList() {
    return this._children.map(it => it.name);
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

  public byName(name: string): Comp | undefined {
    let comp = undefined;
    if (this._name === name) {
      comp = this;
    }
    else {
      this._children.some(it => {
        comp = it.byName(name);
        return !!comp;
      });
    }
    return comp;
  }

}
