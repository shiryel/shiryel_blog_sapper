<script>
  import { onMount } from 'svelte';

  export let info_text = "";

  onMount(() => {
		const interval = setInterval(() => {
      welcome = welcome_list[Math.floor(Math.random() * welcome_list.length)];
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<style>

  div {
    text-align: center;
    padding: 10px;
  }

  p {
    font-size: 1.4em;
    color: #680578;
  }

  h1 {
    font-family: 'balsamiq_sansregular';
    font-size: 3em;
  }

  span {
    font-size: 1.3em;
  }

  .info_text {
    color: black;
  }

  @media (min-width: 1000px) {
  }
</style>

<div>
  <h1>Shiryel's Blog</h1>
  <p class="info_text">{info_text}</p>
  <span>This is just a place where I put some reminders for myself, but maybe you find something useful</span>
</div>
