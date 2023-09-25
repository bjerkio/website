<script lang="ts">
  interface Story {
    author: string;
    message: string;
  }

  export let stories: Story[] = [];
</script>

<main>
  {#each stories as story}
    <div class="story">
      <div class="message">{story.message}</div>
      <div class="author">Skrevet av {story.author}</div>
    </div>
  {/each}
</main>

<style>
  main {
    max-width: 40ch;
    margin: 0 auto;
  }

  main > * {
    margin-block-start: 2em;
  }

  .message {
    font-weight: bold;
    font-size: 1.8rem;
    font-family: Lora, serif;
  }

  .author {
    visibility: hidden;
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }

  .story:focus-within,
  .story:hover > .author {
    visibility: visible;
  }
</style>
