<script lang="ts">
	import Logo from './logo.svelte';

	if (typeof window !== 'undefined') {
		const BASE_URL = 'https://app.chatwoot.com';
		const g = document.createElement('script');
		const s = document.getElementsByTagName('script')[0];
		g.src = BASE_URL + '/packs/js/sdk.js';
		g.defer = true;
		g.async = true;
		s.parentNode?.insertBefore(g, s);
		g.onload = function () {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(window as any).chatwootSDK.run({
				websiteToken: 'm94Z8YzguKbGc1XnowaNjHfM',
				baseUrl: BASE_URL
			});
		};
	}
</script>

<header>
	<a class="logo" href="/">
		<Logo />
	</a>
	<nav>
		<ul>
			<li><a href="/about">Om oss</a></li>
			<li><a href="/projects">Prosjekter</a></li>
			<li><a href="/contact">Kontakt</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			color: var(--text-color);
			display: inline-block;
		}
	}

	nav {
		ul {
			display: flex;
			list-style: none;

			li {
				margin-left: 1rem;

				a {
					color: var(--text-color);
					text-decoration: none;

					&:hover {
						font-weight: 500;
					}
				}

				&:first-child {
					margin-left: 0;
				}
			}
		}
	}
</style>
