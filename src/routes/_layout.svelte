<script>
  import Footer from "../components/footer.svelte";
  import ShiryelDen from "../components/shiryel_den.svelte";
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100vh;
  }
</style>

<main>
  <ShiryelDen />
  <Footer />
  <slot />
</main>
