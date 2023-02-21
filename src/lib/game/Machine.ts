import { Asset } from './Asset';
import type { Ball } from './Ball';
import type { Level } from './Level';

export class Machine {
  width = 400;
  height = 600;
  backplate: Asset = new Asset('/assets/backplates/default.png');
  balls: Ball[] = [];

  load(level: Level) {
    this.backplate = new Asset(`/assets/backplates/${level.id}.png`);
    this.balls.push(level.spawnRootBall());
  }
}
