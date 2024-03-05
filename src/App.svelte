<script lang="ts">
  import "./app.css";
  import Navbar from "./lib/Navbar.svelte";
  import Slider from "./lib/Slider.svelte";
  import { type Language } from "./entity/Language";
  import { languagesConfig } from "./config/LanguagesConfig";
  import Footer from "./lib/Footer.svelte";
  import Card from "./lib/Card.svelte";
  import { type _Card } from "./entity/_Card";
  import { cardsConfig } from "./config/CardsConfig";

  import { onMount } from 'svelte';
  import Index from "./lib/pages/Index.svelte";
  import Bac from "./lib/pages/BAC.svelte";
  import Bts from "./lib/pages/BTS.svelte";

    let url : string = "";

    onMount(() => {
        url = window.location.href
    });
</script>
<main class="text-center">
  <Navbar></Navbar>
  <div>
      <div class="flex justify-center">
          <blockquote class="text-xl italic font-semibold text-gray-900">
              <p><svg class="md:w-8 md:h-8 w-6 h-6 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              Le développement c'est plus qu'une passion, c'est une envie d'enseigner aux autres.</p>
          </blockquote>
      </div>
      <p>Steve HOAREAU, 21 ans. Passionné de développement, de jeux vidéos et d'anime.</p>
  </div>
  <div class="h-20"></div>
  {#if url.endsWith("/bac")}
    <Bac></Bac>
  {:else if url.endsWith("/bts")}
    <Bts></Bts>
  {:else}
    <Index></Index>
  {/if}

  <Footer></Footer>
</main>