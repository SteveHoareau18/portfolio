<template>
  <div class="layout min-h-screen relative w-full flex flex-col lg:flex-row bg-[var(--color-bg-main)]">
    <a href="#main-content" class="skip-link">Accéder au contenu principal</a>

    <!-- HEADER STICKY (mobile + tablet) -->
    <header
      class="header sticky lg:hidden top-0 left-0 right-0 h-16 bg-white z-20 flex items-center justify-between px-4 sm:px-6 border-b border-[var(--dust-grey)] shadow-sm">
      <div class="flex items-center gap-3">
        <div
          class="w-9 h-9 rounded-full bg-[var(--french-blue)] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0"
          aria-hidden="true">
          SH
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-[var(--space-indigo)] text-sm sm:text-base leading-tight">Steve HOAREAU</span>
          <span class="text-xs text-[var(--text-muted)] font-medium leading-tight">Assistant Chef de Projet IT & Dev Web FullStack</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="w-10 h-10 flex items-center justify-center text-[var(--space-indigo)] transition-transform rounded-lg hover:bg-gray-100"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          aria-controls="sidebar"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'">
          <svg v-if="!isMobileMenuOpen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>

    <!-- SIDEBAR -->
    <Sidebar :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />

    <!-- MAIN CONTENT -->
    <main id="main-content" tabindex="-1"
      class="main-content flex-1 p-5 sm:p-8 lg:p-12 max-w-[1400px] w-full mx-auto focus:outline-none">

      <!-- SECTION HERO / BIENVENUE -->
      <section id="portfolio" aria-label="Présentation et Projets" class="scroll-mt-24 lg:scroll-mt-12">
        <div class="mb-6">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--space-indigo)] tracking-tight">
            Bienvenue sur mon portfolio
          </h1>
        </div>

        <div class="glass p-6 sm:p-8 md:p-10 border-[var(--dust-grey)] bg-[#fdfdfd] shadow-sm mb-12">
          <div class="flex flex-col gap-4 text-left">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--french-blue)]/10 text-[var(--french-blue)] font-bold text-xs rounded-full">
                🎓 Mastère Dev Web FullStack (Ynov)
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-800 font-bold text-xs rounded-full">
                💼 Alternance URSSAF (2024–2026)
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-800 font-bold text-xs rounded-full">
                🚀 Disponible dès Novembre 2026
              </span>
            </div>

            <p class="text-base sm:text-lg text-[var(--carbon-black)] leading-relaxed font-normal">
              Actuellement <strong>Assistant Chef de Projet Développeur</strong> en alternance à l'URSSAF à Montpellier, j'allie expertise technique (Web FullStack & DevOps) et compétences en pilotage de projets IT (analyse des besoins, Power Apps, Power BI, acculturation IA et conduite du changement).
            </p>

            <blockquote class="border-l-4 border-[var(--french-blue)] pl-4 py-1 italic text-sm sm:text-base text-[var(--text-muted)]">
              « Mon objectif professionnel est d’intégrer une équipe de gestion de projet IT pour optimiser la mise en œuvre de solutions numériques, de l'analyse des besoins utilisateurs jusqu'à l'accompagnement du changement. »
            </blockquote>

            <!-- CTA visibles sur mobile sans devoir ouvrir le menu -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a href="/CV_STEVE_HOAREAU.pdf" download="CV_STEVE_HOAREAU.pdf"
                aria-label="Télécharger le CV de Steve HOAREAU au format PDF"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--french-blue)] hover:bg-[var(--space-indigo)] text-white text-sm font-semibold transition-colors shadow-sm">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Télécharger mon CV
              </a>
              <a href="mailto:steve.hoareau1@gmail.com"
                aria-label="Envoyer un email à Steve HOAREAU"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[var(--dust-grey)] hover:bg-gray-50 text-[var(--space-indigo)] text-sm font-semibold transition-colors shadow-sm">
                Me contacter
              </a>
            </div>
          </div>
        </div>

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[var(--space-indigo)] tracking-tight">
          Mes projets
        </h2>

        <!-- GRILLE RESPONSIVE SANS SCROLL HORIZONTAL FORCÉ -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          <article v-for="project in projects" :key="project.id"
            class="glass p-6 sm:p-8 flex flex-col gap-4 border-[var(--dust-grey)] bg-[#fdfdfd] text-left transition-shadow hover:shadow-md">
            <div class="flex items-center gap-4">
              <span
                class="text-3xl bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 shrink-0"
                aria-hidden="true">{{ project.icon }}</span>
              <h3 class="text-xl font-bold text-[var(--carbon-black)] leading-tight">{{ project.title }}</h3>
            </div>
            <p class="text-sm sm:text-base text-[var(--text-muted)] mt-1 flex-1 leading-relaxed">{{ project.description }}</p>
            <div class="flex items-center gap-3 mt-4 pt-2 border-t border-gray-100">
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                :aria-label="'Accéder à la démo en ligne de ' + project.title + ' (ouvre un nouvel onglet)'"
                class="flex-1 text-center bg-[var(--space-indigo)] text-white px-4 py-2.5 rounded-lg font-medium transition-colors hover:bg-[var(--french-blue)] shadow-sm text-sm">
                Voir le projet
              </a>
              <button v-if="project.info" @click="openModal(project)"
                :aria-label="'Afficher les détails et informations du projet ' + project.title"
                class="flex-1 bg-white text-[var(--space-indigo)] border border-[var(--space-indigo)] px-4 py-2.5 rounded-lg font-medium transition-colors hover:bg-[var(--alice-blue)] shadow-sm text-sm">
                Détails
              </button>
            </div>
          </article>
          
          <!-- Block "Projets à venir" -->
          <article class="glass p-6 sm:p-8 flex flex-col gap-4 border-[var(--dust-grey)] bg-[#fdfdfd] text-center justify-center items-center">
            <span class="text-3xl bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 mb-1" aria-hidden="true">🔮</span>
            <h3 class="text-xl font-bold text-[var(--carbon-black)]">D'autres projets à venir !</h3>
            <p class="text-sm sm:text-base text-[var(--text-muted)] flex-1 leading-relaxed">
              Consultez mon GitHub et mon GitLab pour découvrir la suite de mes travaux, architectures et futures contributions.
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full pt-2 border-t border-gray-100">
              <a href="https://github.com/stevehoareau18" target="_blank" rel="noopener noreferrer"
                aria-label="Consulter le profil GitHub de Steve HOAREAU (ouvre un nouvel onglet)"
                class="flex-1 flex items-center justify-center gap-2 text-center bg-[#24292e] text-white px-4 py-2.5 rounded-lg font-medium transition-colors hover:bg-black shadow-sm w-full text-sm">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              <!-- Bouton GitLab conforme WCAG AA (ratio >= 4.5:1 avec fond foncé) -->
              <a href="https://gitlab.stevehoareau.fr/SteveHoareauYnov" target="_blank" rel="noopener noreferrer"
                aria-label="Consulter le profil GitLab de Steve HOAREAU (ouvre un nouvel onglet)"
                class="flex-1 flex items-center justify-center gap-2 text-center bg-[#b83800] hover:bg-[#992e00] text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm w-full text-sm">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>
                GitLab
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- SECTION COMPÉTENCES TECHNIQUES (SANS SCROLL IMBRIQUÉ SUR MOBILE) -->
      <section id="technologies" aria-label="Compétences techniques" class="mt-16 mb-20 md:mb-24 scroll-mt-24 lg:scroll-mt-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[var(--space-indigo)] tracking-tight">
          Mes compétences techniques
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <div v-for="category in skills" :key="category.name"
            class="glass glass-hover p-6 flex flex-col gap-4 border-[var(--dust-grey)] bg-[#fdfdfd]">
            <div class="flex items-center gap-3">
              <span class="text-2xl" aria-hidden="true">{{ category.icon }}</span>
              <h3 class="font-bold text-lg text-[var(--carbon-black)]">{{ category.name }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in category.items" :key="tech" :class="[
                'px-3 py-1.5 text-xs md:text-sm font-semibold rounded-lg transition-colors cursor-default border shadow-sm flex items-center gap-1.5',
                'tech-tag', 'tech-tag--' + tech.toLowerCase().replace(/[^a-z0-9]/g, '')
              ]">
                <span aria-hidden="true" class="opacity-70 text-xs">●</span> {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION FORMATIONS & EXPÉRIENCES -->
      <div id="formations-experiences"
        class="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-16 mb-20 md:mb-24 scroll-mt-24 lg:scroll-mt-12">
        
        <section id="formations" aria-label="Formations" class="scroll-mt-24 lg:scroll-mt-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[var(--space-indigo)] tracking-tight">
            Mon parcours de formation
          </h2>
          <div class="flex flex-col gap-6 md:gap-8 p-1 sm:p-2">
            <div v-for="edu in formations" :key="edu.degree"
              class="relative pl-8 border-l-2 border-[var(--dust-grey)] hover:border-[var(--french-blue)]/50 transition-colors">
              <div
                class="absolute -left-[9px] top-1 w-4 h-4 bg-[var(--french-blue)] rounded-full shadow-md shadow-[var(--french-blue)]/30 border-2 border-white"
                aria-hidden="true">
              </div>
              <div class="glass p-6 border-[var(--dust-grey)] bg-[#fdfdfd]">
                <h3 class="text-xl font-bold mb-1 text-[var(--carbon-black)]">{{ edu.degree }}</h3>
                <p class="text-sm font-medium text-[var(--french-blue)] mb-3">{{ edu.school }}</p>
                <span
                  class="inline-block text-xs font-bold px-3 py-1 bg-white text-[var(--space-indigo)] rounded-md border border-[var(--dust-grey)] mb-3 shadow-sm">{{
                    edu.year }}</span>
                <p v-if="edu.description" class="text-sm leading-relaxed text-[var(--text-muted)]">{{ edu.description }}
                </p>
                <ul v-if="edu.bullets" class="mt-3 space-y-1.5 list-disc pl-5 text-sm text-[var(--text-muted)]">
                  <li v-for="bullet in edu.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="alternances" aria-label="Expériences professionnelles" class="scroll-mt-24 lg:scroll-mt-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[var(--space-indigo)] tracking-tight">
            Mes expériences professionnelles
          </h2>
          <div class="flex flex-col gap-6 md:gap-8 p-1 sm:p-2">
            <div v-for="work in alternances" :key="work.company"
              class="relative pl-8 border-l-2 border-[var(--dust-grey)] hover:border-[var(--french-blue)]/50 transition-colors">
              <div
                class="absolute -left-[9px] top-1 w-4 h-4 bg-[var(--space-indigo)] rounded-full shadow-md shadow-[var(--space-indigo)]/30 border-2 border-white"
                aria-hidden="true">
              </div>
              <div class="glass glass-hover p-6 border-[var(--dust-grey)] bg-[#fdfdfd]">
                <h3 class="text-xl font-bold mb-1 text-[var(--carbon-black)]">{{ work.position }}</h3>
                <p class="text-sm font-semibold text-[var(--french-blue)] mb-3 flex items-center gap-2">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ work.company }}
                </p>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    class="inline-block text-xs font-bold px-3 py-1 bg-[var(--alice-blue)] text-[var(--space-indigo)] rounded-md border border-[var(--dust-grey)] shadow-sm">{{
                      work.year }}</span>
                  <span
                    class="inline-block text-xs font-bold px-3 py-1 bg-[var(--alice-blue)] text-[var(--space-indigo)] rounded-md border border-[var(--dust-grey)] shadow-sm">{{
                      work.contract }}</span>
                </div>
                <p class="text-sm leading-relaxed text-[var(--text-muted)]">{{ work.description }}</p>
                <ul v-if="work.bullets" class="mt-3 space-y-1.5 list-disc pl-5 text-sm text-[var(--text-muted)]">
                  <li v-for="bullet in work.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer
        class="mt-20 pt-10 pb-10 border-t border-[var(--dust-grey)] flex flex-col items-center justify-center gap-4 text-sm text-[var(--text-muted)]">
        <div class="contact-footer flex items-center gap-2">
          <strong>Me contacter :</strong>
          <a href="mailto:steve.hoareau1@gmail.com"
            aria-label="Envoyer un email à Steve HOAREAU">steve.hoareau1@gmail.com</a>
        </div>
        <p>© 2026 Steve HOAREAU. Tous droits réservés.</p>
      </footer>
    </main>

    <!-- MODAL ACCESSIBLE AVEC ROLE DIALOG ET ARIA-MODAL -->
    <div v-if="selectedProject"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      @click.self="closeModal"
      @keydown.esc="closeModal">
      <div
        ref="modalRef"
        tabindex="-1"
        class="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 focus:outline-none">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 id="modal-project-title" class="text-xl font-bold text-[var(--carbon-black)]">{{ selectedProject.title }}</h3>
          <button @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-md hover:bg-gray-100"
            aria-label="Fermer la boîte de dialogue">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="p-6 overflow-y-auto">
          <p class="text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap">{{ selectedProject.info }}</p>
        </div>
        <div class="p-6 border-t border-gray-100 flex justify-end">
          <button @click="closeModal"
            class="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Sidebar from './components/Sidebar.vue'

