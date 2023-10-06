<script>
  import CarbonBadge from 'svelte-carbonbadge';
</script>

<div class="outer-container">
  <footer class="container">
    <p>
      <b>Bjerk AS</b><br />
      Organisasjonsnummer: 930 334 693<br />
    </p>
    <p class="highlight">
      Kontakt oss på <a href="mailto:kontoret@bjerk.io">kontoret@bjerk.io</a>
    </p>
    <p>
      <CarbonBadge dark />
    </p>
  </footer>
</div>

<style>
  .outer-container {
    background-color: var(--color-solid-bg);
    color: var(--color-light);
    margin-top: 4rem;
  }

  a {
    color: var(--color-light);
  }

  .container {
    padding-top: 4rem;
    padding-bottom: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  .highlight {
    font-size: var(--font-size-base);
  }

  :global(.carbonbadge) {
    text-align: left !important;
  }
</style>
