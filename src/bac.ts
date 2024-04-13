import "./app.css";
import BAC from "./lib/pages/BAC.svelte";

const bac = new BAC({
  target: document.getElementById("bac"),
});

export default bac;
