<script>
  import Footer from "../components/footer.svelte";
  import Social from "../components/social.svelte";
  import Bounjour from "../components/bounjour.svelte";
  import LibLoader from "../components/lib_loader.svelte";
  import { onMount } from "svelte";

  let loaded = 0;

  onMount(async () => {
    // For some reason the svelte can start LibLoader 2 times sometimes...
    loaded += 1;
  });
</script>

<style>
  main {
    position: relative;
    display: grid;
    grid-gap: 5em;
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 auto;
  }

  aside {
    display: none;
  }

  .background-1 {
    position: fixed;
    /*background-image: linear-gradient(to bottom, #88acdf, #516582);*/
    top: -5px;
    left: -5px;
    height: 101%;
    width: 101%;
    animation: rm-blur 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  .background-2 {
    background-image: linear-gradient(to bottom, #cedeed, #88acdf, #516582);
    box-shadow: 0px 5px 5px black;
    justify-self: center;
    max-width: 1000px;
    width: 100vw;
  }

  .sitemap {
    display: none;
  }

  @media (min-width: 1600px) {
    aside {
      display: block;
    }

    main {
      display: grid;
      grid-template-columns: 1fr 1000px 1fr;
      grid-gap: 5em;
      height: 100vh;
    }
    .background-2 {
      width: 1000px;
    }
  }
</style>

{#if loaded == 1}
  <LibLoader url="https://platform.twitter.com/widgets.js" />
{/if}

<!-- Waiting for the PR: https://github.com/sveltejs/sapper/issues/1289 -->
<div class="sitemap">
  <a href="sitemap.xml">sitemap</a>
</div>

<Bounjour />
<Social />
<Footer />
<img
  src="images/background.jpg"
  alt="A mountain background"
  class="background-1" />
<main>
  <aside />
  <div class="background-2">
    <slot />
  </div>
  <aside />
</main>
