<script>
  import Footer from "../components/footer.svelte";
  import Social from "../components/social.svelte";
  import Bounjour from "../components/bounjour.svelte";
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
    background-image: linear-gradient(to bottom, #88acdf, #516582);
    height: 100%;
    width: 100%;
  }

  .background-2 {
    background-color: #cedeed;
    box-shadow: 0px 5px 5px black;
    justify-self: center;
    max-width: 1000px;
    width: 100vw;
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

<Bounjour />
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
