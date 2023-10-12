
<main class="container">
  <div class="content">
    <div class="section">
      <h1>Frokostmingling hos Bjerk</h1>
      <p class="headline">
        Vi ønsker å invitere deg til en flott mulighet for å utvide ditt nettverk og møte spennende
        mennesker fra ulike fagområder og bransjer. Bjerk ønsker å skape en inkluderende og uformell
        atmosfære der du kan dele tanker og idéer over en god frokost.
      </p>
      <p>
        <strong>Tid:</strong> Onsdag 18. oktober kl. 08.00 til 08.45<br />
        <strong>Sted:</strong> Akersgata 51, 0180 Oslo
      </p>
      <p>
        → <a href="https://www.google.com/"> Meld meg på</a>
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
    <div class="section">
      <a href="https://www.google.com/" class="button">
        Meld meg på
      </a>
    </div>
  </div>
</main>

<style lang="scss">
  @use '$styles/mixins.scss';

 
  .section, .content {
    max-width: 50ch;
    gap: 2em;

    > * {
      margin-block-end: 1em;
      line-height: 1.5em;
    }

  }

  .content {
    gap: 4em;
  }

  .headline {
    font-size: var(--font-size-md);
    font-weight: 600;
    text-wrap: pretty;
    margin-block-end: 1.5em;
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
</style>
