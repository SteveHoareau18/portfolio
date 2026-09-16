<template>
  <div class="pdf-slide-viewer flex flex-col gap-3 w-full bg-slate-900 text-white rounded-xl p-3 sm:p-4 shadow-inner" ref="viewerContainer">
    <!-- Barre de contrôle de la diapositive -->
    <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-700/80 text-xs sm:text-sm">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          Support de présentation
        </span>
        <span v-if="totalPages > 0" class="text-slate-300 font-medium">
          Diapositive <strong>{{ currentPage }}</strong> / {{ totalPages }}
        </span>
      </div>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="prevSlide"
          :disabled="currentPage <= 1 || isLoading"
          aria-label="Diapositive précédente"
          class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
        >
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="hidden sm:inline">Précédent</span>
        </button>

        <button
          type="button"
          @click="nextSlide"
          :disabled="currentPage >= totalPages || isLoading"
          aria-label="Diapositive suivante"
          class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
        >
          <span class="hidden sm:inline">Suivant</span>
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          type="button"
          @click="toggleFullscreen"
          aria-label="Basculer le plein écran"
          title="Plein écran"
          class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <svg v-if="!isFullscreen" aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <svg v-else aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <a
          :href="downloadUrl || pdfUrl"
          download="Démo-BC03_ Support de présentation Oral_HOAREAU Steve.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Télécharger le PDF"
          aria-label="Télécharger le fichier PDF"
          class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Zone d'affichage de la diapositive -->
    <div class="relative flex items-center justify-center min-h-[260px] sm:min-h-[380px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
      <!-- Loading spinner -->
      <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950/80 z-10 backdrop-blur-xs">
        <div class="w-8 h-8 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-xs text-slate-400">Chargement de la diapositive...</span>
      </div>

      <!-- Error message -->
      <div v-if="errorMessage" class="p-6 text-center text-red-300 flex flex-col items-center gap-3">
        <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p class="text-xs sm:text-sm font-medium">{{ errorMessage }}</p>
        <a :href="downloadUrl || pdfUrl" target="_blank" class="text-xs underline text-blue-400 hover:text-blue-300">
          Ouvrir / Télécharger le PDF directement
        </a>
      </div>

      <!-- Canvas de la diapositive -->
      <canvas
        ref="canvasRef"
        class="max-w-full h-auto object-contain mx-auto shadow-2xl transition-transform"
        :class="{ 'opacity-50': isLoading }"
      ></canvas>

      <!-- Navigation overlay cliquable (gauche / droite) -->
      <div
        v-if="currentPage > 1"
        @click="prevSlide"
        title="Diapositive précédente"
        class="absolute left-0 inset-y-0 w-12 sm:w-16 flex items-center justify-start pl-2 cursor-pointer group hover:bg-black/20 transition-colors"
      >
        <span class="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
          ◀
        </span>
      </div>
      <div
        v-if="currentPage < totalPages"
        @click="nextSlide"
        title="Diapositive suivante"
        class="absolute right-0 inset-y-0 w-12 sm:w-16 flex items-center justify-end pr-2 cursor-pointer group hover:bg-black/20 transition-colors"
      >
        <span class="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
          ▶
        </span>
      </div>
    </div>

    <!-- Mini barre de progression des diapositives -->
    <div v-if="totalPages > 1" class="flex items-center gap-1 px-1 overflow-x-auto py-1">
      <button
        v-for="slideNum in totalPages"
        :key="slideNum"
        @click="goToSlide(slideNum)"
        :aria-label="'Aller à la diapositive ' + slideNum"
        :class="[
          'h-1.5 rounded-full transition-all cursor-pointer',
          slideNum === currentPage ? 'bg-blue-400 w-6' : 'bg-slate-700 hover:bg-slate-500 w-2'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

// Polyfills pour compatibilité universelle des navigateurs
if (typeof Promise.withResolvers !== 'function') {
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

if (typeof Promise.try !== 'function') {
  Promise.try = function (fn, ...args) {
    return new Promise((resolve) => {
      resolve(fn(...args));
    });
  };
}

import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  },
  downloadUrl: {
    type: String,
    default: ''
  },
  fallbackUrl: {
    type: String,
    default: ''
  }
});

