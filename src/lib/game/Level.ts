import type { IComponent } from './Components/IComponent';
import { Playbook } from './Playbook';

export class Level {
  id: string;
  availableComponents: IComponent[];
  playbook: Playbook = new Playbook();

  constructor(id: string, components: IComponent[]) {
    this.id = id;
    this.availableComponents = components || [];
  }
}
