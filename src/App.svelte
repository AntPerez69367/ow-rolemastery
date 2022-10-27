<script>
  import Card from "./components/Card.svelte";
  import Logo from "./components/Logo.svelte";
  let counts = {
    tank: 0,
    damage: 0,
    support: 0,
  };

  const onClick = (type, reset) => {
    if (reset) {
      counts[type] = 0;
      return;
    }
    if (counts[type] < 10) {
      counts[type] += 1;
    }
  };
</script>

<body class="container">
  <Logo />
  <div class="columns">
    <Card type="tank" handleClick={onClick} count={counts.tank} />
    <Card type="damage" handleClick={onClick} count={counts.damage} />
    <Card type="support" handleClick={onClick} count={counts.support} />
  </div>
</body>

<style>
</style>
