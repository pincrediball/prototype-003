<script lang="ts">
  export let href: string;
</script>

<a {href} class="flex group font-bold text-xl w-full">
  <img
    class="invisible group-hover:visible group-hover:animate-spin inline-block w-8 m-2"
    src="/favicon.png"
    alt="Spinning Pincrediball logo"
  />
  <div
    class="
    py-2 px-8 grow shadow-firm
  bg-amber-400 text-neutral-900
    bg-gradient-to-b from-amber-400 to-amber-500
  group-hover:from-amber-500 group-hover:to-orange-500
  "
  >
    <slot />
  </div>
  <img
    class="invisible group-hover:visible group-hover:animate-spin inline-block w-8 m-2"
    src="/favicon.png"
    alt="Spinning Pincrediball logo"
  />
</a>
