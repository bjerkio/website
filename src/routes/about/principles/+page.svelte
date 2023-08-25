<script>
  import Metadata from '$components/metadata.svelte';
</script>

<Metadata title="Prinsipper" path="/about/principles" />

<div class="container">
  <div class="section">
    <h1>Kompetanse og teknologi, kombinert med et brukervennlig design, er viktig for å lykkes</h1>
    <p>
      Helt siden vi startet i 2009 har vi lært av hvordan man lykkes med produkter og tjenester. Vi
      er, som mange andre i bransjen, opptatt av
      <a href="https://agilemanifesto.org/iso/no/manifesto.html"> det smidige manifestet </a>, og
      det er nok prinsippene rundt samarbeid som står oss nærest.
    </p>
    <p>
      Vi jobber best under forutsetninger hvor det lages minst og flest mulig prosjekter, som skaper
      verdi. Det handler om å bevise vår verdi, og ha insentiver som skaper et godt samarbeid og
      driver frem det beste i oss.
    </p>
    <a href="https://agilemanifesto.org/iso/no/manifesto.html">Les det smidige manifestetet</a>
  </div>
  <div class="section">
    <h2>Åpen kildekode</h2>
    <p>
      Ved å dele erfaringer, diskutere og arbeide åpent mener vi at teknologi blir bedre. Derfor
      ligger Bjerk på listen over verdens største selskaper på åpen kildekode. For deg som kunde
      betyr det at du indirekte bidrar til å skape et bedre samfunn, men også betydelig bedre
      programvare.
    </p>
    <a href="https://github.com/bjerkio">Sjekk vår Github-profil</a>
  </div>
  <div class="section">
    <h2>Lære og justere kontinuerlig</h2>
    <p>
      En viktig del av reisen er å gjøre feil, lære, reflektere og justere. For å kunne forbedre og
      forenkle hvordan mennesker tenker, jobber, lærer og kommuniserer, må vi akseptere at veien er
      ikke gått opp før vi begynner. Den blir til mens vi går.
    </p>
  </div>
  <div class="highlight">Fokuset ligger i å lære, tilpasse, navigere bedre og prøve igjen.</div>
  <div class="section">
    <h2>Åpen og gjennomsiktig prosess</h2>
    <p>
      Vi mener det er helt essensielt at vi samarbeider, og at ting skjer i det åpne. I praksis
      betyr det at vi inviterer gjerne våre kunder inn der vi jobber; (eksempelvis, Slack og
      Github).
    </p>
    <p>
      Det skal være synlig når noe skjer, bedre blir beslutningene når de taes løpende og med mest
      mulig kontekst.
    </p>
    <p>La oss unngå barriærer, og all den frustrasjonen som kommer med de.</p>
  </div>
</div>

<style>
  .container,
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--size-lg);
  }

  .container {
    max-width: 60ch;
  }

  .section {
    gap: var(--size-md);
  }

  .highlight {
    font-size: var(--font-size-lg);
    font-weight: 600;
  }
</style>
