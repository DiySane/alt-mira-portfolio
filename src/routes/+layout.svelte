<script>
  import '../app.css';
  import Cursor from '$lib/components/Cursor.svelte';
  import { onMount } from 'svelte';

  let progress = 0;

  onMount(() => {
    const update = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      progress = (scroll / height) * 100;
    };

    window.addEventListener('scroll', update);

    return () => {
      window.removeEventListener('scroll', update);
    };
  });
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="progress" style="width: {progress}%"></div>

<Cursor />

<slot />

<style>
  .progress {
    position: fixed;
    top: 0;
    height: 3px;
    background: var(--primary);
    z-index: 2000;
  }
</style>