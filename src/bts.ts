import "./app.css";
import BTS from "./lib/pages/BTS.svelte";

const bts = new BTS({
  target: document.getElementById("bts"),
});

export default bts;
