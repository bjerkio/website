<script>
  import Metadata from '$components/metadata.svelte';
</script>

<Metadata title="Visjon" path="/about/vision" />

<main>
  <h1>Vi er drevet av et dypt ønske om å berike livet til folk</h1>
  <p class="intro">
    Hos oss er det ingen plass for unødvendige mellomledd. Hvert medlem av vårt team, fra utviklere
    til rådgivere, er dedikert til en felles visjon: å bedre livet for våre kunder og samfunnet som
    helhet. Vi forbedrer og forenkler måten mennesker lærer, tenker, jobber, og kommuniserer på
    gjennom å utvikle og tilpasse digitale produkter.
  </p>

  <ul>
    <li>
      <strong>Eierskap:</strong> Våre utviklere er mer enn kode-skrivere. De tar fullt eierskap over
      prosjekter, setter påvirkning og effekt på toppen av prioriteringslisten, og holder seg selv og
      kollegaer til høye standarder.
    </li>
    <li>
      <strong>Initiativ:</strong> Vi venter ikke på oppgaver å bli tildelt. I stedet tar vi grep, og
      bidrar aktivt til Bjerk sin misjon. Inaktive perioder brukes til å styrke vår organisasjon og verden
      rundt oss.
    </li>
    <li>
      <strong>Proaktivitet:</strong> Når hindringer oppstår, tar vi ansvar for å holde oss informert
      og charte veien mot våre mål.
    </li>
  </ul>
  <h2>Bærekraft i arbeidet</h2>
  <p>
    Vi tror på en balansert og bærekraftig tilnærming til arbeid. Alle har en rolle i å drive frem
    effektivitet og forbedring, uavhengig av senioritet. Det handler ikke om hvor mange e-poster man
    sender, men om verdien man bringer til bordet.
  </p>
  <h2>Kommunikasjon er nøkkelen</h2>
  <p>
    Vi legger vekt på åpenhet og deling. Det er bedre å overkommunisere enn å la viktig informasjon
    forbli usagt. Vi minner alle på at meldinger kan dempes, men verdifull informasjon kan aldri
    gjenvinnes om den aldri er delt i utgangspunktet.
  </p>
</main>

<style>
  .intro {
    margin-block: 2rem;
    font-size: 1.3rem;
  }

  ul {
    list-style: none;
    max-width: 50ch;
  }

  ul > li {
    margin-bottom: 1rem;
  }

  main {
    width: min(60ch, 100% - 4rem);
    margin-inline: auto;
    line-height: 1.5;

    text-wrap: pretty;
  }

  p,
  h2 {
    margin-block: 1rem;
  }
</style>
