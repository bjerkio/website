<script>
	import abstractArt from '$assets/li-zhang-wtDy3HaivJI-unsplash.jpg?w=1200&h=565&fit=crop&fm=webp&q=80';
	import Image from '$components/image.svelte';
  import QuoteSvg from './illustrations/quote.svelte';
	import LearningScribble from './illustrations/learning-scribble.svelte';
	import A11y from './illustrations/a11y.svelte';
	import Sustainability from './illustrations/sustainability.svelte';
</script>

<main>
	<div class="container">
		<div class="hero">
			<h1>Positiv påvirkning gjennom teknologi</h1>

			<p>
				I Bjerk tror vi at teknologi i seg selv er en kraft, men det er måten vi bruker den på som
				bestemmer dens innflytelse. I en verden som stadig utvikler seg, har vi valgt å rette fokus
				mot sosial innvirkning – en satsing for å gjøre verden bedre gjennom våre digitale produkter
				og prinsipper.
			</p>
		</div>
	</div>
	<Image src={abstractArt} class="feature-image" />
	<div class="container">
		<QuoteSvg />

		<div class="quote">
			<p>
				«I hjertet av Bjerk ligger ønsket om å skape varige, positive forandringer. Gjennom å
				forbedre hvordan folk lærer, tenker, jobber og kommuniserer, håper vi å etterlate en arv av
				sosial forbedring som går utover ren teknologi»
			</p>
			<p>Simen A. W. Olsen, daglig leder i Bjerk AS</p>
		</div>
	</div>

	<div class="container">
		<div class="potential-heading">
			<h2>Fire hovedområder med ubegrenset potensiale.</h2>
			<p>
				Som et ledende digitalt byrå har Bjerk et ansvar for å adressere viktige samfunnsspørsmål
				både lokalt og globalt. Vi streber etter:
			</p>
		</div>
		<div class="potentials">
			<article class="potential">
				<div class="illustration">
					<LearningScribble />
				</div>
				<div class="content">
					<h3>Opplæring og Inkludering</h3>
					<p>
						Å gjøre digital kompetanse tilgjengelig og inkluderende, hvor alle – uansett bakgrunn –
						kan bidra og vokse.
					</p>
				</div>
			</article>
			<article class="potential">
				<div class="illustration">
					<A11y />
				</div>
				<div class="content">
					<h3>Tilgjengelighet</h3>
					<p>
						Å garantere at våre digitale produkter og tjenester er tilgjengelige for alle, inkludert
						de med funksjonshemninger.
					</p>
				</div>
			</article>
			<article class="potential">
				<div class="illustration">
					<Sustainability />
				</div>
				<div class="content">
					<h3>Bærekraft</h3>
					<p>
						I lys av klimaendringene er det vårt ansvar å bidra til en bærekraftig digital fremtid.
						Lorem ipsum sit amet.
					</p>
				</div>
			</article>
		</div>
	</div>
	<p class="pitch">
		Ved å kombinere vår teknologiske kompetanse med vårt hjerte for samfunnsforbedring, håper vi å
		skape en verden hvor teknologi er en katalysator for positiv forandring.
	</p>
	<div class="contact">
		<h2>Kontakt oss</h2>
		<p>
			Om du vil lære mer om hvordan vi arbeider, om å samarbeide med eller komme i kontakt med oss,
			kontakt oss i dag!
		</p>
		<a href="/contact">Send e-post til en av oss →</a>
	</div>
</main>

<style lang="scss">
	main,
	.container {
		display: grid;
		gap: 5rem;
	}

	:global(.feature-image) {
		object-fit: cover;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	p {
		line-height: 1.5em;
	}

	.hero {
		max-width: 60ch;
		min-height: 20svh;

		h1 {
			font-size: var(--font-size-xl);
			font-weight: 700;
			line-height: 1em;
		}

		> * {
			margin-block-end: 1em;
		}
	}

	.quote {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 20svh;

		p:first-child {
			max-width: 40ch;
			font-size: var(--font-size-base);
			font-weight: 700;
			line-height: 1.3em;
		}
	}

	.potential-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-md);

		> p {
			max-width: 60ch;
			text-align: center;
		}

		> h2 {
			font-size: var(--font-size-xl);
			font-weight: 700;
			line-height: 1em;
			text-align: center;
		}
	}

	.potentials {
		display: grid;
		gap: var(--size-lg);
	}

	article.potential {
		display: flex;
		flex-direction: row;
		align-items: center;
		min-height: 30svh;

		&:nth-child(2n) {
			flex-direction: row-reverse;
		}

		@media (max-width: 768px) {
			flex-direction: column;
			&:nth-child(2n) {
				flex-direction: column;
			}
		}

		justify-content: space-between;
		gap: var(--size-lg);

		.illustration {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50%;
			min-width: 150px;
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: var(--size-base);

			h3 {
				font-size: var(--font-size-lg);
				font-weight: 700;
				line-height: 1em;
			}

			p {
				max-width: 40ch;
			}
		}
	}

	.pitch {
		max-width: 50ch;
		text-align: center;
		margin: 0 auto;
		font-weight: 600;
    padding: 0 var(--size-md);

		font-size: var(--font-size-base);
		margin-bottom: var(--size-xl);
	}

	.contact {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-md);

		h2 {
			font-size: var(--font-size-xl);
			font-weight: 700;
			line-height: 1em;
		}

		p {
			max-width: 60ch;
			text-align: center;
		}
	}
</style>
