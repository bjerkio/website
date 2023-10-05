<script>
  import { ArrowDownRight } from 'phosphor-svelte';
  import HeaderImage from '$assets/aaron-burden-Bycd2wF5vQU-unsplash.png';
  import Image from '$components/image.svelte';
  import { JsonLd } from 'svelte-meta-tags';
</script>

<div class="hero">
  <Image src={HeaderImage} alt="Abstract art by Aaron Burden" />
</div>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Bjerk',
        item: 'https://bjerk.io/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Teknologi og produktledelse',
        item: 'https://bjerk.io/services'
      }
    ]
  }}
/>

<!-- breadcrumps -->
<nav aria-label="navigasjon" class="container breadcrumb">
  <ol>
    <li><a href="/about">Bjerk</a></li>
    <li>Teknologi og produktledelse <ArrowDownRight size="1.25em" /></li>
  </ol>
</nav>

<!-- container -->
<main>
  <h1>Vi lager digitale produkter</h1>

  <div class="content">
    <p class="headline">
      Vi står opp hver dag for å forbedre og forenkle måten mennesker lærer, tenker, jobber og
      kommuniserer på
    </p>
    <p>
      Bjerk samler folk med kompetanse innen programvareutvikling, brukeropplevelse og
      produktledelse for å gjøre verden til et litt bedre sted. Vi håper at gjennom å lage digitale
      produkter, så kan vi skape positive effekter for mennesker.
    </p>
    <nav aria-label="les mer">
      <ul>
        <li><a href="/">Våre tanker om programvareutvikling</a></li>
        <li><a href="/">Les om hvorfor brukeropplevelse er så viktig</a></li>
        <li><a href="/">Hvordan vi jobber med produktledelse</a></li>
      </ul>
    </nav>
    <p>
      Bjerk ble startet i 2009 fordi vi ønsket å skape en trygg arbeidsplass, som gjør en forskjell
      og bruker teknologi for å utrette det. Vi motiveres av å hjelpe folk, slik at de fokusere på
      de viktige tingene.
    </p>
    <h2>Hva gjør Bjerk?</h2>
    <p>
      Vi kan ta en idé til et produkt folk kan ta i bruk eller hjelpe gjøre et produkt bedre. Det
      som er fint hos oss er at vi har flere av de ressursene man trenger for å skape gode
      produkter.
    </p>
    <p>
      <a href="/contact">Våre rådgivere</a> kan lede utvikling av produkter (produktledelse),
      inkludert å forstå brukerne, hva som gir og man bør gjøre først og sist. Rådgiverne i Bjerk
      kan både produkt og prosjektledelse, og er glad i metoder, prinsipper og løsninger som gir
      mest innvirkning, slik som
      <a href="https://en.wikipedia.org/wiki/Design_thinking" target="_blank">Design Thinking</a>
      og
      <a href="https://agilemanifesto.org/iso/no/manifesto.html" target="_blank">
        Manifestet for smidig programvareutvikling
      </a>.
    </p>
    <p>
      For å skape gode produkter, trenger det fagpersoner som kan lage de. Vi tror noen fagmiljøer
      trenger hverandre for å være best, og derfor er vi <a href="/contact">flere utviklere</a> i Bjerk.
      Vi spiller på hverandre og bruker alle slags rammeverk, programmeringsspråk og paradigmer. Vi tror
      det gir mening å ha et pragmatisk syn på hva som brukes når – det som gir mest mulig effekt.
    </p>
    <p>
      For å skape gode brukeropplevelser i digitale produkter tror vi produktteam trenger dedikerte
      ressurser som bryner seg på hvordan vi kan skape den beste opplevelsen. I tillegg til å
      samarbeide med flere av de ledende selskapene i verden er vi veldig flinke på
      brukeropplevelser (UX).
    </p>
    <h2>Hvordan samarbeider vi?</h2>
    <p>
      Et godt samarbeid krever en god relasjon til hverandre, derfor er det viktig for oss å senke
      terskelen for å bli kjent. Vi starter gjerne et samarbeid med en løs prat om hvordan vi
      jobber, hva du vil oppnå og hvordan vi passer sammen.
    </p>
    <p>
      Etter en prat tar vi gjerne et møte, eller enda bedre, en gratis workshop hvor vi går litt
      dypere inn i behovet, produktet og visjonen.
    </p>
    <nav aria-label="les mer">
      <ul>
        <li><a href="/contact">Snakk med en av våre rådgivere</a></li>
        <!-- <li><a href="/">Send oss en e-post</a></li> -->
      </ul>
    </nav>
    <p>
      Aller helst liker vi å ha delte kanaler på Slack eller Teams, slik at vi kan snakke sammen når
      ting oppstår. Om det ikke passer organisasjonen vi jobber sammen med, så har vi jevnlig møter
      om det vi jobber med.
    </p>
    <p>
      For at våre kunder skal ha oversikt over hva vi jobber med, har vi helst en
      organisasjon/kodebrønn i GitHub hvor vi lager saker og organiserer arbeidet. For at kunden
      skal følge med på forbruket av timer, kan våre kunder følge med på forbruket gjennom
      prosjektrapporten (et egenutviklet rapport-verktøy gir innsikt i timeføringene i sanntid).
    </p>
  </div>
</main>

<style>
  .hero {
    overflow: hidden;
    max-height: 200px;
    max-width: 1260px;

    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .hero {
      display: none;
    }
  }

  .breadcrumb ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 0.5em;
  }

  .breadcrumb ol li {
    font-size: clamp(0.7rem, 1.5vw, 1rem);
  }

  .breadcrumb ol li a {
    text-decoration: none;
  }

  .breadcrumb ol li a:hover {
    text-decoration: underline;
  }

  .breadcrumb ol li:last-child {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }

  .breadcrumb ol li::after {
    content: '/';
    margin: 0 0.5em;
  }

  .breadcrumb ol li:last-child::after {
    content: '';
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 2em;

    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
    }
  }

  a {
    text-decoration: underline;
  }

  h1,
  h2 {
    text-wrap: pretty;
  }

  main > .content {
    max-width: 50ch;
  }

  .content > * {
    margin-block-end: 1em;
    line-height: 1.5em;
    font-size: 1.125rem;
    /* font-size: clamp(1rem, 1.5vw, 1.125rem); */
  }

  .content .headline {
    font-size: clamp(1.5rem, 2vw, 1.6rem);
    font-weight: 600;
    text-wrap: pretty;
    margin-block-end: 1.5em;
  }

  .content nav > ul li {
    margin-block-end: 0.5em;
    list-style: none;
  }

  .content nav > ul li a {
    text-decoration: none;
  }

  .content nav > ul li a:hover {
    text-decoration: underline;
  }

  .content nav > ul li::before {
    content: '→';
    margin-inline-end: 0.5em;
    margin-inline-start: 0.2em;
  }

  .content h2 {
    /* font-size: 2rem; */
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
</style>
