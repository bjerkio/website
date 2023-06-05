<script lang="ts">
	import type { WithContext, Thing } from 'schema-dts';
	import { serializeSchema } from '../utils';

	export let schema: WithContext<Thing>;
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>
