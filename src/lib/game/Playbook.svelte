<script>
  import { LevelA01 } from './levels/LevelA01';

  // temp
  let level = new LevelA01();
  let actions = level.playbook.actionsPerTick.values();
</script>

<div
  class="border-4 border-black grid grid-cols-[min-content_1fr] text-xl font-mono text-green-600 green-glow"
>
  {#each [...level.playbook.actionsPerTick] as [key, value]}
    <div class="px-2 py-1 bg-gradient-to-b from-black/10 to-black/30 text-right">{key}</div>
    <div class="px-2 py-1 bg-gradient-to-b from-black/10 to-black/30">{value}</div>
  {/each}
</div>
