import type { Level } from './Level';
import { Machine } from './Machine';
import { game } from '$lib/state/stores';

export class Game {
  level?: Level;
  machine: Machine = new Machine();

  private ticker?: number;
  private t = 0;

  start(level: Level) {
    this.level = level;
    this.machine.load(level);
    this.machine.reset();
  }

  run() {
    this.machine.reset();
    this.t = 0;
    this.ticker = window.setInterval(() => {
      console.log('tick!');
      this.t++;

      const actions = this.level?.playbook.actionsPerTick.get(this.t);
      if (actions) {
        actions.forEach((action) => {
          switch (action) {
            case 'plunge':
              this.machine.plunge();
              break;
            default:
              console.log('Not implemented action ' + action);
          }
        });
      }

      this.machine.tick();
      game.update((g) => g);
    }, 100);
  }

  reset() {
    this.stop();
    this.machine.reset();
    game.update((g) => g);
  }

  stop() {
    window.clearInterval(this.ticker);
    game.update((g) => g);
  }
}
