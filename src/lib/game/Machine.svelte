<script lang="ts">
  import { machine, balls } from '$lib/state/stores';
  import Ball from './Ball.svelte';

  $: style = `
    position: relative;
    width: ${$machine.width}px;
    height: ${$machine.height}px;
    background-image: url(${$machine?.backplate.url})`;
</script>

<div class="px-4 text-center">
  <div class="border border-black shadow-firm">
    <div {style}>
      {#each $balls as ball}
        <Ball {ball} />
      {/each}
    </div>
  </div>
</div>
