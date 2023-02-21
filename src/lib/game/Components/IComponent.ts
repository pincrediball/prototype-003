import type { Ball } from '../Ball';

export interface IComponent {
  title: string;
  description: string;
  assetUrl: string;

  onBeforeBallHit?: (ball: Ball) => void;
  onAfterBallHit?: (ball: Ball) => void;
}
