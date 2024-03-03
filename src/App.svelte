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
  let webIcons: Language[] = languagesConfig.filter(obj=>obj.keywords.includes("web"));
  let otherIcons: Language[] = languagesConfig.filter(obj=>obj.keywords.includes("db")||obj.keywords.includes("versionning"));
  let portfolioDevIcons: Language[] = languagesConfig.filter(obj=>obj.keywords.includes("this"));
  let allCards: _Card[] = cardsConfig;
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
  <h2 class="text-3xl">Mon parcours pédagogique</h2>
  <div class="h-14"></div>
  <div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
      <p class="text-pretty text-2xl underline">Voici une liste des langages web que j'ai maîtrisés et utilisés pour réaliser des projets :</p>
      <div class="h-10"></div>
      <Slider showIconsPerPage={3} languagesIcon={ webIcons }></Slider>
  </div>
  <div class="h-10"></div>
  <div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
      <p class="text-pretty text-2xl underline">Pour maintenir des applications et gérer les données, j'utilise cette sélection de logiciels :</p>
      <div class="h-5"></div>
      <Slider showIconsPerPage={2} languagesIcon={ otherIcons }></Slider>
  </div>
  <div class="h-10"></div>
  <h4 class="font-bold text-xl">Découvrez où et comment j'ai pu apprendre et maîtriser ces compétences</h4>
  <div class="flex justify-around mt-10 flex-wrap">
      <Card card={allCards.find(obj => obj.title.text.includes("BAC"))}></Card>
      <Card card={allCards.find(obj => obj.title.text.includes("BTS"))}></Card>
      <Card card={allCards.find(obj => obj.title.text.includes("CDA"))}></Card>
  </div>
  <div class="h-20"></div>
  <div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
      <p class="text-pretty text-2xl underline">Mon portfolio a été développé par moi-même en utilisant les langages et outils suivants :</p>
      <div class="h-10"></div>
      <Slider showIconsPerPage={3} languagesIcon={ portfolioDevIcons }></Slider>
  </div>
  <Footer></Footer>
</main>