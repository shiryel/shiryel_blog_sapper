<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        return { posts };
      });
  }
</script>

<script>
  import CardList from "../components/card_list.svelte";
  import Welcome from "../components/welcome.svelte";

  export let posts;
</script>

<style>
  section {
    display: grid;
    grid-gap: 5em;
  }

  @media (min-width: 1600px) {
    section {
      display: grid;
      grid-gap: 5em;
    }
  }
</style>

<svelte:head>
  <title>Shiryel's Blog</title>
</svelte:head>

<section>
    <Welcome />
    <CardList name="Featured" cards={posts} />
    <CardList name="Last Posts" cards={posts} />
</section>
