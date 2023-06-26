<script>
	import Metadata from '$components/metadata.svelte';
	import Employees from '$components/employees.svelte';
</script>

<Metadata title="Om oss" path="/contact" />

<div class="container">
	<div class="section elevator">
		<h1>Vi gleder oss til å høre fra deg!</h1>
		<p>Bjerk har kontorer i Oslo ved Akersgata 51, 0180 Oslo og Finland.</p>
		<p>
			Du får tak i oss via chatten, eller på e-post til
			<a href="mailto:kontoret@bjerk.io"> kontoret@bjerk.io </a>.
		</p>
		<div class="call-to-action">
			<button on:click={() => window.$chatwoot.toggle('open')}>Snakk med oss!</button>
		</div>
	</div>

	<div class="section">
		<dl>
			<div>
				<dt>Organisasjonsnummer</dt>
				<dd>930 334 693</dd>
			</div>
			<div>
				<dt>E-post</dt>
				<dd>kontoret@bjerk.io</dd>
			</div>
		</dl>
		<dl>
			<div>
				<dt>Adresse</dt>
				<dd>
					<a href="https://goo.gl/maps/FkcqThLgRtCauPmZA" target="_blank" rel="noopener noreferrer">
						Akersgata 51, 0180 Oslo
					</a>
				</dd>
			</div>
		</dl>
	</div>
	<div class="section employees">
		<Employees />
	</div>
</div>

<style lang="scss">
	@use '$styles/mixins.scss';

	.section,
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-base);
	}

	.container {
		max-width: 60ch;

		gap: var(--size-lg);
	}

	.elevator {
		h1 {
			font-size: var(--font-size-lg);
		}

		.call-to-action {
			margin-top: var(--size-base);

			button {
				@include mixins.button;
			}
		}
	}

	.section dl {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: var(--size-sm);

		dt {
			font-weight: bold;
		}
		dd a {
			color: var(--color-primary);
		}
	}

	.employees {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
</style>
