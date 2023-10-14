<script>
  import Metadata from '$components/metadata.svelte';
  import { JsonLd } from 'svelte-meta-tags';
  import Feature from './feature.svelte';
  import Hero from './hero.svelte';
</script>

<Metadata
  title="Bjerk"
  description="Vi samarbeider med bedrifter for å skape digitale løsninger som gir verdi."
  socialMediaTitle="Bjerk 🌳"
  socialMediaDescription="Vi samarbeider med bedrifter for å skape digitale løsninger som gir verdi."
  path="/"
/>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bjerk',
    alternateName: ['Bjerk AS', 'BJRK', 'BK'],
    url: 'https://bjerk.io'
  }}
/>

<div class="container">
  <Hero />
  <Feature />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 4rem;
  }
</style>
