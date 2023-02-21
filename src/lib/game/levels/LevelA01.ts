import { BumperCircle } from '../Components/BumperCircle';
import { Level } from '../Level';

export class LevelA01 extends Level {
  constructor() {
    super('A01', [new BumperCircle(), new BumperCircle(), new BumperCircle()]);

    this.playbook.actionsPerTick.set(1, ['exclaim-excitement']);
    this.playbook.actionsPerTick.set(5, ['exclaim-determination', 'plunge']);
    this.playbook.actionsPerTick.set(10, ['l-flipper']);
    this.playbook.actionsPerTick.set(11, ['r-flipper']);
    this.playbook.actionsPerTick.set(20, ['l-flipper']);
    this.playbook.actionsPerTick.set(21, ['r-flipper']);
    this.playbook.actionsPerTick.set(30, ['l-flipper']);
    this.playbook.actionsPerTick.set(31, ['r-flipper']);
    this.playbook.actionsPerTick.set(50, ['exclaim-let-it-drain']);
  }
}
