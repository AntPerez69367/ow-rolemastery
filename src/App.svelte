<script>
  import { counts } from "./stores/counts";
  import Card from "./components/Card.svelte";
  import MobileCard from "./components/MobileCard.svelte";

  import Logo from "./components/Logo.svelte";
  import Footer from "./components/Footer.svelte";

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

<Logo />
<div class="columns">
  <Card type="tank" handleClick={onClick} bind:count={$counts.tank} />
  <MobileCard type="tank" handleClick={onClick} bind:count={$counts.tank} />

  <Card type="damage" handleClick={onClick} count={$counts.damage} />
  <MobileCard type="damage" handleClick={onClick} count={$counts.damage} />

  <Card type="support" handleClick={onClick} count={$counts.support} />
  <MobileCard type="support" handleClick={onClick} count={$counts.support} />
</div>
<Footer />

<style>
</style>
