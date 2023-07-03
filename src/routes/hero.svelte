<div class="hero-container">
	<div class="hero">
		<div class="section">
			<h1>Vi vil skape en bedre verden gjennom teknologi</h1>
			<p>
				Vi forbedrer og forenkler måten mennesker lærer, tenker, jobber, og kommuniserer på gjennom
				å utvikle og tilpasse digitale produkter.
			</p>
		</div>
		<div class="section">
			<h3>Noen av våre seneste kunder</h3>
			<div class="clients">
				<p>Folio</p>
				<p>Layer</p>
				<p>Grid branding</p>
				<p>Avfall Norge</p>
				<p>DNB</p>
				<p>Digdir</p>
			</div>
		</div>
	</div>
</div>

<style>
	.hero-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: var(--size-xl) 0;
	}

	.hero {
		max-width: 50ch;
		/* font-size: var(--font-size-md); */

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-lg);
	}

	.section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-base);
	}

	h1 {
		font-size: var(--font-size-lg);
	}

	h3 {
		font-size: var(--font-size-base);
		color: var(--accent-color);
	}

	.clients {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.clients p {
		color: var(--text-color);
		padding: var(--size-xs) 0;
	}
</style>
