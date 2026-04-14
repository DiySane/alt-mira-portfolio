<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const services = [
    "Logo Design and Brand Guidelines",
    "Visual Identity Design",
    "Print Design Support",
    "Social Media Design",
    "Art Direction"
  ];

  const works = [
    {
      category: "Visual Branding",
      items: ["Brand Identity", "Typography System"]
    },
    {
      category: "Logo Identity & Design",
      items: ["Logo Systems", "Icon Sets"]
    },
    {
      category: "Social Branding",
      items: ["Instagram Kits", "Campaign Creatives"]
    },
    {
      category: "Media / Print / Packaging",
      items: ["Packaging Design", "Print Collateral"]
    }
  ];
</script>

<Navbar />

<main>

  <!-- ABOUT -->
  <section id="about">
    <div class="container">
      <h1>ABOUT</h1>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services">
    <div class="container">
      <h1>SERVICES</h1>

      <div class="services">
        {#each services as s}
          <div class="service">{s}</div>
        {/each}
      </div>
    </div>
  </section>

  <!-- WORKS -->
  <section id="works">
    <div class="container">
      <h1>WORKS</h1>

      <div class="works">
        {#each works as group}
          <div class="work-group">
            <h3>{group.category}</h3>

            <div class="items">
              {#each group.items as item}
                <div class="item">{item}</div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

</main>

<Footer />

<style>
  main {
    margin-top: 90px;
  }

  /* SERVICES */
  .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    max-width: 600px;
    background: #f8fafc;
  }

  #services {
  background: #f8fafc;
}

  .service {
    border: 1px solid var(--border);
    padding: 14px;
    font-size: 13px;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }

  .service:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  /* WORKS */
  .works {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .work-group h3 {
    border-bottom: 2px solid var(--primary);
    display: inline-block;
    padding-bottom: 6px;
    margin-bottom: 20px;
  }

  .item {
    border-bottom: 1px solid var(--border);
    padding-bottom: 8px;
    transition: all 0.2s;
  }

  .item:hover {
    color: var(--primary);
    transform: translateX(5px);
  }

  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 60px;
  }

  h1 {
  background: linear-gradient(to right, #111, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>