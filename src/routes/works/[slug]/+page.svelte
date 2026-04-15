<script>
  export let data;
  const { work } = data;
</script>

<main class="case">

  <div class="container">

    <h1>{work.title}</h1>

    <p class="category">{work.category}</p>

    <p class="description">{work.description}</p>

    <div class="content">
      {work.content}
    </div>

    <a href="/" class="back">← Back</a>

  </div>

</main>

<style>
  .case {
    padding: 120px 0;
  }

  .category {
    color: var(--primary);
    margin-bottom: 20px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .content {
    line-height: 1.6;
    color: var(--muted);
  }

  .back {
    display: inline-block;
    margin-top: 60px;
    text-decoration: none;
    color: var(--primary);
  }
</style>