<script lang="ts">
  // TODO: Refactor to use image.svelte component for image processing
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { urlFor } from '../data/sanity-client-browser';

  export let portableText: CustomBlockComponentProps<{ asset: { ref: string } }>;

  const url = urlFor(portableText.value.asset).url();
</script>

<img src={url} alt={portableText.value} />
