<script lang="ts">
  import Chatwoot from '$components/chatwoot.svelte';
  import Footer from '$components/footer.svelte';
  import Header from '$components/header.svelte';
</script>

<Chatwoot />

<Header />

<slot>
  <!-- +page.svelte is rendered here -->
</slot>

<Footer />

<style lang="scss">
  @use '../styles/globals.scss';
</style>
