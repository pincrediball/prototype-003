<script lang="ts">
  import type { Ball } from './Ball';

  export let ball: Ball;
  $: style = `
    top: ${ball.position.y}px;
    left: ${ball.position.x}px;
  `;
</script>

<div class="absolute w-[20px] h-[20px]" {style}>
  <img src={ball.asset.url} alt="ball" />
</div>
