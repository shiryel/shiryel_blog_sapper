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
<img src="background.jpg" alt="" class="background-1" />
<main>
  <aside />
  <div class="background-2">
    <slot />
  </div>
  <aside />
</main>
