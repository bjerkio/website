<script>
  import Metadata from '$components/metadata.svelte';
  import Employees from '$components/employees.svelte';
  import { ArrowSquareOut } from 'phosphor-svelte';
  import { JsonLd } from 'svelte-meta-tags';
</script>

<Metadata
  title="Møt teamet i Bjerk"
  description="
    Bli med å skap noe med oss! Start i dag om å lage skreddersydde løsninger
    og få tilgang på ekspertise innen digital innovasjon.
  "
  socialMediaTitle="🚀 Start samtalen med Bjerk: Bli med å skap noe med oss!"
  socialMediaDescription="
    Start en samtale med Bjerk i dag for å lage skreddersydde løsninger
    og få tilgang på ekspertise innen digital innovasjon.
  "
  path="/contact"
/>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bjerk AS',
    url: 'https://bjerk.io/',
    logo: 'https://bjerk.io/assets/logo.svg',
    image: 'https://bjerk.io/assets/logo.svg',
    telephone: '+47 95308087',
    email: 'office@bjerk.io',
    taxID: '930 334 693',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Akersgata 51',
      addressLocality: 'Oslo',
      addressRegion: 'Oslo',
      postalCode: '0180',
      addressCountry: 'NO'
    }
  }}
/>

<main class="container">
  <div class="section elevator">
    <h1>Vi gleder oss til å høre fra deg!</h1>
    <p>Bjerk har kontorer i Oslo ved Akersgata 51, 0180 Oslo og Finland.</p>
    <p>
      Du får tak i oss via chatten, eller på e-post til
      <a href="mailto:kontoret@bjerk.io">kontoret@bjerk.io</a>.
    </p>
    <div class="call-to-action">
      <button on:click={() => window.$chatwoot.toggle('open')}>Snakk med oss!</button>
    </div>
  </div>

  <div class="section details">
    <dl>
      <div>
        <dt>Organisasjonsnummer</dt>
        <dd>930 334 693</dd>
      </div>
      <div>
        <dt>E-post</dt>
        <dd>kontoret@bjerk.io</dd>
      </div>
      <div>
        <dt>Adresse</dt>
        <dd>
          <a href="https://goo.gl/maps/FkcqThLgRtCauPmZA" target="_blank" rel="noopener noreferrer">
            Akersgata 51, 0180 Oslo <ArrowSquareOut />
          </a>
        </dd>
      </div>
    </dl>
  </div>
  <div class="section employees">
    <Employees />
  </div>
</main>

<style lang="scss">
  @use '$styles/mixins.scss';

  .section,
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .container {
    gap: 4rem;
  }

  .elevator {
    max-width: 60ch;
    h1 {
      font-size: var(--font-size-lg);
    }

    .call-to-action {
      margin-top: 1rem;

      button {
        @include mixins.button;
      }
    }
  }

  .details {
    max-width: 60ch;
    dl {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 1rem;

      dt {
        font-weight: bold;
      }
      dd a {
        color: var(--color-primary);
      }
    }
  }

  .employees {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
</style>
