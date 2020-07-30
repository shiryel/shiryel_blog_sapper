<script>
  import Saos from "saos/src/Saos.svelte";
</script>

<style>
  @keyframes -global-from-top {
    0% {
      transform: translateY(-100vh);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  div {
    display: none;
  }

  @media (min-width: 1600px) {
    div {
      position: absolute;
      display: grid;
      grid-template-columns: 1fr 1000px 1fr;
      grid-gap: 0;
      width: 100%;
      height: 70%;
      align-content: center;
      pointer-events: none;
    }

    img {
      max-height: 270px;
      width: auto;
      z-index: 100;
    }
  }
</style>

<div>
  <Saos
    animation={'from-top 5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
    css_observer="z-index: 10; justify-self: end;"
    once=true>
    <img
      class="left"
      alt="a fennec saying bounjour, part 1"
      src="images/bounjour-1.png" />
  </Saos>
  <Saos
    animation={'from-top 5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
    css_observer="z-index: 10;"
    once=true>
    <img alt="a fennec saying bounjour, part 2" src="images/bounjour-2.png" />
  </Saos>
</div>
