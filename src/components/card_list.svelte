<script>
  import Card from "./card.svelte";
  export let name = "default";
  export let cards = [];
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    margin-top: 0px;
  }

  h2 {
    padding-top: 3px;
    padding-right: 20px;
    padding-left: 1px;
    border-top: 2px solid black;
    float: left;
  }

  .name {
    width: 100%;
  }

  @media (min-width: 1000px) {
    .name {
      width: 970px;
    }

    .cards {
      width: 970px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

<section>
  <div class="name">
    <h2>{name}</h2>
  </div>
  <div class="cards">
    {#each cards as { title, description, tags, slug }}
      <Card {title} {description} {tags} {slug} />
    {/each}
  </div>
</section>