const isMobileMenuOpen = ref(false)
const selectedProject = ref(null)
const modalRef = ref(null)
let lastFocusedElement = null

const openModal = (project) => {
  lastFocusedElement = document.activeElement
  selectedProject.value = project
  nextTick(() => {
    if (modalRef.value) {
      modalRef.value.focus()
    }
  })
}

const closeModal = () => {
  selectedProject.value = null
  nextTick(() => {
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus()
    }
  })
}

const projects = ref([
  {
    id: 1,
    title: 'Trajecto',
    description: 'Projet Trajecto - Application web de gestion de flotte et éco-mobilité',
    icon: '🚀',
    link: 'https://trajecto-dev.stevehoareau.fr/login?redirect=%2Fdashboard',
    info: 'Trajecto est un projet d\'application web.\n\nRéalisé en groupe au sein de Montpellier Ynov Campus, ce projet permet de gérer les déplacements utilisant des véhicules utilitaires, de piloter la flotte automobile et de déterminer l\'impact écologique.'
  },
  {
    id: 2,
    title: 'Atelier "Prompt\'Challenge"',
    description: 'Animation d\'un atelier d\'acculturation et de pratique du Prompt Engineering',
    icon: '💼',
    link: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7399341618916458497/',
    info: null
  }
])

const skills = [
  { name: 'Langages', items: ['PHP', 'JavaScript', 'Java', 'Python', 'SQL', 'Shell'], icon: '💻' },
  { name: 'Frameworks & Librairies', items: ['Symfony', 'Spring Boot', 'Vue.js', 'React', 'WordPress'], icon: '📦' },
  { name: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'Github Actions', 'Jenkins', 'ArgoCD', 'GitLab CI/CD', 'Prometheus', 'Grafana'], icon: '⚙️' },
  { name: 'Data & Power Platform', items: ['Power BI', 'Power Apps', 'Power Automate'], icon: '📊' },
  { name: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MariaDB'], icon: '🗄️' },
  { name: 'Conception et gestion de projet', items: ['Figma', 'Méthodes Agiles', 'Miro', 'Trello'], icon: '☁️' }
]

