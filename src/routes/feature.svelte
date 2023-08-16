<div class="container">
	<!-- <div class="broadcast">
		<div class="icon"><Warning size="22" /></div>
		<p>
			Vi har ferie nå, men <button on:click={() => window.$chatwoot.toggle('open')}
				>send oss gjerne en beskjed</button
			> så kommer vi tilbake til deg 🏖️
		</p>
	</div> -->
</div>

<style lang="scss">
	@use '$styles/mixins.scss';
	.container {
		background-image: url('/assets/k8-G8dlL6UEt_I-unsplash.jpg');
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
		background-color: var(--color-solid-bg);
		max-width: 40ch;
		color: var(--color-light);
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

		.container {
			min-height: 400px;
		}
	}
</style>
