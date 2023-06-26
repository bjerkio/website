<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any).chatwootSDK.run({
			websiteToken: 'm94Z8YzguKbGc1XnowaNjHfM',
			baseUrl: 'https://app.chatwoot.com'
		});
	});
</script>

<svelte:head>
  <link rel="dns-prefetch" href="https://app.chatwoot.com" />
  <script async defer src="https://app.chatwoot.com/packs/js/sdk.js" lang="ts"></script>
</svelte:head>
