<script>
	import { ArrowRight } from 'phosphor-svelte';
</script>

<div class="hero-container">
	<div class="hero">
		<div class="section">
			<h1>
				Vi vil skape en bedre verden gjennom teknologi
				<a href="/about" class="button">
					Les mer om oss <ArrowRight />
				</a>
			</h1>
			<p>
				Vi forbedrer og forenkler måten mennesker lærer, tenker, jobber, og kommuniserer på gjennom
				å utvikle og tilpasse digitale produkter.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use '$styles/mixins.scss';
	.hero-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.hero {
		max-width: 60ch;
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

    p {
      font-size: var(--font-size-md);
    }
	}

	h1 {
		font-size: var(--font-size-xxl);
		font-weight: 900;
		vertical-align: middle;
		display: table-cell;
	}

	.button {
		@include mixins.button;
		font-size: var(--font-size-sm);
		font-weight: normal;
		padding: var(--size-sm) var(--size-base);
    transform: translateY(-40%);
    &:hover {
      transform: translateY(-40%) scale(1.05) rotate(1deg);
    }
	}
</style>
