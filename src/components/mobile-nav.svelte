<script>
	import X from 'phosphor-svelte/lib/X';
	import List from 'phosphor-svelte/lib/List';

	let showModal = false;
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<button
	type="submit"
	class="menu-button"
	data-small-screen-menu="open-button"
	name="meny"
	aria-expanded={showModal}
	on:click={() => (showModal = true)}
>
	<List />
	<span>Meny</span>
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	data-small-screen-menu="menu"
>
	<button
		class="close-button"
		type="submit"
		aria-label="Lukk meny"
		data-small-screen-menu="close-button"
		on:click={() => dialog.close()}
	>
		<X />
	</button>
	<div class="dialog-content">
		<ul class="navigation">
			<li><a on:click={() => dialog.close()} href="/about">Om oss</a></li>
			<li><a on:click={() => dialog.close()} href="/projects">Prosjekter</a></li>
			<li><a on:click={() => dialog.close()} href="/contact">Kontakt</a></li>
		</ul>
		<div class="actions">
			<a class="button" href="tel:+4722120512">Ring oss</a>
		</div>
	</div>
</dialog>

<style lang="scss">
	@use '$styles/mixins.scss';
	.menu-button {
		appearance: none;
		background: transparent;
		border: 0;
		color: inherit;

		display: flex;
		align-items: center;
		gap: var(--size-xs);
		font-size: var(--font-size-md);
		padding: var(--size-sm);
		border-radius: var(--border-radius-sm);

		span {
			font-size: var(--font-size-base);
		}

		&:focus,
		&:active {
			outline: none !important;
			background-color: var(--green40);
		}
	}

	dialog {
		padding: var(--size-sm);
		padding-top: var(--size-lg);
		/* margin: var(--size-sm); */
		/* width: 100%; */
		width: calc((100% - 6px) - 2em);
		max-width: 450px;
		border: 0px;

		top: 5%;
		left: 5%;

		box-shadow: 0 3px 12px rgb(0, 0, 0, 0.12);
		will-change: transform, opacity;
		transform-origin: 100% 0;
		border-radius: var(--border-radius-sm);
		transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	.dialog-content {
		display: flex;
		flex-direction: column;
		gap: var(--size-md);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
		/* gap: var(--size-base); */
	}

	.navigation li a {
		color: var(--color-primary);
		text-decoration: none;

		padding: var(--size-base);
		display: block;

		border: 2px solid transparent;
		border-radius: var(--border-radius-sm);

		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		&:focus,
		&:active {
			border: 2px solid var(--blue100);
			outline: none !important;
		}
	}

	.close-button {
		position: absolute;
		top: 0;
		right: 0;
		padding: var(--size-base);
		border: 0;
		background: transparent;
		color: var(--color-primary);
		font-size: var(--font-size-lg);
		cursor: pointer;
	}

	.actions {
		padding: var(--size-base);
		padding-top: 0;

		.button {
			width: 100%;
			@include mixins.button;
		}
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(5px);
	}
</style>
