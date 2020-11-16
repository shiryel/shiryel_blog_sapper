<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
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
  <title>Shiryel's Blog - The tech space of the fennec</title>

  <meta
    name="description"
    content="Shiryel blog with tips on how to work with not so trivial things
    and others" />
  <meta name="keywords" content="shiryel, blog, elixir, aws, svelte" />

  <meta property="og:title" content="Shiryel's Blog" />
  <meta
    property="og:description"
    content="A Fennec Tech Blog, a place where I put some reminders for myself" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://blog.shiryel.com/" />
  <meta
    property="og:image"
    content="https://blog.shiryel.com/images/logo-512.png" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@shiryel_" />
  <meta name="twitter:creator" content="@shiryel_" />
</svelte:head>

<section>
  <Welcome />
  <CardList name="Featured" cards={posts} />
  <CardList name="Last Posts" cards={posts} />
</section>
