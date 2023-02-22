<script>
  import { level, game } from '$lib/state/stores';
</script>

<div class="border-2 border-black shadow-firm">
  <div
    class="grid grid-cols-[min-content_min-content_1fr] text-xl font-mono text-green-600 green-glow"
  >
    {#each [...($level?.playbook.actionsPerTick || [])] as [key, value]}
      <div class="px-1 py-1 bg-gradient-to-b from-neutral-700/50 to-neutral-800/50">
        <span class={$game.t >= key ? 'visible' : 'invisible'}>✅</span>
      </div>
      <div class="pl-4 pr-2 py-1 bg-gradient-to-b from-neutral-700/50 to-neutral-800/50 text-right">
        {key}
      </div>
      <div class="px-2 py-1 bg-gradient-to-b from-neutral-700/50 to-neutral-800/50">
        {value}
      </div>
    {/each}
  </div>
</div>
