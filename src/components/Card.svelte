<script>
  import cx from "classnames";
  export let type;
  export let handleClick;
  export let count;
</script>

<div class="block is-clickable">
  <div class="card-image">
    <div
      class="button info is-large is-light is-fullwidth"
      on:click={() => handleClick(type, true)}
      on:keypress={() => handleClick(type, true)}
    >
      Reset
    </div>
    <img
      class="is-child is-clickable is-rounded super-size can-hover is-unselectable"
      src="./images/{type}.png"
      alt="{type} Card"
      on:click={() => handleClick(type, false)}
      on:keypress={() => handleClick(type, false)}
    />
    <div class="card-content has-text-weight-bold">
      <span
        class={cx("rounded", "abs", "tag", "is-large", {
          "is-danger": count < 10,
          "is-success": count >= 10,
        })}>{count}</span
      >
    </div>
  </div>
</div>

<style>
  .button {
    background-color: transparent;
    color: white;
    z-index: 15;
  }
  .super-size {
    aspect-ratio: 1/1;
    width: 75%;
    flex-grow: 1;
    opacity: 1;
  }
  .can-hover:hover {
    opacity: 0.5;
  }
  .can-hover {
    opacity: 1;
  }
  .abs {
    position: absolute;
    top: 70%;
    right: 10%;
    clip-path: circle(40%);
  }
</style>