const viewerContainer = ref(null);
const canvasRef = ref(null);
const currentPage = ref(1);
const totalPages = ref(0);
const isLoading = ref(true);
const errorMessage = ref('');
const isFullscreen = ref(false);

let pdfDoc = null;
let currentRenderTask = null;

const loadPdf = async () => {
  if (!props.pdfUrl) return;
  isLoading.value = true;
  errorMessage.value = '';

  try {
    let buffer = null;
    const urlsToTry = [props.pdfUrl];
    if (props.fallbackUrl && !urlsToTry.includes(props.fallbackUrl)) {
      urlsToTry.push(props.fallbackUrl);
    }
    if (!urlsToTry.includes('/presentation-trajecto.pdf')) {
      urlsToTry.push('/presentation-trajecto.pdf');
    }

    let lastError = null;
    for (const url of urlsToTry) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          buffer = await response.arrayBuffer();
          break;
        }
      } catch (e) {
        lastError = e;
      }
    }

    if (!buffer) {
      throw new Error(lastError ? lastError.message : 'Fichier PDF introuvable sur le serveur.');
    }

    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(buffer)
    });

    pdfDoc = await loadingTask.promise;
    totalPages.value = pdfDoc.numPages;
    currentPage.value = 1;
    await nextTick();
    await renderCurrentPage();
  } catch (err) {
    console.error('Erreur chargement PDF:', err);
    errorMessage.value = `Impossible de charger le document PDF (${err?.message || 'erreur inconnue'}).`;
  } finally {
    isLoading.value = false;
  }
};

const renderCurrentPage = async () => {
  if (!pdfDoc || !canvasRef.value) return;

  if (currentRenderTask) {
    try {
      currentRenderTask.cancel();
    } catch {
      // Ignorer
    }
    currentRenderTask = null;
  }

  try {
    isLoading.value = true;
    const page = await pdfDoc.getPage(currentPage.value);

    const canvas = canvasRef.value;
    const context = canvas.getContext('2d');

    const unscaledViewport = page.getViewport({ scale: 1 });
    const containerWidth = viewerContainer.value?.clientWidth ? viewerContainer.value.clientWidth - 32 : 720;
    const dpr = window.devicePixelRatio || 1;
    const targetScale = (containerWidth / unscaledViewport.width) * dpr;
    const scale = Math.max(1, Math.min(2.5, targetScale));
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = `${viewport.width / dpr}px`;
    canvas.style.height = `${viewport.height / dpr}px`;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    currentRenderTask = page.render(renderContext);
    await currentRenderTask.promise;
  } catch (err) {
    if (err?.name !== 'RenderingCancelledException') {
      console.error('Erreur rendu de la diapositive:', err);
    }
  } finally {
    isLoading.value = false;
  }
};

const prevSlide = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    renderCurrentPage();
  }
};

const nextSlide = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    renderCurrentPage();
  }
};

const goToSlide = (num) => {
  if (num >= 1 && num <= totalPages.value && num !== currentPage.value) {
    currentPage.value = num;
    renderCurrentPage();
  }
};

const toggleFullscreen = () => {
  if (!viewerContainer.value) return;
  if (!document.fullscreenElement) {
    viewerContainer.value.requestFullscreen?.().then(() => {
      isFullscreen.value = true;
      setTimeout(renderCurrentPage, 100);
    });
  } else {
    document.exitFullscreen?.().then(() => {
      isFullscreen.value = false;
      setTimeout(renderCurrentPage, 100);
    });
  }
};

const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
};

const handleResize = () => {
  renderCurrentPage();
};

onMounted(() => {
  setTimeout(() => {
    loadPdf();
  }, 50);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('resize', handleResize);
  if (currentRenderTask) {
    try {
      currentRenderTask.cancel();
    } catch {
      // Ignorer
    }
  }
});

watch(() => props.pdfUrl, () => {
  loadPdf();
});
</script>

<style scoped>
:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020617;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
}
</style>
