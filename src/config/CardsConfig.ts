import type { _Card } from "../entity/_Card";
let arrowSvg =
  '<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>';
export let cardsConfig = [
  {
    title: {
      href: "/bac",
      text: "BAC S",
    },
    description:
      "Obtenu avec la <span class='font-bold underline'>spécialité Sciences-Ingénieurs</span> et l'<span class='underline'>option Informatique Sciences du Numérique</span> en 2020. Découvrez ce que j'ai fait pendant mon Baccalauréat.",
    img: {
      href: "#",
      src: "",
    },
    readMore: {
      href: "/bac",
      text: "En savoir plus " + arrowSvg,
    },
  },
  {
    title: {
      href: "/bts",
      text: "BTS SIO",
    },
    description:
      "Obtenu avec succès. Ayant choisi l'<span class='underline'>option B: Solutions Logicielles et Applications Métiers</span> en 2022. Découvrez ce que j'ai fait durant ces 2 années.",
    img: {
      href: "/bts",
      src: "https://stevehoareau18.github.io/img/btssio.png",
    },
    readMore: {
      href: "/bts",
      text: "En savoir plus " + arrowSvg,
    },
  },
  {
    title: {
      href: "#",
      text: "BAC+4 CDA en Alternance",
    },
    description:
      "En cours d'acquisition. BAC+4 <span class='underline'>Concepteur Développeur d'Applications</span> au centre de formation Expernet. Découvrez ce que j'ai fait durant ces 2 années.",
    img: {
      href: "#",
      src: "Expernet.png",
    },
    readMore: {
      href: "/cda",
      text: "En savoir plus " + arrowSvg,
    },
  },
] as _Card[];
