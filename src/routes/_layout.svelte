<script>
  import Footer from "../components/footer.svelte";
  import Social from "../components/social.svelte";
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

  /*
  A module containing constants for gradient backgrounds
  The backgrounds are modified versions from https://www.gradientmagic.com/
  */

  .background-1 {
    position: fixed;
    background-image: radial-gradient(
        circle at center center,
        transparent 0%,
        rgb(33, 33, 33) 99%
      ),
      repeating-linear-gradient(
        0deg,
        rgba(163, 163, 163, 0.2) 0px,
        rgba(163, 163, 163, 0.2) 1px,
        transparent 1px,
        transparent 30px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(163, 163, 163, 0.2) 0px,
        rgba(163, 163, 163, 0.2) 1px,
        transparent 1px,
        transparent 30px
      ),
      linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33));
    height: 100%;
    width: 100%;
  }

  .background-2 {
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

<!-- Waiting for the PR: https://github.com/sveltejs/sapper/issues/1289 -->
<div class="sitemap"><a href="sitemap.xml">sitemap</a></div>

<Social />
<Footer />
<div class="background-1" />
<main>
  <aside />
  <div class="background-2">
    <slot />
  </div>
  <aside />
</main>
