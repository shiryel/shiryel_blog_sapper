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
  import CardList from "../../components/card_list.svelte"

	export let posts;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h1) {
    text-align: center;
    padding: 2em;
  }
  .content :global(h2) {
    font-size: 1.5em;
    font-weight: 500;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  article {
    text-align: left;
    max-width: 950px;
    margin: 0 auto;
    font-size: 1rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  button {
    background-color: #c2c2c2;
    width: 200px;
    margin: 20px;
    margin: 3em;
  }
  aside {
    display: flex;
    justify-content: center;
  }
</style>

<svelte:head>
  <link href="prism.css" rel="stylesheet" />
</svelte:head>

<aside>
  <button onclick="location.href='/'">Home</button>
</aside>
<article class="content">
  <slot />
</article>
<aside>
  <button onclick="location.href='/'">Home</button>
</aside>

<aside>
  <CardList name=More cards={posts} />
</aside>
