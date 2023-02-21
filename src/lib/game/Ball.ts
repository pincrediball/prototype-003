import { Asset } from './Asset';
import { Vector, Coords } from './Math';

export class Ball {
  position = new Coords();
  velocity = new Vector();
  size = 20;
  asset = new Asset('ball.png');
}
