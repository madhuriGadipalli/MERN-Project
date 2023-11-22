import { store } from "./store";
export const test = () => {
  const state = store.getState();
  console.log("stateeee", state);
};

store.subscribe(() => {
  test();
});
