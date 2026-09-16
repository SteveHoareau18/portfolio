<template>
  <article class="flex flex-col overflow-hidden h-full glass glass-hover bg-white border border-[var(--dust-grey)] group relative">
    <span v-if="category" class="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-[var(--dust-grey)] text-[var(--french-blue)] px-3 py-1 text-xs rounded-full font-bold z-30 shadow-sm opacity-90">
      {{ category }}
    </span>
    <div class="h-56 overflow-hidden relative border-b border-[var(--dust-grey)]/50">
      <div class="absolute inset-0 bg-[var(--french-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" aria-hidden="true"></div>
      <img :src="image" alt="" aria-hidden="true" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110">
    </div>
    <div class="p-6 md:p-8 flex flex-col flex-grow relative z-20 bg-white">
      <h3 class="text-xl md:text-2xl font-bold mb-3 text-[var(--carbon-black)] group-hover:text-[var(--french-blue)] transition-colors leading-tight">{{ title }}</h3>
      <p class="text-sm md:text-base text-[#555555] mb-6 line-clamp-3 leading-relaxed">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mb-8" aria-label="Technologies utilisées">
        <span v-for="tag in tags" :key="tag" class="text-xs px-3 py-1.5 bg-white text-[var(--french-blue)] border border-[var(--french-blue)] rounded-md font-semibold">{{ tag }}</span>
      </div>
      <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" :aria-label="'Explorer le projet ' + title + ' en détail'" class="mt-auto text-sm md:text-base font-bold text-[var(--french-blue)] flex items-center justify-between transition-all duration-300 hover:bg-[#ebf0fa] hover:text-[var(--space-indigo)] outline-none rounded-lg px-4 py-3 -ml-2">
        <span class="flex items-center gap-2">
          <svg v-if="link.includes('github.com')" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          {{ link.includes('github.com') ? 'Voir le code' : 'Démo en ligne' }}
        </span>
        <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  category: String,
  link: String
})
</script>
