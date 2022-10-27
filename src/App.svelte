<script>
  import { counts } from "./stores/counts";
  import Ads from "./Ads.svelte";
  import Card from "./components/Card.svelte";
  import Logo from "./components/Logo.svelte";

  const onClick = (type, reset) => {
    if (reset) {
      counts.update((value) => {
        value[type] = 0;
        return value;
      });
      return;
    }
    counts.update((value) => {
      if (value[type] < 10) {
        value[type] += 1;
      }
      return value;
    });
  };
</script>

<div class="container is-flex is-flex-direction-column is-align-self-center">
  <Logo />
  <div class="columns">
    <Card type="tank" handleClick={onClick} bind:count={$counts.tank} />
    <Card type="damage" handleClick={onClick} count={$counts.damage} />
    <Card type="support" handleClick={onClick} count={$counts.support} />
  </div>
  <Ads />
</div>

<style>
</style>
