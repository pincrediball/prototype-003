import { Asset } from './Asset';
import { Vector, Coords } from './Math';

export class Ball {
  asset = new Asset('/assets/ball.png');
  position: Coords;
  velocity: Vector;

  constructor() {
    this.position = new Coords();
    this.velocity = new Vector();
  }

  atCoords(x: number, y: number) {
    this.position = new Coords(x, y);
    return this;
  }

  atVelocity(vx: number, vy: number) {
    this.velocity = new Vector(vx, vy);
    return this;
  }
}
