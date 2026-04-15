<script>
  import { works } from '$lib/data/content';
  import { magnetic } from '$lib/utils/magnetic';
</script>

<div class="works">
  {#each works as work}
    <a href={`/works/${work.slug}`} class="work-card" use:magnetic>
      <h3>{work.title}</h3>
      <p>{work.category}</p>
    </a>
  {/each}
</div>

<style>
  .work-card {
    display: block;
    padding: 20px;
    border: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .work-card:hover {
    background: var(--primary);
    color: white;
  }
</style>