const formations = [
  {
    degree: 'BAC+5 Expert en développement logiciel',
    school: 'Montpellier YNOV Campus',
    year: 'Octobre 2024 – Octobre 2026',
    description: 'Titre RNCP39583 en alternance, spécialité Développement Web FullStack'
  },
  {
    degree: 'BAC+4 Concepteur Développeur d\'Applications (CDA)',
    school: 'Centre de formation Expernet, Le Port, La Réunion',
    year: 'Diplômé en 2024',
    description: 'Titre RNCP37873 en alternance, axé sur :',
    bullets: [
      'Développement web et applicatif',
      'Conception d\'applications métiers',
      'Architecture logicielle'
    ]
  },
  {
    degree: 'BTS Services Informatiques aux Organisations (SIO option SLAM)',
    school: 'Lycée Bellepierre, La Réunion',
    year: 'Diplômé en 2022',
    description: '3ème place niveau académique – Solutions Logicielles et Applications Métiers'
  },
  {
    degree: 'Baccalauréat Scientifique (BAC SI spécialité ISN)',
    school: 'Lycée Roland Garros, La Réunion',
    year: 'Diplômé en 2020',
    description: 'Option Sciences de l\'Ingénieur et Informatique & Sciences du Numérique'
  }
]

const alternances = [
  {
    position: 'Alternant Assistant Chef de projet Développeur',
    company: 'URSSAF Languedoc-Roussillon, Montpellier',
    year: 'Octobre 2024 – Septembre 2026 (2 ans)',
    description: 'Participation au pilotage et au suivi de grands projets IT internes de la sécurité sociale.',
    contract: 'CDD Alternance',
    bullets: [
      'Gérer des projets informatiques de A à Z (cadrage, suivi, déploiement)',
      'Création et maintenance de tableaux de bord Power BI (+30% rapidité de reporting)',
      'Développement et maintenance d\'applications Power Apps déployées à 100+ utilisateurs',
      'Animation d\'ateliers d\'acculturation IA et Prompt Engineering',
      'Mise en place de workflows automatisés sous Power Automate'
    ]
  },
  {
    position: 'Alternant Concepteur Développeur d\'Applications',
    company: 'TEEO SAS, La Réunion',
    year: 'Novembre 2023 – Septembre 2024 (11 mois)',
    description: 'Développement d\'une application web de suivi énergétique et optimisation des processus.',
    contract: 'CDD Alternance',
    bullets: [
      'Développement d\'une application web avec Yii PHP, JavaScript et JQuery',
      'Conception et développement de la persistance des données',
      'Optimisation des temps de chargement et intégration d\'interfaces interactives'
    ]
  },
  {
    position: 'Alternant Concepteur Développeur d\'Applications',
    company: 'HDJ SAS, La Réunion',
    year: 'Novembre 2022 – Novembre 2023 (1 an)',
    description: 'Conception web et intégration de solutions ERP pour diverses entreprises.',
    contract: 'CDD Alternance',
    bullets: [
      'Conception et développement d\'applications web liées avec EBP via Symfony (API REST)',
      'Conception et déploiement de sites vitrines à l\'aide de WordPress',
      'Création de visibilité pour les entreprises avec Google Établissements et SEO'
    ]
  },
  {
    position: 'Développeur Applicatif (Stage)',
    company: 'SODIPARC, La Réunion',
    year: 'Janvier 2022 – Février 2022 (7 semaines)',
    description: 'Conception de solutions d\'analyse Big Data pour la gestion du stationnement.',
    contract: 'Stage',
    bullets: [
      'Scripts Python d\'automatisation et nettoyage de datasets volumineux (CSV)',
      'Génération de tableaux de bord décisionnels avec visualisation graphique des flux de stationnement'
    ]
  }
]
</script>
