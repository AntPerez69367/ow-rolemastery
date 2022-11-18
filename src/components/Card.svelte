<script>
  import cx from "classnames";
  import { MAX_COUNT } from "../constants";
  export let type;
  export let handleClick;
  export let count;
</script>

<div
  class="is-hidden-touch is-flex is-flex-direction-column is-flex-grow-1 is-flex-shrink-1"
>
  <div
    class="button info is-fullwidth is-light"
    on:click={() => handleClick(type, true)}
    on:keypress={() => handleClick(type, true)}
  >
    Reset
  </div>
  <figure class="image is-1by1 is-flex is-flex-grow-1 is-flex-shrink-2">
    <img
      class="is-clickable p-4 can-hover is-align-self-center is-unselectable"
      src="./images/{type}.png"
      alt="{type} Card"
      on:click={() => handleClick(type, false)}
      on:keypress={() => handleClick(type, false)}
    />
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
