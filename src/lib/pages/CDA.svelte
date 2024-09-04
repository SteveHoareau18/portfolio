<script lang="ts">
  import { onMount } from "svelte";
  import { languagesConfig } from "../../config/LanguagesConfig";
  import type { Language } from "../../entity/Language";
  import Slider from "../Slider.svelte";
  import Navbar from "../Navbar.svelte";
  import Footer from "../Footer.svelte";
  let icons: Language[] = languagesConfig.filter((obj) =>
    obj.keywords.includes("cda")
  );

  let toggleOverflow = "overflow-y-auto h-32";
  let overflowTextHidden = false;

  onMount(() => {
    const interval = setInterval(() => {
      overflowTextHidden = !overflowTextHidden;
    }, 5000);
    return () => clearInterval(interval);
  });
</script>

<main class="text-center">
  <Navbar></Navbar>
  <div>
    <h4 class="font-bold text-2xl">
      Concepteur Développeur d'Applications Titre Niveau 6 RNCP - 31174: En
      cours...
    </h4>
    <div class="bg-slate-600 md:ml-52 md:mr-52 p-4 rounded-3xl text-white">
      <p class="text-pretty text-2xl underline">
        Voici une liste de technologie que j'ai appris pendant la formation :
      </p>
      <div class="h-10"></div>
      <Slider showIconsPerPage={3} languagesIcon={icons}></Slider>
    </div>
    <div class="h-5"></div>
    <div class="bg-gray-100 p-8 ml-96 mr-96 rounded-2xl">
      <div class="text-center flex justify-center">
        <img src="Expernet.png" alt="CDA" />
      </div>
      <div
        class="{toggleOverflow} max-w-lg mx-auto bg-white shadow-md rounded-md"
      >
        <div class="mb-4">
          <h1 class="text-2xl font-bold">Résumé :</h1>
          <p>
            La formation CDA (Concepteur Développeur d'Applications) au centre
            de formation Expernet Campus est un titre de niveau 6 - RNCP 31174
            sur 2 ans, offrant des alternances avec des entreprises. Pour
            réussir cette formation il faut valider un examen final sous forme
            de présentation orale d'un projet conçu et dévloppé en application
            web & mobile.
          </p>
        </div>

        <div class="mb-4">
          <p>
            Il comporte aussi des EPCF (Evaluations Passées en Cours de
            Formation). Et des MSP (Mises en Situations Professionnelles)
          </p>
        </div>

        <div>
          <p>
            Les cours sont donnés par des intervenants qui travail dans le
            milieu privé. Certains proposent des TP(Travaux Pratiques).
          </p>
        </div>
      </div>
      <div class="flex justify-center bg-white border-gray max-w-lg mx-auto">
        <button
          on:click={() => {
            if (toggleOverflow != "") {
              toggleOverflow = "";
            } else {
              toggleOverflow = "overflow-y-auto h-32";
            }
          }}
        >
          {#if toggleOverflow != ""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-down btn bg-blue"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-up btn bg-blue"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          {/if}
        </button>
      </div>
      <div>
        {#if !overflowTextHidden && toggleOverflow != ""}
          <p>Cliquez pour dérouler</p>
        {/if}
      </div>
    </div>
    <div class="h-10"></div>
    <div>
      <h6
        class="text-2xl font-bold m-5 mt-10 bg-slate-400 text-black rounded uppercase"
      >
        Mes années en entreprises
      </h6>
      <div class="h-5"></div>
      <div class="grid grid-cols-2 gap-4 m-2">
        <!-- ###HDJ -->
        <div class="border-gray-600 shadow-xl p-6">
          <div>
            <p class="font-bold uppercase">HDJ SAS</p>
            <p class="flex justify-center gap-2">
              NOVEMBRE 2022 - NOVEMBRE 2023 • 1 an <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="25"
                fill="currentColor"
                class="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"
                />
                <path
                  d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                />
              </svg>
            </p>
          </div>
          <div>
            <span class="underline">Alternant développeur application</span>
            <ul>
              <li>
                Créer des sites web avec un CMS(WordPress avec des modules),
              </li>
              <li>
                Développer la présence en ligne en faisant du SEO et en
                utilisant Google Fiche Etablissement et Search Console,
              </li>
              <li>Création de maquette avec Figma,</li>
              <li>Développer des applications Symfony.</li>
            </ul>
          </div>

          <div class="px-4 py-3 flex items-center justify-center">
            <a href="https://groupe-ace.re">
              <svg
                height="48"
                width="48"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
                class="p-1"
                ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g><g id="SVGRepo_iconCarrier">
                  <circle style="fill:#ffffff;" cx="256" cy="256" r="244.494"
                  ></circle>
                  <path
                    style="fill:#231F20;"
                    d="M512,256c0-68.38-26.63-132.668-74.981-181.019C388.668,26.629,324.38,0,256,0 C187.619,0,123.332,26.629,74.98,74.981C26.629,123.332,0,187.62,0,256s26.629,132.668,74.981,181.02 C123.332,485.371,187.619,512,256,512c68.38,0,132.668-26.629,181.019-74.98C485.37,388.668,512,324.38,512,256z M471.909,343.53 c-19.928-18.858-45.447-32.163-73.256-41.424c1.522-15.065,2.31-30.482,2.31-46.11c0-15.627-0.788-31.041-2.31-46.105 c27.808-9.262,53.326-22.568,73.253-41.428c11.004,27.041,17.084,56.59,17.084,87.537 C488.989,286.944,482.91,316.491,471.909,343.53z M134.044,255.997c0-13.405,0.605-26.63,1.778-39.577 c36.192,9.092,74.607,12.428,108.671,13.017v53.127c-34.062,0.589-72.477,3.926-108.671,13.015 C134.649,282.631,134.044,269.404,134.044,255.997z M244.492,487.923c-27.028-4.988-52.52-27.467-72.765-64.557 c-0.366-0.67-0.72-1.354-1.082-2.031c23.512-16.669,48.395-26.35,73.846-28.595V487.923z M267.503,392.742 c25.452,2.244,50.336,11.923,73.846,28.593c-0.361,0.678-0.717,1.362-1.083,2.033c-20.244,37.088-45.737,59.569-72.764,64.557 L267.503,392.742L267.503,392.742z M267.503,24.069c27.027,4.988,52.52,27.469,72.764,64.557c0.366,0.67,0.72,1.353,1.082,2.03 c-23.508,16.669-48.391,26.35-73.845,28.593L267.503,24.069L267.503,24.069z M244.492,119.248 c-25.452-2.245-50.336-11.927-73.844-28.596c0.36-0.675,0.715-1.358,1.079-2.026c20.245-37.088,45.737-59.569,72.765-64.557V119.248 z M267.503,142.33c29.093-2.161,57.341-12.516,83.846-30.581c10.24,24.369,17.697,51.963,22.064,81.453 c-30.339,7.986-65.981,12.485-105.91,13.207V142.33L267.503,142.33z M359.606,76.051c-8.943-16.111-18.913-29.839-29.674-41.011 c17.006,5.704,33.138,13.326,48.15,22.598C372.056,64.299,365.89,70.433,359.606,76.051z M152.391,76.048 c-6.283-5.617-12.448-11.75-18.472-18.408c15.009-9.271,31.139-16.891,48.142-22.596C171.3,46.213,161.333,59.94,152.391,76.048z M244.492,142.33v64.079c-39.929-0.723-75.572-5.221-105.912-13.208c4.368-29.491,11.824-57.085,22.064-81.454 C187.152,129.813,215.399,140.168,244.492,142.33z M244.492,305.59v64.069c-29.091,2.162-57.339,12.518-83.847,30.583 c-10.239-24.368-17.696-51.958-22.063-81.446C168.921,310.81,204.564,306.313,244.492,305.59z M152.394,435.933 c8.943,16.109,18.905,29.851,29.665,41.024c-17.008-5.707-33.142-13.329-48.154-22.604 C139.936,447.689,146.105,441.553,152.394,435.933z M359.601,435.929c6.29,5.622,12.462,11.759,18.492,18.424 c-15.015,9.276-31.15,16.899-48.161,22.606C340.694,465.785,350.658,452.041,359.601,435.929z M267.503,369.658v-64.069 c39.928,0.723,75.57,5.22,105.909,13.205c-4.368,29.488-11.823,57.078-22.062,81.445 C324.842,382.175,296.594,371.82,267.503,369.658z M267.503,282.564v-53.127c34.062-0.588,72.477-3.926,108.669-13.016 c1.172,12.946,1.778,26.171,1.778,39.576c0,13.408-0.605,26.633-1.778,39.582C339.979,286.489,301.566,283.152,267.503,282.564z M461.504,146.317c-0.075,0.077-0.156,0.144-0.23,0.223c-15.45,16.585-37.696,29.965-65.643,39.852 c-5.066-32.301-13.662-62.5-25.437-89.027c9.267-7.87,18.272-16.743,26.983-26.577C423.646,91.013,445.669,116.767,461.504,146.317z M114.821,70.789c8.71,9.833,17.715,18.705,26.98,26.573c-11.776,26.527-20.372,56.726-25.438,89.028 c-27.946-9.887-50.19-23.266-65.638-39.851c-0.074-0.079-0.154-0.146-0.229-0.222C66.331,116.767,88.354,91.014,114.821,70.789z M40.095,168.463c19.925,18.859,45.443,32.164,73.248,41.426c-1.522,15.064-2.31,30.48-2.31,46.106 c0,15.629,0.788,31.046,2.31,46.112c-27.807,9.261-53.325,22.565-73.252,41.421C29.09,316.491,23.011,286.944,23.011,256 C23.011,225.053,29.091,195.505,40.095,168.463z M50.491,365.675c0.076-0.077,0.158-0.145,0.232-0.226 c15.45-16.582,37.695-29.958,65.641-39.844c5.066,32.297,13.662,62.494,25.434,89.019c-9.268,7.87-18.277,16.743-26.989,26.577 C88.345,420.977,66.325,395.224,50.491,365.675z M397.189,441.202c-8.714-9.835-17.723-18.709-26.992-26.58 c11.774-26.525,20.368-56.72,25.433-89.018c27.947,9.884,50.194,23.262,65.645,39.845c0.075,0.081,0.156,0.147,0.234,0.226 C445.675,395.225,423.654,420.978,397.189,441.202z"
                  ></path>
                </g></svg
              >
            </a>
          </div>
        </div>

        <!-- ###TEEO -->
        <div class="border-gray-600 shadow-xl p-6">
          <div>
            <p class="font-bold uppercase">TEEO SAS</p>
            <p class="flex justify-center gap-2">
              NOVEMBRE 2023 - SEPTEMBRE 2024 • 8 mois <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="25"
                fill="currentColor"
                class="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"
                />
                <path
                  d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                />
              </svg>
            </p>
          </div>
          <div>
            <span class="underline">Alternant développeur web</span>
            <ul>
              <li>Maintenir une application web Php & JQuery,</li>
              <li>Conception de maquettes avec Whimsical,</li>
              <li>Création de procédures et fonctions MySQL</li>
            </ul>
          </div>

          <div class="px-4 py-3 flex items-center justify-center">
            <a href="https://teeo.fr">
              <svg
                height="48"
                width="48"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
                class="p-1"
                ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g><g id="SVGRepo_iconCarrier">
                  <circle style="fill:#ffffff;" cx="256" cy="256" r="244.494"
                  ></circle>
                  <path
                    style="fill:#231F20;"
                    d="M512,256c0-68.38-26.63-132.668-74.981-181.019C388.668,26.629,324.38,0,256,0 C187.619,0,123.332,26.629,74.98,74.981C26.629,123.332,0,187.62,0,256s26.629,132.668,74.981,181.02 C123.332,485.371,187.619,512,256,512c68.38,0,132.668-26.629,181.019-74.98C485.37,388.668,512,324.38,512,256z M471.909,343.53 c-19.928-18.858-45.447-32.163-73.256-41.424c1.522-15.065,2.31-30.482,2.31-46.11c0-15.627-0.788-31.041-2.31-46.105 c27.808-9.262,53.326-22.568,73.253-41.428c11.004,27.041,17.084,56.59,17.084,87.537 C488.989,286.944,482.91,316.491,471.909,343.53z M134.044,255.997c0-13.405,0.605-26.63,1.778-39.577 c36.192,9.092,74.607,12.428,108.671,13.017v53.127c-34.062,0.589-72.477,3.926-108.671,13.015 C134.649,282.631,134.044,269.404,134.044,255.997z M244.492,487.923c-27.028-4.988-52.52-27.467-72.765-64.557 c-0.366-0.67-0.72-1.354-1.082-2.031c23.512-16.669,48.395-26.35,73.846-28.595V487.923z M267.503,392.742 c25.452,2.244,50.336,11.923,73.846,28.593c-0.361,0.678-0.717,1.362-1.083,2.033c-20.244,37.088-45.737,59.569-72.764,64.557 L267.503,392.742L267.503,392.742z M267.503,24.069c27.027,4.988,52.52,27.469,72.764,64.557c0.366,0.67,0.72,1.353,1.082,2.03 c-23.508,16.669-48.391,26.35-73.845,28.593L267.503,24.069L267.503,24.069z M244.492,119.248 c-25.452-2.245-50.336-11.927-73.844-28.596c0.36-0.675,0.715-1.358,1.079-2.026c20.245-37.088,45.737-59.569,72.765-64.557V119.248 z M267.503,142.33c29.093-2.161,57.341-12.516,83.846-30.581c10.24,24.369,17.697,51.963,22.064,81.453 c-30.339,7.986-65.981,12.485-105.91,13.207V142.33L267.503,142.33z M359.606,76.051c-8.943-16.111-18.913-29.839-29.674-41.011 c17.006,5.704,33.138,13.326,48.15,22.598C372.056,64.299,365.89,70.433,359.606,76.051z M152.391,76.048 c-6.283-5.617-12.448-11.75-18.472-18.408c15.009-9.271,31.139-16.891,48.142-22.596C171.3,46.213,161.333,59.94,152.391,76.048z M244.492,142.33v64.079c-39.929-0.723-75.572-5.221-105.912-13.208c4.368-29.491,11.824-57.085,22.064-81.454 C187.152,129.813,215.399,140.168,244.492,142.33z M244.492,305.59v64.069c-29.091,2.162-57.339,12.518-83.847,30.583 c-10.239-24.368-17.696-51.958-22.063-81.446C168.921,310.81,204.564,306.313,244.492,305.59z M152.394,435.933 c8.943,16.109,18.905,29.851,29.665,41.024c-17.008-5.707-33.142-13.329-48.154-22.604 C139.936,447.689,146.105,441.553,152.394,435.933z M359.601,435.929c6.29,5.622,12.462,11.759,18.492,18.424 c-15.015,9.276-31.15,16.899-48.161,22.606C340.694,465.785,350.658,452.041,359.601,435.929z M267.503,369.658v-64.069 c39.928,0.723,75.57,5.22,105.909,13.205c-4.368,29.488-11.823,57.078-22.062,81.445 C324.842,382.175,296.594,371.82,267.503,369.658z M267.503,282.564v-53.127c34.062-0.588,72.477-3.926,108.669-13.016 c1.172,12.946,1.778,26.171,1.778,39.576c0,13.408-0.605,26.633-1.778,39.582C339.979,286.489,301.566,283.152,267.503,282.564z M461.504,146.317c-0.075,0.077-0.156,0.144-0.23,0.223c-15.45,16.585-37.696,29.965-65.643,39.852 c-5.066-32.301-13.662-62.5-25.437-89.027c9.267-7.87,18.272-16.743,26.983-26.577C423.646,91.013,445.669,116.767,461.504,146.317z M114.821,70.789c8.71,9.833,17.715,18.705,26.98,26.573c-11.776,26.527-20.372,56.726-25.438,89.028 c-27.946-9.887-50.19-23.266-65.638-39.851c-0.074-0.079-0.154-0.146-0.229-0.222C66.331,116.767,88.354,91.014,114.821,70.789z M40.095,168.463c19.925,18.859,45.443,32.164,73.248,41.426c-1.522,15.064-2.31,30.48-2.31,46.106 c0,15.629,0.788,31.046,2.31,46.112c-27.807,9.261-53.325,22.565-73.252,41.421C29.09,316.491,23.011,286.944,23.011,256 C23.011,225.053,29.091,195.505,40.095,168.463z M50.491,365.675c0.076-0.077,0.158-0.145,0.232-0.226 c15.45-16.582,37.695-29.958,65.641-39.844c5.066,32.297,13.662,62.494,25.434,89.019c-9.268,7.87-18.277,16.743-26.989,26.577 C88.345,420.977,66.325,395.224,50.491,365.675z M397.189,441.202c-8.714-9.835-17.723-18.709-26.992-26.58 c11.774-26.525,20.368-56.72,25.433-89.018c27.947,9.884,50.194,23.262,65.645,39.845c0.075,0.081,0.156,0.147,0.234,0.226 C445.675,395.225,423.654,420.978,397.189,441.202z"
                  ></path>
                </g></svg
              >
            </a>
          </div>
        </div>
      </div>
      <h6
        class="text-2xl font-bold m-5 mt-10 bg-slate-400 text-black rounded uppercase"
      >
        Mon projet final
      </h6>
      <div class="flex justify-center gap-96">
        <div>
          <div>
            <div>PLATEFORME TICKETING</div>
          </div>
          <div>
            <div>
              Application client-serveur organisée en couche • 2 semaines (5 au 16 Aout 2024)
            </div>
            <div>
              <p>
                Dévéloppé en Php Symfony, TailwindCSS pour l'UI avec un serveur de gestion de base de données relationnelle
                MySQL.
              </p>
              <p>
                Mise en production avec une démarches DevOps CI/CD en local (en utilisant DockerCompose) et avec GitHub Actions pour valider
                les tests unitaires et Jenkins pour le déploiement.
              </p>
              <p>
                L'application web est une solution de ticketing interne entre
                différents pôles d'une entreprise.
              </p>
              <p>Ce projet a été utilisé pour l'EPCF1 et pour l'examen final en se basant sur le réferenciel d'évaluation</p>
            </div>
          </div>
          <div class="flex justify-center gap-12">
            <div><a href="REV.pdf" class="underline color-blue-500" target="_blank">Référenciel d'évaluation</a></div>
            <div><a href="https://github.com/SteveHoareau18/Ticketing" class="underline color-blue-500" target="_blank">CODE SOURCE</a></div>
            <div><a href="PLATEFORME TICKETING.pdf" class="underline color-blue-500" target="_blank">PDF</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
    <button
      class="rounded-2xl bg-blue-500 text-white font-bold uppercase p-4"
      on:click={() => (window.location.href = "/")}>Retour à l'accueil</button
    >
    <div class="h-10"></div>
  </div>
  <Footer></Footer>
</main>
