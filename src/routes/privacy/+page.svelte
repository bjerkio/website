<script>
  import Metadata from '$components/metadata.svelte';
  import OpenGraphImg from '$assets/opengraph-privacy.svg';
</script>

<Metadata
  title="Personvernerklæring"
  description="
    Vi er veldig opptatt av ditt personvern. Her kan du lese
    om hvordan Bjerk samler inn og bruker personopplysninger.
  "
  socialMediaTitle="🔒 Personvernerklæring"
  socialMediaDescription="
    Vi er veldig opptatt av ditt personvern. Her kan du lese om
    hvordan Bjerk samler inn og bruker personopplysninger.
  "
  images={[OpenGraphImg]}
  path="/privacy"
/>

<main class="content">
  <h1>Personvern­erklæring</h1>

  <p>Her kan du lese om hvordan Bjerk samler inn og bruker personopplysninger.</p>

  <h2>Dine rettigheter</h2>
  <p>
    Alle har rett på grunnleggende informasjon om behandlinger av personopplysninger i en virksomhet
    etter personopplysningslovens § 18, 1. ledd. Bjerk utgir informasjon om dette i denne
    erklæringen. Alle som er registrert i våre systemer har rett på innsyn i egne opplysninger. Samt
    rett til å be om at uriktige, ufullstendige eller opplysninger foreningen ikke har adgang til å
    behandle blir rettet, slettet eller supplert.
  </p>
  <p>Krav fra den registrerte skal besvares kostnadsfritt og senest innen 30 dager.</p>

  <h2>Chatwoot</h2>
  <p>
    Bjerk eksperimenterer med å bruke Chatwoot som chatløsning. Chatwoot er en åpen kildekode
    chatløsning. I en testfase vil vi bruke Chatwoot sin skytjeneste. Det betyr at Chatwoot vil
    behandle personopplysninger på vegne av Bjerk. Chatwoot vil ikke bruke personopplysningene til
    andre formål enn å levere tjenesten, og vil ikke dele personopplysningene med andre. Vi vil
    slette personopplysningene når de ikke lenger er nødvendige for å levere tjenesten.
  </p>

  <p>
    Les mer om Chatwoot personvernerklæring her:
    <a href="https://www.chatwoot.com/privacy-policy/">
      https://www.chatwoot.com/privacy-policy/
    </a>
  </p>

  <h2>Google</h2>
  <p>
    Vi bruker Google Workspace og Google Cloud Platform. Vi bruker Google Forms til påmelding av
    arrangementer. Vi lagrer fult navn, selskapsnavn og e-postadresse som brukes for å sende ut
    påminnelser og oppfølginger. Informasjonen slettes senest 30 dager etter endt arrangement.
  </p>

  <p>
    Ved eksplisitt samtykke, lagres informasjonen til senere oppfølgning av Bjerk. Du kan alltid be
    om å bli slettet. Dersom vi ikke har vært i kontakt med deg på 1 år, slettes opplysningene.
  </p>

  <h2>Kontakt oss</h2>

  <p>
    <strong>E-post:</strong>
    <a href="mailto:aleksander.ryan@wla.no">aleksander.ryan@wla.no</a>
  </p>
  <p>
    <strong>Postadresse:</strong><br />
    Wahl-Larsen Advokatfirma AS<br />
    ℅ Aleksander Ryan<br />
    Fridtjof Nansens plass 5<br />
    0160 OSLO
  </p>
</main>

<style>
  .content {
    max-width: 50ch;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
</style>
