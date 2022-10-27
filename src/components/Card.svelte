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
      class="is-child super-size is-unselectable"
      src="./images/{type}.png"
      alt="{type} Card"
    />
    <div
      class="card-content has-text-weight-bold overlay-card"
      on:click={() => handleClick(type, false)}
      on:keypress={() => handleClick(type, false)}
    >
      <div class="control abs">
        <div class="tags are-large has-addons is-unselectable">
          <span class="is-dark tag">{count}</span>
          <span
            class={cx("tag", {
              "is-danger": count < 10,
              "is-success": count >= 10,
            })}
          >
            Wins</span
          >
          <progress
            class={cx("progress", {
              "is-danger": count < 10,
              "is-success": count >= 10,
            })}
            value={count}
            max="10"
          />
        </div>
      </div>
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
  }
  .abs {
    position: absolute;
    bottom: -40%;
    right: 20%;
  }
</style>
