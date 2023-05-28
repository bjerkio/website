<script>
  import Footer from '../../components/footer.svelte';
	import Header from '../../components/header.svelte';
</script>

<div class="container">
	<Header />
</div>
<slot>
	<!-- +page.svelte is rendered here -->
</slot>
<Footer />
