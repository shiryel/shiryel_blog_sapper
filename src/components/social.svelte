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
    data-dnt="true"
    data-tweet-limit="2">
    Tweets by shiryel_
  </a>
  <script src="https://platform.twitter.com/widgets.js">
  </script>
</div>
