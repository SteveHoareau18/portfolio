import "./app.css";
import CDA from "./lib/pages/CDA.svelte";

const cda = new CDA({
  target: document.getElementById("cda"),
});

export default cda;
