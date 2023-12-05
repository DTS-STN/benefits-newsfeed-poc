<script>
  import { onMount } from "svelte";
  export let id;

  let card;
  let cardHeight = 0;
  let screenWidth;

  onMount(() => {
    card = document.querySelector(`#${id}`);
    screenWidth = window.screen.width;
  });

  function toggleOpen() {
    if (card.classList.contains("closed")) card.classList.remove("closed");
    else card.classList.add("closed");
  }
</script>

<div bind:clientHeight={cardHeight} {id} class="closed">
  <slot />
</div>
{#if card && card.scrollHeight > cardHeight}
  <button on:click={toggleOpen} class="bg-primary text-white p-1 rounded mt-5"
    >read more</button
  >
{/if}

<style>
  .closed {
    max-height: 200px;
    overflow: hidden;
  }

  @media screen and (max-width: 568px) {
    .closed {
      max-height: 450px;
    }
  }
</style>
