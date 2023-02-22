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
  <div class="border border-black shadow-firm relative">
    <div
      {style}
      class="
      after:bg-[url('/assets/grid-bg-lg.png')]
      after:bg-repeat
      after:content-[' ']
      after:absolute
      after:top-0
      after:bottom-0
      after:left-0
      after:right-0
    "
    >
      {#each $balls as ball}
        <Ball {ball} />
      {/each}
    </div>
  </div>
</div>
