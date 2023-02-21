import type { Level } from './Level';
import { Machine } from './Machine';
import type { Playbook } from './Playbook';

export class Game {
  level?: Level;
  machine: Machine = new Machine();

  start(level: Level) {
    this.level = level;
    this.machine?.load(level);
  }

  run(playbook: Playbook) {
    // TODO
  }
}
