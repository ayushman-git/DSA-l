class LinkNode {
  _data: string | number | boolean;
  next: any;
  constructor(data: string | number | boolean) {
    this._data = data;
    this.next = null;
  }
}