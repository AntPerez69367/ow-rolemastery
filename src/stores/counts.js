import { writable } from "svelte/store";

const INITIAL_STATE = {
  tank: 0,
  damage: 0,
  support: 0,
};

export const counts = writable(
  JSON.parse(localStorage.getItem("counts")) || INITIAL_STATE
);

counts.subscribe((value) => {
  localStorage.counts = JSON.stringify(value);
});
