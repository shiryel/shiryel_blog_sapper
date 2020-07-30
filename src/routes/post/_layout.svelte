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
  import CardList from "../../components/card_list.svelte";

  export let posts;
  export let segment;
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
    font-size: 2.2em;
    font-weight: bold;
    text-align: center;
    padding: 2em;
  }
  .content :global(h2) {
    font-size: 1.8em;
    font-weight: bold;
  }
  .content :global(h3) {
    font-size: 1.4em;
    font-weight: bold;
  }
  .content :global(p) {
    font-size: 1.3em;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .div {
    background-image: linear-gradient(to bottom, #cedeed, #88acdf);
    padding: 1em;
  }

  article {
    text-align: left;
    font-size: 1em;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  a {
    background-color: #c2c2c2;
    width: 200px;
    margin: 2em;
    padding: 0.7em;
    border: 1px solid white;
    border-radius: 2em;
    background-color: white;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    border: 1px solid #cdcdcd;
  }

  .twitter {
    display: flex;
    padding-top: 15px;
    justify-content: center;
  }

  aside {
    display: flex;
    justify-content: center;
  }
</style>

<svelte:head>
  <link href="prism.css" rel="stylesheet" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://blog.shiryel.com/posts/{segment}" />
  <meta
    property="og:image"
    content="https://blog.shiryel.com/images/logo-512.png" />
</svelte:head>

<div class="div">
  <aside>
    <a href="/">Home</a>
  </aside>

  <article class="content" itemscope itemtype="http://schema.org/TechArticle">
    <slot />
  </article>

  <div class="twitter">
    <a
      class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Take%20a%20look%20on%20this%20"
      data-size="large"
      data-hashtags="shiryel_blog">
      Tweet
    </a>
  </div>

  <aside>
    <a href="/">Home</a>
  </aside>

  <aside>
    <CardList name="More" cards={posts} />
  </aside>

</div>
