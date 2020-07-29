<svelte:head>
  <script bind:this={script} src={url} />
</svelte:head>

<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let url;
  let script;
  let loaded = 0;

  onMount(async () => {
    // For some reason the svelte can start this 2 times sometimes...
    loaded += 1;
    if(loaded != 1) return;

    script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
  });
</script>
