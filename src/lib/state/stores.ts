import { Game } from '$lib/game/Game';
import { derived, writable } from 'svelte/store';

export const game = writable(new Game());

export const machine = derived(game, ($game) => $game.machine);
export const balls = derived(machine, ($machine) => $machine.balls);
