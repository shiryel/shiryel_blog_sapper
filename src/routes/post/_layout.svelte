<script context="module">
  export function preload(_) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import CardList from "../../components/card_list.svelte";

  export let posts;
  export let segment;

  // receive the message from the Open Comment
  function handleMessage(event) {
    console.log(event.data);
  }
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
    background-image: linear-gradient(
        12deg,
        rgba(193, 193, 193, 0.05) 0%,
        rgba(193, 193, 193, 0.05) 2%,
        rgba(129, 129, 129, 0.05) 2%,
        rgba(129, 129, 129, 0.05) 27%,
        rgba(185, 185, 185, 0.05) 27%,
        rgba(185, 185, 185, 0.05) 66%,
        rgba(83, 83, 83, 0.05) 66%,
        rgba(83, 83, 83, 0.05) 100%
      ),
      linear-gradient(
        321deg,
        rgba(240, 240, 240, 0.05) 0%,
        rgba(240, 240, 240, 0.05) 13%,
        rgba(231, 231, 231, 0.05) 13%,
        rgba(231, 231, 231, 0.05) 34%,
        rgba(139, 139, 139, 0.05) 34%,
        rgba(139, 139, 139, 0.05) 71%,
        rgba(112, 112, 112, 0.05) 71%,
        rgba(112, 112, 112, 0.05) 100%
      ),
      linear-gradient(
        236deg,
        rgba(189, 189, 189, 0.05) 0%,
        rgba(189, 189, 189, 0.05) 47%,
        rgba(138, 138, 138, 0.05) 47%,
        rgba(138, 138, 138, 0.05) 58%,
        rgba(108, 108, 108, 0.05) 58%,
        rgba(108, 108, 108, 0.05) 85%,
        rgba(143, 143, 143, 0.05) 85%,
        rgba(143, 143, 143, 0.05) 100%
      ),
      linear-gradient(
        96deg,
        rgba(53, 53, 53, 0.05) 0%,
        rgba(53, 53, 53, 0.05) 53%,
        rgba(44, 44, 44, 0.05) 53%,
        rgba(44, 44, 44, 0.05) 82%,
        rgba(77, 77, 77, 0.05) 82%,
        rgba(77, 77, 77, 0.05) 98%,
        rgba(8, 8, 8, 0.05) 98%,
        rgba(8, 8, 8, 0.05) 100%
      ),
      linear-gradient(334deg, hsl(247, 0%, 2%), hsl(247, 0%, 2%));
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
    border: 1px solid rgba(108, 108, 108, 0.05);
    border-radius: 2em;
    background-color: rgba(231, 231, 231, 0.05);
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

<svelte:window on:message={handleMessage} />
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
      rel="noopener"
      data-size="large"
      data-hashtags="shiryel_blog">
      Tweet
    </a>
    <script src="https://platform.twitter.com/widgets.js">

    </script>
  </div>

  <aside>
    <a href="/">Home</a>
  </aside>

  <aside>
    <CardList name="More" cards={posts} />
  </aside>
</div>
