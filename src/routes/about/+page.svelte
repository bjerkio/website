<script>
  import Metadata from '$components/metadata.svelte';
  import AboutBjerk from '$assets/about-bjerk.jpg';
  import Image from '$components/image.svelte';
</script>

<Metadata
  title="Om Bjerk"
  description="
    Bjerk er et dialogdrevet byrå som skaper digitale løsninger.
    Gjennom 14 år har vi transformert hvordan folk lærer og jobber.
  "
  socialMediaTitle="Oppdrag Bjerk 🌳"
  socialMediaDescription="Bli med oss i vår misjon. Utforsk hvordan vi skaper en digital forskjell!"
  path="/about"
/>

<main>
  <div class="content">
    <h1>Vi skaper digitale produkter</h1>

    <p>
      Det beste i verden er skapt av de dristige, utfordrere, de som ser ting annerledes som er
      ambisiøse, nysgjerrige og motiverte nok til å finne orden i virvaret av det uforståelige.
    </p>
    <p>
      Bjerk er et lite byrå med vilje og <a href="/about/principles">sterke prinsipper</a>, som
      jobber med vanskelige utfordringer som krever tett samarbeid og tillit. Vi er et dialogdrevet
      byrå som lager digitale produkter og tjenester for mennesker. Utover det er vi sterkt
      engasjert i å bygge en etisk, transparent praksis som er bærekraftig for oss, våre kunder og
      samfunnet. Vi søker samarbeidspartnere som lar oss underbygge arbeidet vårt med den
      filosofien.
    </p>
    <em>
      Teknologi i seg selv er ikke det den viktigste delen av vårt arbeid – det er måten vi bruker
      den på.
    </em>
    <p>
      De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer innen
      eiendom, regnskap og forvaltning gjennom teknologi.
    </p>
    <div class="call-to-action">
      <a href="/about/principles">Lær om hvordan vi jobber</a>
    </div>
  </div>
  <div class="hero">
    <Image src={AboutBjerk} class="hero-image" alt="Bjerk" />
  </div>
  <div class="content">
    <p>
      Vi elsker å skape digitale løsninger som gjør en ekte påvirkning i menneskers liv. For å oppnå
      det bruker vi iterative utviklingsprosesser, tverrfaglig samarbeid, designorientert
      produkutvikling og brukerfokuserte designmetoder.
    </p>
    <p>
      Gjennom årene har vært heldige å få lov å jobbe med mange spennende kunder, små og store,
      nasjonale og internasjonale. Vi har også fått lov å jobbe med mange spennende prosjekter, som
      vi er stolte av å vise frem.
    </p>
    <div class="call-to-action">
      <a href="/projects">Sjekk ut tidligere jobber</a>
    </div>
  </div>
</main>

<style lang="scss">
  @use '$styles/mixins.scss';

  .content {
    max-width: 50ch;
    margin-inline: auto;
    gap: 2em;

    > * {
      margin-block-end: 1em;
      line-height: 1.5em;
    }

    nav > ul li {
      margin-block-end: 0.5em;
      list-style: none;

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &::before {
        content: '→';
        margin-inline-end: 0.5em;
        margin-inline-start: 0.2em;
      }
    }

    h2 {
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
  }

  a {
    color: var(--color-high-contrast-text);
    text-decoration: underline;
  }

  .call-to-action a {
    @include mixins.button;
  }

  .hero {
    margin-inline: auto;
    width: min(100%, 1100px);
    margin-block: 2rem;
  }

  em {
    font-weight: 700;
    font-style: normal;
  }

  :global(.hero-image) {
    width: 100%;
    height: 100%;
    object-fit: cover;

    max-width: 1100px;
  }
</style>
