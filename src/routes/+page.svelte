<script>
  import Metadata from '$components/metadata.svelte';
  import { JsonLd } from 'svelte-meta-tags';
  import Feature from './feature.svelte';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<Metadata title="Bjerk" socialMediaTitle="Bjerk 🌳" path="/" />

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bjerk',
    alternateName: ['Bjerk AS', 'BJRK', 'BK'],
    url: 'https://bjerk.io'
  }}
/>

<main class="container">
  <div class="hero-container">
    <div class="hero">
      <div class="section">
        <h1>
          Vi vil skape en bedre verden gjennom teknologi
          <a href="/about" class="button">
            Les mer om oss <ArrowRight />
          </a>
        </h1>
        <p>
          Vi forbedrer og forenkler måten mennesker lærer, tenker, jobber, og kommuniserer på
          gjennom å utvikle og tilpasse digitale produkter.
        </p>
      </div>
    </div>
  </div>
  <Feature />
</main>

<style lang="scss">
  @use '$styles/mixins.scss';

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 4rem;
  }

  .hero-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hero {
    max-width: 60ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    p {
      font-size: var(--font-size-base);
    }
  }

  h1 {
    font-size: var(--font-size-xxl);
    font-weight: 900;
    vertical-align: middle;
    display: table-cell;
  }

  .button {
    @include mixins.button;
    font-size: var(--font-size-sm);
    font-weight: normal;
    padding: 0.5rem 1rem;
    transform: translateY(-40%);
    &:hover {
      transform: translateY(-40%) scale(1.05) rotate(1deg);
    }
  }

  @media (max-width: 512px) {
    .button {
      transform: none;

      &:hover {
        transform: scale(1.05) rotate(1deg);
      }
    }
  }
</style>
