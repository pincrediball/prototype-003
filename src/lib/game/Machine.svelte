<script lang="ts">
  import { LevelA01 } from './levels/LevelA01';
  import { Machine } from './Machine';

  let level = new LevelA01();
  let machine = new Machine();
  $: style = `
    width: ${machine.width}px;
    height: ${machine.height}px;
    background-image: url(${machine.backplate.url})`;
</script>

<div class="px-4 text-center">
  <div class="border border-black inline-block">
    <div {style}>Machine</div>
  </div>
</div>
