<script lang="ts">
  import AnchorButton from '$lib/components/AnchorButton.svelte';
  import GameButton from '$lib/components/GameButton.svelte';
  import Controls from '$lib/game/Controls.svelte';
  import LevelHeader from '$lib/game/LevelHeader.svelte';
  import LevelToolbox from '$lib/game/LevelToolbox.svelte';
  import Machine from '$lib/game/Machine.svelte';
  import Playbook from '$lib/game/Playbook.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // TODO
  });

  function plunge() {
    // TODO
  }
</script>

<div class="grid grid-cols-[1fr_min-content_1fr] m-4">
  <div class="flex flex-col gap-2">
    <LevelHeader />
    <LevelToolbox />
    <GameButton clazz="w-full">ℹ Buy a hint</GameButton>
    <AnchorButton href="/menu">↗ Exit level</AnchorButton>
  </div>
  <div class="shrink">
    <Machine />
  </div>
  <div class="flex flex-col gap-4">
    <Playbook />
    <div class="text-xl px-4 py-2 bg-neutral-600 my-8">
      <p>1200 points = 🥉 bronze!</p>
      <p>2400 points = 🥈 silver!</p>
      <p>3500 points = 🥇 gold!</p>
    </div>
    <div>
      <Controls />
    </div>
  </div>
</div>
