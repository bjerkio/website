<div class="outer-container">
	<div class="container">
		<p>
			Samarbeid, samspill, programvare som virker, iterativ utvikling, kontinuitet, gode insentiver
			og Super Mario-effekten er noe av det vi mener kreves for å lykkes.
		</p>

		<a href="/about">Les mer om oss og hvordan vi jobber</a>
	</div>
</div>

<style>
	.outer-container {
		background-image: url('/assets/cheeky.svg');
		background-size: 250px;
		background-repeat: no-repeat;
		background-position: left center;

		min-height: 410px;
		padding-top: var(--size-xl);
		padding-bottom: var(--size-xl);
	}

	@media (max-width: 1310px) {
		.outer-container {
			background-image: none;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-md);

		max-width: 60ch;
		/* font-size: var(--font-size-md); */
	}
</style>
