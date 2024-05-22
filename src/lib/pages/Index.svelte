<script lang="ts">
  import { cardsConfig } from "../../config/CardsConfig";
  import { languagesConfig } from "../../config/LanguagesConfig";
  import type { Language } from "../../entity/Language";
  import type { _Card } from "../../entity/_Card";
  import Card from "../Card.svelte";
  import Slider from "../Slider.svelte";

  let webIcons: Language[] = languagesConfig.filter((obj) =>
    obj.keywords.includes("web")
  );
  let otherIcons: Language[] = languagesConfig.filter(
    (obj) => obj.keywords.includes("db") || obj.keywords.includes("versionning")
  );
  let portfolioDevIcons: Language[] = languagesConfig.filter((obj) =>
    obj.keywords.includes("this")
  );
  let allCards: _Card[] = cardsConfig;
</script>

<div>
  Attention, ce site est encore en cours de développement. Si vous reperez un
  bug, une erreur, merci de me contacter par mail <a
    href="mailto:steve.hoareau1@gmail.com"
    class="link">steve.hoareau1@gmail.com</a
  >
  Lien vers l'ancien site :
  <a href="https://stevehoareau18.github.io/index2.html" class="link"
    >https://stevehoareau18.github.io</a
  >
</div>
<h2 class="text-3xl">Mon parcours pédagogique</h2>
<div class="h-14"></div>
<div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
  <p class="text-pretty text-2xl underline">
    Voici une liste des langages web que j'ai maîtrisés et utilisés pour
    réaliser des projets :
  </p>
  <div class="h-10"></div>
  <Slider showIconsPerPage={3} languagesIcon={webIcons}></Slider>
</div>
<div class="h-10"></div>
<div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
  <p class="text-pretty text-2xl underline">
    Pour maintenir des applications et gérer les données, j'utilise cette
    sélection de logiciels :
  </p>
  <div class="h-5"></div>
  <Slider showIconsPerPage={2} languagesIcon={otherIcons}></Slider>
</div>
<div class="h-10"></div>
<h4 class="font-bold text-xl">
  Découvrez où et comment j'ai pu apprendre et maîtriser ces compétences
</h4>
<div class="flex justify-around mt-10 flex-wrap">
  <Card card={allCards.find((obj) => obj.title.text.includes("BAC"))}></Card>
  <Card card={allCards.find((obj) => obj.title.text.includes("BTS"))}></Card>
  <Card card={allCards.find((obj) => obj.title.text.includes("CDA"))}></Card>
</div>
<div class="h-20"></div>
<div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
  <p class="text-pretty text-2xl underline">
    Mon portfolio a été développé par moi-même en utilisant les langages et
    outils suivants :
  </p>
  <div class="h-10"></div>
  <Slider showIconsPerPage={3} languagesIcon={portfolioDevIcons}></Slider>
</div>
