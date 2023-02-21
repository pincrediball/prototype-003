import type { Action } from './Action';

export class Playbook {
  actionsPerTick: Map<number, Action[]> = new Map();
}
