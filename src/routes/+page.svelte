<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Section from '$lib/components/Section.svelte';

  import { services, works } from '$lib/data/content';
  import { reveal } from '$lib/utils/reveal';
  import { magnetic } from '$lib/utils/magnetic';
</script>

<Navbar />

<main>

  <Section id="about" title="ABOUT" />

  <Section id="services" title="SERVICES">
    <div class="services">
      {#each services as s}
        <div class="service reveal" use:reveal use:magnetic>
          {s}
        </div>
      {/each}
    </div>
  </Section>

  <Section id="works" title="WORKS">
    <div class="works">
      {#each works as work}
        <a class="work-card" href={`/works/${work.slug}`} sveltekit:prefetch use:magnetic>
          <h3>{work.title}</h3>
          <p>{work.category}</p>
        </a>
      {/each}
    </div>
  </Section>

</main>

<Footer />

<style>
  .services {
    display: grid;
    gap: 20px;
  }

  .service {
    border: 1px solid var(--border);
    padding: 14px;
    transition: 0.3s;
  }

  .service:hover {
    background: var(--primary);
    color: white;
  }

  .works {
    display: grid;
    gap: 20px;
  }

  .work-card {
    display: block;
    padding: 20px;
    border: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
  }

  .work-card:hover {
    background: var(--primary);
    color: white;
  }
</style>