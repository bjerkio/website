<script>
	import Metadata from '$components/metadata.svelte';
	import AboutBjerk from '$assets/about-bjerk.jpg';
	import Image from '$components/image.svelte';
</script>

<Metadata title="Om oss" path="/about" />

<div class="container">
	<div class="section">
		<h1>Vi skaper digitale produkter</h1>
		<p>Bjerk er et dialogdrevet byrå innen digital produktutvikling og programvareutvikling.</p>
		<p>
			De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer innen
			eiendom, regnskap og forvaltning.
		</p>
	</div>
	<div class="call-to-action">
		<a href="/about/principles">Lær om hvordan vi jobber</a>
	</div>
</div>
<div class="hero">
	<Image src={AboutBjerk} class="hero-image" alt="Bjerk" />
</div>
<div class="container">
	<div class="section">
		<p>
			Vi elsker å skape digitale løsninger som gjør en ekte påvirkning i menneskers liv. For å oppnå
			det bruker vi iterative utviklingsprosesser, tverrfaglig samarbeid, designorientert
			produkutvikling og brukerfokuserte designmetoder.
		</p>
		<p>
			Gjennom årene har vært heldige å få lov å jobbe med mange spennende kunder, små og store,
			nasjonale og internasjonale. Vi har også fått lov å jobbe med mange spennende prosjekter, som
			vi er stolte av å vise frem.
		</p>
	</div>
	<div class="call-to-action">
		<a href="/projects">Sjekk ut tidligere jobber</a>
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

	a {
		@include mixins.button;
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.hero-image) {
		width: 100%;
		height: 100%;
		object-fit: cover;

		max-width: 1100px;
	}
</style>
