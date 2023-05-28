<header>
	<a class="logo" href="/">
		<img src="/assets/logo.svg" alt="Bjerk logo" />
	</a>
	<nav>
		<ul>
			<li><a href="/">About us</a></li>
			<li><a href="/">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			img {
				width: 100%;
			}
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
