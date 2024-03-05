<script lang="ts">
    import { languagesConfig } from "../../config/LanguagesConfig";
    import type { Language } from "../../entity/Language";
      import Slider from "../Slider.svelte";
      let icons: Language[] = languagesConfig.filter(obj=>obj.keywords.includes("bts"));
  </script>
  <div>
      <h4 class="font-bold text-2xl">Brevet Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles Applications Métiers: Obtenu ✅</h4>
      <div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
          <p class="text-pretty text-2xl underline">Voici une liste des langages que j'ai appris pendant le BTS SIO :</p>
          <div class="h-10"></div>
          <Slider showIconsPerPage={3} languagesIcon={ icons }></Slider>
      </div>
      <div>
          <p>Durant cette année, j'ai pu faire un jeu en Python: Bulls and Cows, le but était de deviner le code secret.</p>
          <p>J'ai pu participer à des interventions de l'association <a href="https://www.webcup.fr/" class="text-blue-600 underline">Webcup</a>. Avec cette-dernière, j'ai pu effectuer des projets HTML & CSS</p>
      </div>
      <div class="h-10"></div>
      <button class="rounded-2xl bg-blue-500 text-white font-bold uppercase p-4" on:click={()=>window.location.href="/"}>Retour à l'accueil</button>
      <div class="h-10"></div>
  </div>