<script>
	import Seo from '../../../components/seo.svelte';
	import Employees from './employees.svelte';
</script>

<Seo title="Om oss" />

<div class="container">
	<div class="section">
		<h1>
			Bjerk er skapt for å forbedre og forenkle måten mennesker lærer, tenker, jobber og
			kommuniserer på.
		</h1>
		<p>For oss, er det viktigste vi gjør er å bidra til å gjøre verden til et bedre sted.</p>
		<a href="/">Les mer om hvordan vi jobber</a>
	</div>
	<div class="section employees">
		<Employees />
	</div>
</div>

<style>
	.container {
		max-width: 60ch;
	}

	.section,
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-base);
	}

	.employees {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
</style>
