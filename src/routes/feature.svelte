<script>
	import { Warning } from 'phosphor-svelte';
</script>

<div class="container">
	<div class="broadcast">
		<div class="icon"><Warning size="22" /></div>
		<p>
			Vi har ferie nå, men <button on:click={() => window.$chatwoot.toggle('open')}
				>send oss gjerne en beskjed</button
			> så kommer vi tilbake til deg 🏖️
		</p>
	</div>
</div>

<style lang="scss">
	@use '$styles/mixins.scss';
	.container {
		background-image: url('/assets/sommer-bg.jpg');
		background-size: cover;
		background-position: center;

		min-height: 565px;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.broadcast {
		display: flex;
		justify-content: center;
		gap: var(--size-base);
		background-color: var(--dark100);
		max-width: 40ch;
		color: var(--green20);
		font-size: var(--font-size-sm);
		padding: var(--size-base);
		border-radius: var(--border-radius-sm);

		button {
			@include mixins.button-link;
			text-decoration: underline;
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		.broadcast {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
