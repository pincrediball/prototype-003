import type { Ball } from '../Ball';
import { Vector } from '../Math';
import type { IComponent } from './IComponent';

export class BumperCircle implements IComponent {
  title = 'Bumper (circular)';
  description = 'Bounces the ball back and increases velocity immediately';
  assetUrl = 'ball.png';
  multiplier = new Vector(1.5, 1.5);

  onAfterBallHit(ball: Ball) {
    ball.velocity.multiply(this.multiplier);
  }
}
