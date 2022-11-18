<script>
  import cx from "classnames";
  import { MAX_COUNT } from "../constants";
  export let type;
  export let handleClick;
  export let count;
</script>

<div
  class="is-hidden-desktop is-flex is-flex-direction-column is-align-items-center is-flex-grow-1 is-flex-shrink-1"
>
  <figure class="image is-128x128 is-flex is-flex-grow-1 is-flex-shrink-2">
    <img
      class="is-clickable p-4 can-hover is-align-self-center is-unselectable"
      src="./images/{type}.png"
      alt="{type} Card"
      on:click={() => handleClick(type, false)}
      on:keypress={() => handleClick(type, false)}
    />
    <div
      class="button is-dark is-flex is-align-self-center"
      on:click={() => handleClick(type, true)}
      on:keypress={() => handleClick(type, true)}
    >
      Reset
    </div>
    <span
      class={cx(
        "rounded",
        "is-flex",
        "is-flex-grow-1",
        "abs",
        "tag",
        "is-large",
        {
          "is-danger": count < MAX_COUNT,
          "is-success": count >= MAX_COUNT,
        }
      )}
    >
      {count}
    </span>
  </figure>
</div>

<style>
  .button {
    background-color: transparent;
    color: white;
    z-index: 15;
  }
  .can-hover:hover {
    filter: brightness(1.5);
  }
  .can-hover {
    opacity: 1;
  }
  .abs {
    position: absolute;
    top: 0;
    right: 0;
    clip-path: circle(40%);
  }
</style>
