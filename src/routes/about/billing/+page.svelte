<script>
  import Metadata from '$components/metadata.svelte';
</script>

<Metadata title="Billing Details" path="/about/billing" />

<main class="container">
  <h1>Billing Information</h1>

  <p>
    Bjerk has two companies, for which you can find the billing information below. If you are unsure
    about these details, please contact us at <a href="mailto:office@bjerk.io">office@bjerk.io</a>.
  </p>

  <p>
    <strong>Note about subscriptions:</strong> We use Cardboard to track subscriptions, automatically
    collect receipts, and automate accounting. This means that in order to onboard a new service or subscription
    we need to add these details to Cardboard and generate a invoice email.
  </p>

  <div class="company-details">
    <h2>Bjerk AS (Norway)</h2>
    <dl>
      <dt>VAT ID (Org. nr.)</dt>
      <dd>998 732 867</dd>
      <dt>Office Address</dt>
      <dd>Akersgata 51, 0180 Oslo</dd>
      <dt>Postal Address</dt>
      <dd>Prost Hallings vei 46A, 0666 Oslo</dd>
      <dt>Bank account</dt>
      <dd>1503.29.29602</dd>
      <dt>IBAN</dt>
      <dd>NO47 1503 2929 602</dd>
      <dt>SWIFT/BIC</dt>
      <dd>DNBANOKKXXX</dd>
      <dt>Invoice email</dt>
      <dd>invoice@bjerk.io</dd>
    </dl>
    <p>
      <strong>⚠️ Invoices must be sent using EHF format!</strong><br />
      If you are unable to send EHF invoices: please contact us. Invoice email must only be used when
      EHF is unavailable.
    </p>
  </div>

  <div class="company-details">
    <h2>Bjerk Oy (Finland)</h2>
    <dl>
      <dt>Y code</dt>
      <dd>3375578-4</dd>
      <dt>Postal Address</dt>
      <dd>Vehkakuja 2 C 20, 40700 JYVÄSKYLÄ</dd>
      <dt>Invoice email</dt>
      <dd>invoice@bjerk.io</dd>
    </dl>
  </div>
</main>

<style>
  .container {
    margin: 0 auto;
  }

  .container,
  .company-details {
    max-width: 60ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  dl {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;

    max-width: 35ch;
  }

  dl > dt {
    font-weight: bold;
  }
</style>
