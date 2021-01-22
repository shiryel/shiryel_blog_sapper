<script>
  import Saos from "saos/src/Saos.svelte";

  export let title = "";
  export let slug = "";
  export let description = "";
  export let tags = [];
</script>

<style>
  a {
    display: flex;
    border: 1px solid rgba(240, 240, 240, 0.05);
    flex-direction: column;
    margin-bottom: 5px;
    padding-top: 7px;
    padding-left: 10px;
    border-top-right-radius: 10px;
    text-align: left;
    background-color: rgba(240, 240, 240, 0.05);
  }

  a:hover {
    border: 1px solid #FBFBFBba;
  }

  h3 {
    margin: 0;
    margin-bottom: 7px;
    font-size: 1.7em;
    float: left;
    color: #FBFBFBba;
  }

  p {
    margin: 0;
    font-size: 1.2em;
  }

  aside {
    width: 100%;
  }

  span {
    margin: 0;
    padding: 3px;
    margin: 3px;
    font-size: 0.7em;
    border-radius: 5px;
    color: #FBFBFBba;
    float: right;
  }

  @media (min-width: 1000px) {
    a {
      width: 470px;
    }
  }
</style>

<a href={`/post/${slug}`} itemprop="url">
  <div>
    <h3 itemprop="name">{title}</h3>
  </div>
  <p itemprop="description">{description}</p>
  <aside>
    {#each tags as tag}
      <span itemprop="keywords">{tag}</span>
    {/each}
  </aside>
</a>
