<script>
	import Logo from './logo.svelte';
</script>

<header>
	<a class="logo" href="/">
		<Logo />
	</a>
	<nav>
		<ul>
			<li><a href="/about">Om oss</a></li>
			<li><a href="/principles">Prinsipper</a></li>
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
