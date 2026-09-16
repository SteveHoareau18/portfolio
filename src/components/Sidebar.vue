<template>
  <aside
    id="sidebar"
    aria-label="Profil et navigation"
    :class="[
      'fixed lg:sticky top-0 left-0 h-screen z-40 transition-transform duration-300 ease-in-out w-full sm:w-[380px] lg:w-[380px] lg:shrink-0 overflow-y-auto',
      'flex flex-col gap-6 lg:gap-8 p-6 lg:p-8 bg-[var(--french-blue)] text-white',
      isOpen
        ? 'translate-x-0 shadow-2xl'
        : '-translate-x-full lg:translate-x-0 lg:shadow-none',
    ]"
  >
    <!-- Bouton fermeture mobile -->
    <div class="flex items-center justify-end lg:hidden -mb-2">
      <button
        @click="$emit('close')"
        class="w-10 h-10 flex items-center justify-center text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Fermer le menu de navigation"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="text-center">
      <div
        class="w-28 h-28 lg:w-32 lg:h-32 mx-auto mb-2 rounded-full overflow-hidden border-4 border-[var(--space-indigo)] shadow-xl"
      >
        <img
          :src="photoSteve"
          alt="Portrait de Steve HOAREAU"
          class="w-full h-full object-cover"
        />
      </div>
      <h1 class="text-2xl font-bold mb-1 text-white">Steve HOAREAU</h1>
      <p class="text-sm font-semibold text-[var(--alice-blue)] mb-1 opacity-95">
        Assistant Chef de Projet IT & Développeur
      </p>
      <p class="text-sm text-[var(--alice-blue)] opacity-80 mb-2">
        24 ans • Montpellier, France
      </p>
      <div
        class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 rounded-full text-xs font-semibold shadow-sm"
      >
        <span
          class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
          aria-hidden="true"
        ></span>
        Disponible dès Novembre 2026
      </div>
    </div>

    <!-- Actions & Links -->
    <div class="flex flex-col gap-3">
      <a
        href="/CV_STEVE_HOAREAU.pdf"
        download="CV_STEVE_HOAREAU.pdf"
        aria-label="Télécharger le CV de Steve HOAREAU au format PDF"
        class="w-full py-2.5 px-4 rounded-xl bg-[var(--space-indigo)] hover:bg-[#0f1a3e] text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg border border-white/20"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Télécharger mon CV
      </a>
      <div class="grid grid-cols-2 gap-3">
        <button
          type="button"
          @click="isReposModalOpen = true"
          aria-haspopup="dialog"
          aria-label="Ouvrir la liste des dépôts de code"
          class="py-2.5 px-4 rounded-xl bg-transparent hover:bg-[var(--space-indigo)] text-white font-medium border border-white/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
          Dépôts
        </button>
        <a
          href="https://www.linkedin.com/in/steve-hoareau"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Steve HOAREAU (nouvel onglet)"
          class="py-2.5 px-4 rounded-xl bg-[#0077b5] hover:bg-[#005e8e] text-white border border-[#005e8e] font-medium flex items-center justify-center gap-2 transition-all"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>

    <nav class="flex flex-col gap-2 mt-2" aria-label="Menu Principal">
      <a
        href="#portfolio"
        @click="$emit('close')"
        :aria-current="activeSection === 'portfolio' ? 'page' : undefined"
        :class="[
          'px-5 py-3 rounded-xl no-underline font-medium transition-all duration-300',
          activeSection === 'portfolio'
            ? 'bg-[var(--space-indigo)] border-l-4 border-white text-white font-bold'
            : 'text-[var(--alice-blue)] hover:bg-[var(--space-indigo)] hover:text-white opacity-90',
        ]"
        >Portfolio</a
      >
      <a
        href="#technologies"
        @click="$emit('close')"
        :aria-current="activeSection === 'technologies' ? 'page' : undefined"
        :class="[
          'px-5 py-3 rounded-xl no-underline font-medium transition-all duration-300',
          activeSection === 'technologies'
            ? 'bg-[var(--space-indigo)] border-l-4 border-white text-white font-bold'
            : 'text-[var(--alice-blue)] hover:bg-[var(--space-indigo)] hover:text-white opacity-90',
        ]"
        >Technologies</a
      >
      <a
        href="#formations-experiences"
        @click="$emit('close')"
        :aria-current="
          activeSection === 'formations-experiences' ? 'page' : undefined
        "
        :class="[
          'px-5 py-3 rounded-xl no-underline font-medium transition-all duration-300',
          activeSection === 'formations-experiences'
            ? 'bg-[var(--space-indigo)] border-l-4 border-white text-white font-bold'
            : 'text-[var(--alice-blue)] hover:bg-[var(--space-indigo)] hover:text-white opacity-90',
        ]"
        >Formations & Expériences</a
      >
    </nav>

    <div class="mb-8 lg:mb-0">
      <h2
        class="text-base font-semibold mb-3 text-white uppercase tracking-wider opacity-90"
      >
        Soft Skills
      </h2>
      <div class="grid grid-cols-2 gap-2.5">
        <div
          class="p-2.5 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex items-center gap-2 transition-all shadow-sm hover:border-white/40"
        >
          <span aria-hidden="true" class="text-base">🤝</span>
          <span class="font-medium text-white text-xs leading-tight"
            >Esprit d’équipe</span
          >
        </div>
        <div
          class="p-2.5 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex items-center gap-2 transition-all shadow-sm hover:border-white/40"
        >
          <span aria-hidden="true" class="text-base">🚀</span>
          <span class="font-medium text-white text-xs leading-tight"
            >Autonomie</span
          >
        </div>
        <div
          class="p-2.5 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex items-center gap-2 transition-all shadow-sm hover:border-white/40"
        >
          <span aria-hidden="true" class="text-base">💡</span>
          <span class="font-medium text-white text-xs leading-tight"
            >Force de proposition</span
          >
        </div>
        <div
          class="p-2.5 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex items-center gap-2 transition-all shadow-sm hover:border-white/40"
        >
          <span aria-hidden="true" class="text-base">🛡️</span>
          <span class="font-medium text-white text-xs leading-tight"
            >Sens des responsabilités</span
          >
        </div>
        <div
          class="col-span-2 p-3 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex flex-col gap-1 transition-all shadow-sm hover:border-white/40"
        >
          <div class="flex items-center gap-2">
            <span aria-hidden="true" class="text-base">👨‍🏫</span>
            <span class="font-medium text-white text-xs leading-tight"
              >Capacité pédagogique</span
            >
          </div>
          <span class="text-xs text-[var(--alice-blue)] pl-7 opacity-90"
            >Animation d’ateliers & transmission</span
          >
        </div>
        <div
          class="col-span-2 p-2.5 bg-[var(--space-indigo)]/80 rounded-xl border border-white/20 flex items-center gap-2 transition-all shadow-sm hover:border-white/40"
        >
          <span aria-hidden="true" class="text-base">🔍</span>
          <span class="font-medium text-white text-xs leading-tight"
            >Curiosité & Rigueur</span
          >
        </div>
      </div>
    </div>
  </aside>

  <!-- Overlay for mobile/tablet when sidebar is open -->
  <div
    v-if="isOpen"
    @click="$emit('close')"
    aria-hidden="true"
    class="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
  ></div>

  <!-- Pop-up Dépôts (GitHub / GitLab) -->
  <Teleport to="body">
    <div
      v-if="isReposModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="repos-modal-title"
      @click.self="isReposModalOpen = false"
    >
      <div
        class="bg-white text-[var(--carbon-black)] rounded-2xl shadow-2xl border border-[var(--dust-grey)] w-full max-w-sm sm:max-w-md p-6 relative flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150"
      >
        <!-- En-tête de la modale -->
        <div class="flex items-center justify-between pb-3 border-b border-gray-100">
          <div class="flex items-center gap-2.5">
            <div
              class="w-9 h-9 rounded-xl bg-[var(--french-blue)]/10 text-[var(--french-blue)] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </div>
            <div>
              <h3
                id="repos-modal-title"
                class="text-lg font-bold text-[var(--space-indigo)] leading-snug"
              >
                Dépôts de code
              </h3>
              <p class="text-xs text-gray-500">Accéder aux plateformes de code source</p>
            </div>
          </div>
          <button
            type="button"
            @click="isReposModalOpen = false"
            class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Fermer la boîte de dialogue"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- 3 Boutons demandés -->
        <div class="flex flex-col gap-3">
          <!-- 1. Github -->
          <a
            href="https://github.com/SteveHoareau18"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 px-4 rounded-xl bg-[#24292e] hover:bg-[#1b1f23] text-white font-medium flex items-center justify-between transition-colors shadow-sm group"
          >
            <div class="flex items-center gap-3">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
              <div class="text-left leading-tight">
                <span class="block text-sm font-bold">Github</span>
                <span class="block text-xs text-gray-300 font-normal">github.com/SteveHoareau18</span>
              </div>
            </div>
            <svg
              class="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <!-- 2. Gitlab self-host -->
          <a
            href="https://gitlab.stevehoareau.fr/SteveHoareauYnov"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 px-4 rounded-xl bg-[#e24329] hover:bg-[#d9381e] text-white font-medium flex items-center justify-between transition-colors shadow-sm group"
          >
            <div class="flex items-center gap-3">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.44.44 0 0 0-.23 0 .42.42 0 0 0-.17.15.4.4 0 0 0-.08.24L16.2 9H7.8L6.17 3.39a.4.4 0 0 0-.08-.24.42.42 0 0 0-.17-.15.44.44 0 0 0-.23 0 .38.38 0 0 0-.22.11.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
                />
              </svg>
              <div class="text-left leading-tight">
                <span class="block text-sm font-bold">Gitlab self-host</span>
                <span class="block text-xs text-orange-100 font-normal">gitlab.stevehoareau.fr/SteveHoareauYnov</span>
              </div>
            </div>
            <svg
              class="w-4 h-4 text-orange-200 group-hover:translate-x-0.5 transition-transform shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <!-- 3. Fermer -->
          <button
            type="button"
            @click="isReposModalOpen = false"
            class="w-full mt-1 py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors cursor-pointer text-center"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import photoSteve from "../assets/photo-steve.png";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const isReposModalOpen = ref(false);
const activeSection = ref("portfolio");

const checkActiveSection = () => {
  const sections = ["portfolio", "technologies", "formations-experiences"];
  let current = "portfolio";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) {
      current = id;
    }
  }
  activeSection.value = current;
};

const handleKeydown = (e) => {
  if (e.key === "Escape") {
    if (isReposModalOpen.value) {
      isReposModalOpen.value = false;
    } else if (props.isOpen) {
      emit("close");
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkActiveSection);
  window.addEventListener("keydown", handleKeydown);
  checkActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkActiveSection);
  window.removeEventListener("keydown", handleKeydown);
});
</script>
