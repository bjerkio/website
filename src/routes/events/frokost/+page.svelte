<script>
  import Metadata from '$components/metadata.svelte';
  import Frokost2023 from '$assets/frokost-2023.png';
  import { JsonLd } from 'svelte-meta-tags';
  import { parseSocialMediaImage } from '$lib/social-media-image';
  // import { ArrowDownRight } from 'phosphor-svelte';

  // const showBreadcrumb = false;
  const showSignupForm = false;

  const eventImage = parseSocialMediaImage(Frokost2023);
</script>

<Metadata
  title="Nettverksfrokost hos Bjerk den 18. Oktober - Møt nye bekjentskaper i Oslo!"
  description="Utvid ditt nettverk og møt folk fra ulike bransjer hos Bjerk. Del idéer, nyte god kaffe og knytt bånd over en uformell frokost i Akersgata 51, Oslo."
  socialMediaTitle="🤝 Nettverksfrokost hos Bjerk | Onsdag 18. Oktober kl. 08:00"
  socialMediaDescription="Start dagen med inspirerende samtaler! Møt likesinnede fra forskjellige fagområder, del tanker og nyt deilige snitter med kaffe fra KAFFA. Bli med oss i Akersgata 51, Oslo."
  path="/events/frokost"
  images={[Frokost2023]}
/>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Frokostmingling hos Bjerk',
    startDate: '2023-11-07T08:00',
    endDate: '2023-11-07T08:45',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Bjerk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Akersgata 51',
        addressLocality: 'Oslo',
        postalCode: '0180',
        addressCountry: 'NO'
      }
    },
    image: [eventImage],
    description:
      'Vi ønsker å invitere deg til en flott mulighet for å utvide ditt nettverk og møte spennende mennesker fra ulike fagområder og bransjer. Bjerk ønsker å skape en inkluderende og uformell atmosfære der du kan dele tanker og idéer over en god frokost.',
    offers: {
      '@type': 'Offer',
      url: 'https://forms.gle/ouHcJ77eVvMoDamk8',
      price: '0',
      priceCurrency: 'NOK',
      availability: 'https://schema.org/InStock',
      validFrom: '2023-09-01T00:00'
    },
    organizer: {
      '@type': 'Organization',
      name: 'Bjerk',
      url: 'https://bjerk.io'
    },
    performer: {
      '@type': 'PerformingGroup',
      name: 'Bjerk'
    }
  }}
/>

<main class="container">
  <div class="content">
    <!-- {#if showBreadcrumb}
      <div class="breadcrumb">
        <a href="/">Bjerk</a>
        <span>/</span>
        <a href="/events">Arrangementer</a>
        <span>/</span>
        <span>Frokostmingling hos Bjerk </span><ArrowDownRight />
      </div>
    {/if} -->
    <div class="section">
      <h1>Frokostmingling hos Bjerk</h1>
      <p class="headline">
        Vi ønsker å invitere deg til en flott mulighet for å utvide ditt nettverk og møte spennende
        mennesker fra ulike fagområder og bransjer. Bjerk ønsker å skape en inkluderende og uformell
        atmosfære der du kan dele tanker og idéer over en god frokost.
      </p>
      <p>
        <strong>Tid:</strong> Tirsdag 7. november kl. 08.00 til 08.45<br />
        <strong>Sted:</strong> Akersgata 51, 0180 Oslo
      </p>
    </div>

    <div class="section">
      <p>
        Hva kan du forvente: <br />
        🤝 Møt folk utenfor ditt vanlige nettverk <br />
        ☕ Start dagen med god kaffe fra KAFFA og snitter <br />
        🤓 Del tanker og idéer i en lavterskel setting.
      </p>

      <p>
        Vårt mål er å fremme mangfoldet av tanker og perspektiver ved å samle mennesker fra ulike
        bransjer og yrkesroller. Dette er en flott sjanse til å knytte bånd med likesinnede folk og
        muligens finne nye samarbeidspartnere.
      </p>
      <p>Vi ser frem til en hyggelig morgen med gode samtaler og nye bekjentskaper.</p>
      <p>
        Bli med oss og bidra til å gjøre denne frokostminglingen til en suksess! Inviter gjerne med
        deg en kollega eller venn - vi gleder oss til å se deg der!
      </p>
    </div>
  </div>
  <div class="section">
    {#if showSignupForm}
      <h3>Påmelding</h3>

      <form>
        <div class="form-content">
          <label for="name">Ditt navn</label>
          <input name="name" />
          <label for="company">Hvor jobber du?</label>
          <input name="company" />
          <label for="email">E-post</label>
          <input name="email" type="email" />

          <button type="submit" class="button">Meld meg på</button>
        </div>
      </form>
    {:else}
      <a href="https://forms.gle/ouHcJ77eVvMoDamk8" class="button"> Meld meg på </a>
    {/if}
  </div>
</main>

<style lang="scss">
  @use '$styles/mixins.scss';

  .section,
  .content {
    max-width: 50ch;
    > * {
      margin-block-end: 1em;
      line-height: 1.5em;
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;

    gap: 0.25em;
  }

  .headline {
    font-size: var(--font-size-md);
    font-weight: 600;
    text-wrap: pretty;
    margin-block-end: 1.5em;
  }

  .button {
    @include mixins.button;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-content {
    display: flex;
    max-width: 20ch;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    border-color: linear-gradient(0deg, #0f2040, #0f2040), linear-gradient(0deg, #fffdfd, #fffdfd);
    border-radius: 0.25rem;
    padding: 1em;
    font-size: var(--font-size-sm);
  }
</style>
