import { Ball } from '../Ball';
import { BumperCircle } from '../Components/BumperCircle';
import { ballSize, gridSize } from '../Globals';
import { Level } from '../Level';

export class LevelA01 extends Level {
  width = 400;
  height = 600;
  title = 'Level A01: Introducing Pincrediball';

  constructor() {
    super('A01', [new BumperCircle(), new BumperCircle(), new BumperCircle()]);

    this.playbook.actionsPerTick.set(5, ['exclaim-excitement', 'plunge']);
    this.playbook.actionsPerTick.set(10, ['exclaim-determination']);
    this.playbook.actionsPerTick.set(18, ['l-flipper']);
    this.playbook.actionsPerTick.set(20, ['r-flipper']);
    this.playbook.actionsPerTick.set(35, ['l-flipper', 'r-flipper']);
    this.playbook.actionsPerTick.set(38, ['r-flipper']);
    this.playbook.actionsPerTick.set(300, ['l-flipper']);
    this.playbook.actionsPerTick.set(310, ['r-flipper']);
    this.playbook.actionsPerTick.set(500, ['exclaim-let-it-drain']);
  }

  spawnRootBall(): Ball {
    // prettier-ignore
    return new Ball()
      .atCoords(
        this.width - ballSize - gridSize,
        this.height - ballSize - gridSize,
      );
  }
}
