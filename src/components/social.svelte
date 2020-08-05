<script>

</script>

<style>
  .left {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-gap: 2em;
    background: #545454;
    color: white;
    font-size: 1.2em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0.3em;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.1em;
    margin-left: 1em;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 10;
  }

  .right {
    position: absolute;
    color: white;
    padding: 0.3em;
    padding-right: 1em;
    padding-top: 0.3em;
    margin-left: 1em;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .social {
    display: none;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 5%;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #cedeed, #88acdf);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 5px 5px black;
    max-width: 300;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    .left {
      position: fixed;
      margin-left: 10em;
    }

    .right {
      padding-right: 5%;
      padding-top: 1em;
    }
  }

  @media (min-width: 1600px) {
    .social {
      display: block;
    }
  }
</style>

<div class="left">
  <a href="https://www.shiryel.com/" rel="noopener" target="_blank">
    Shiryel's Den
  </a>
</div>
<div class="right">
  <a
    href="https://twitter.com/shiryel_?ref_src=twsrc%5Etfw"
    rel="noopener"
    class="twitter-follow-button"
    data-show-count="false"
    data-size="large">
    Follow @shiryel_
  </a>
</div>
<div class="social">
  <a
    class="twitter-timeline"
    href="https://twitter.com/shiryel_?ref_src=twsrc%5Etfw"
    rel="noopener"
    data-width="300"
    data-height="90vh"
    data-chrome="noheader nofooter noborders transparent"
    data-dnt="true">
    Tweets by shiryel_
  </a>
  <script src="https://platform.twitter.com/widgets.js">

  </script>
</div>
