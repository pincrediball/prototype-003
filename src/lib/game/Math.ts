export interface XYData {
  x: number;
  y: number;
}

export class XYTuple implements XYData {
  x = 0;
  y = 0;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  multiply(vector: XYData) {
    this.x = Math.trunc(this.x * vector.x);
    this.y = Math.trunc(this.y * vector.y);
  }

  add(tuple: XYData) {
    this.x = Math.trunc(this.x + tuple.x);
    this.y = Math.trunc(this.y + tuple.y);
  }
}

export class Vector extends XYTuple {
  constructor(x = 0, y = 0) {
    super(x, y);
  }
}

export class Coords extends XYTuple {
  constructor(x = 0, y = 0) {
    super(x, y);
  }
}
