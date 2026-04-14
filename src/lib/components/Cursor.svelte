<script>
  import { onMount } from 'svelte';
  let el;

  onMount(() => {
    window.addEventListener('mousemove', (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  });
</script>

<div bind:this={el} class="cursor"></div>

<style>
  .cursor {
    position: fixed;
    width: 12px;
    height: 12px;
    background: var(--primary);
    border-radius: 50%;
    pointer-events: none;
  }
</style>