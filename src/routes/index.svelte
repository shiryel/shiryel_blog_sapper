<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`post.json`).then(r => r.json()).then(posts => {
      console.log(posts)
			return { posts };
		});
	}
</script>

<script>
  import CardList from "./_home/card_list.svelte"
  import Welcome from "./_home/welcome.svelte"

	export let posts;
</script>

<style>
	@media (min-width: 480px) {
	}
</style>

<svelte:head>
	<title>Shiryel's Blog</title>
</svelte:head>

<Welcome />
<CardList name=posts cards={posts} />
