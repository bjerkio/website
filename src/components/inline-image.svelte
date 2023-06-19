<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { urlFor } from '../data/sanity-client-browser';

	export let portableText: CustomBlockComponentProps<{ asset: { ref: string } }>;

	const url = urlFor(portableText.value.asset).url();
</script>

<img src={url} alt={portableText.value} />