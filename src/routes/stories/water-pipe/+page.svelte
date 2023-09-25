<script>
  import Storytime from '../storytime.svelte';
  import Storyheader from '../storyheader.svelte';
  import { story } from './story';
</script>

<Storyheader />

<Storytime stories={story} />
