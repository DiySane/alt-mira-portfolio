<script>
  export let id;
  export let title;
</script>

<section {id}>
  <div class="container">
    <h1>{title}</h1>
    <slot />
  </div>
</section>