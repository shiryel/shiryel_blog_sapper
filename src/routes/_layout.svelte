<script>
  import Footer from "../components/footer.svelte";
  import Social from "../components/social.svelte";
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100vh;
  }
</style>

<main>
  <Social />
  <Footer />
  <slot />
</main>
