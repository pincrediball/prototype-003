import { Asset } from './Asset';
import type { Ball } from './Ball';
import type { Level } from './Level';

export class Machine {
  level?: Level;
  width = 400;
  height = 600;
  backplate: Asset = new Asset('/assets/backplates/default.png');
  balls: Ball[] = [];

  private freshBall?: Ball;

  load(level: Level) {
    this.level = level;
    this.backplate = new Asset(`/assets/backplates/${level.id}.png`);
  }

  reset() {
    if (!this.level) {
      throw new Error("Can't reset if there's no level loaded yet");
    }
    this.balls = [];
    this.freshBall = this.level.spawnRootBall();
    this.balls.push(this.freshBall);
  }

  plunge() {
    this.freshBall?.velocity.add({ x: 0, y: -10 });
    this.freshBall = undefined;
  }

  tick() {
    this.balls.forEach((b) => {
      b.position.add(b.velocity);
    });
  }
}
