<script lang="ts">
  import "./app.css";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";

  import { onMount } from "svelte";
  import Index from "./lib/pages/Index.svelte";
  import Bac from "./lib/pages/BAC.svelte";
  import Bts from "./lib/pages/BTS.svelte";
  import Cda from "./lib/pages/CDA.svelte";
  import { SpeedInsights } from "@vercel/speed-insights/next";

  let url: string = "";

  onMount(() => {
    url = window.location.href;
  });
</script>

<main class="text-center">
  <Navbar></Navbar>

  <div class="h-20"></div>
  {#if url.endsWith("/bac")}
    <Bac></Bac>
  {:else if url.endsWith("/bts")}
    <Bts></Bts>
  {:else if url.endsWith("/cda")}
    <Cda></Cda>
  {:else}
    <Index></Index>
  {/if}

  <Footer></Footer>
</main>
