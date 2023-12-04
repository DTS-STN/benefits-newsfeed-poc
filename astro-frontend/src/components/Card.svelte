<script>
  export let id;
  import { onMount } from "svelte";

  let Y;
  let card;
  let cardHeight = 0;

  onMount(() => {
    card = document.querySelector(`#${id}`);
    Y = screen.width;
  });

  function toggleOpen() {
    if (card.classList.contains("closed")) card.classList.remove("closed");
    else card.classList.add("closed");
  }
</script>

<div bind:clientHeight={cardHeight} {id} class="closed">
  <slot />
</div>
{#if Y>=568 && cardHeight > 200 || Y<568 && cardHeight>500}
  <button on:click={toggleOpen} class="bg-primary text-white p-1 rounded">read more</button>
{/if}

<style>
  .closed {
    max-height: 201px;
    overflow: hidden;
  }

  @media screen and (max-width: 568px) {
    .closed {
      max-height: 500px;
    }
  }
</style>
