<script lang="ts">
  import AnchorButton from '$lib/components/AnchorButton.svelte';
  import GameButton from '$lib/components/GameButton.svelte';
  import Controls from '$lib/game/Controls.svelte';
  import LevelHeader from '$lib/game/LevelHeader.svelte';
  import { LevelA01 } from '$lib/game/levels/LevelA01';
  import LevelToolbox from '$lib/game/LevelToolbox.svelte';
  import Machine from '$lib/game/Machine.svelte';
  import Playbook from '$lib/game/Playbook.svelte';
  import { game } from '$lib/state/stores';

  let level = new LevelA01();
  $game.start(level);
</script>

<div class="m-4">
  <LevelHeader />
  <div class="grid grid-cols-[1fr_min-content_1fr] mt-4">
    <div class="flex flex-col gap-2">
      <LevelToolbox />
      <div class="mt-auto flex flex-col gap-2">
        <GameButton clazz="w-full">💸 Get a hint</GameButton>
        <AnchorButton href="/menu">🏃‍♂️ Exit level</AnchorButton>
      </div>
    </div>
    <div>
      <Machine />
    </div>
    <div class="flex flex-col gap-4">
      <Playbook />
      <div>
        <Controls />
      </div>
      <div class="text-xl px-4 py-2 bg-neutral-600 mt-auto">
        <p>1200 points = 🥉 bronze!</p>
        <p>2400 points = 🥈 silver!</p>
        <p>3500 points = 🥇 gold!</p>
      </div>
    </div>
  </div>
</div>
