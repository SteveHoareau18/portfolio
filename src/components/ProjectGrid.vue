<template>
  <div class="w-full mt-8 lg:mt-0">
    <div class="flex flex-col justify-between items-start sm:flex-row sm:items-center mb-10 gap-4">
      <h2 class="text-3xl lg:text-4xl font-bold text-[var(--french-blue)]">Mes Projets</h2>
      <div class="hidden sm:flex text-sm text-[var(--space-indigo)] font-medium bg-white py-2 px-4 rounded-full border border-[var(--dust-grey)] shadow-sm">
        {{ projects.length }} projets
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-10">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([
  {
    id: 1,
    title: 'Plateforme TEEO',
    description: 'Développement d\'une application web de suivi énergétique sous PHP Yii pour accompagner les entreprises dans leur transition écologique.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    tags: ['PHP', 'Yii', 'Vue.js', 'PostgreSQL'],
    category: 'Professionnel',
    link: 'https://github.com/stevehoareau'
  },
  {
    id: 2,
    title: 'Solutions Web HDJ',
    description: 'Conception web et intégration d\'interfaces ERP connectées à EBP via des API REST sous environnements Symfony et WordPress.',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2940&auto=format&fit=crop',
    tags: ['Symfony', 'API REST', 'WordPress'],
    category: 'Professionnel',
    link: 'https://github.com/stevehoareau'
  },
  {
    id: 3,
    title: 'Analytique SODIPARC',
    description: 'Création d\'un tableau de bord décisionnel automatisé en Python permettant 100% de visibilité sur les flux de stationnement.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2940&auto=format&fit=crop',
    tags: ['Python', 'Data Viz', 'Pandas'],
    category: 'Professionnel',
    link: 'https://github.com/stevehoareau'
  },
  {
    id: 4,
    title: 'Eco-Connect',
    description: 'Une plateforme de réseautage durable pour les militants écologistes afin de partager des ressources et collaborer sur des initiatives locales.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=3013&auto=format&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    category: 'Scolaire',
    link: 'https://github.com/stevehoareau/eco-connect'
  },
  {
    id: 5,
    title: 'Concept : Dashboard Nexus',
    description: 'Tableau de bord d\'analyse en temps réel (maquette conceptuelle) pour IoT avec visualisations interactives.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3024&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'D3.js'],
    category: 'Concept'
  }
])
</script>
