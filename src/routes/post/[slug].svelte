<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res_info = await this.fetch(`post/${params.slug}.json`);
    const data_info = await res_info.json();

    const res_page = await this.fetch(`post_raw/${params.slug}`);
    const data_page = await res_page.text();

    if (res_info.status !== 200) this.error(res_info.status, data_info.message);

    if (res_page.status !== 200) this.error(res_page.status, data_page.message);

    return { post: { title: data_info.title, html: data_page } };
  }
</script>

<script>
  export let post;
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
  .content :global(h2) {
    font-size: 1.4em;
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
  }

  aside {
    display: flex;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<aside>
  <button onclick="location.href='/'">Home</button>
</aside>

<article class="content">
  {@html post.html}
</article>
<aside>
  <button onclick="location.href='/'">Home</button>
</aside>
