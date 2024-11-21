<script setup lang="ts">
import { ref } from 'vue'
import SunsetVDetails from '../project-details/SunsetVDetails.vue'
import WildWildWestDetails from '../project-details/WildWildWestDetails.vue'
import LittleCreekDetails from '../project-details/LittleCreekDetails.vue'
import AltvDetails from '../project-details/AltvDetails.vue'
import TeachPoolDetails from '../project-details/TeachPoolDetails.vue'

// Add interface for project type
interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  detailComponent: any // or more specific component type if needed
}

const projects: Project[] = [
  {
    title: 'SunsetV - FiveM Projekt',
    description:
      'In zusammenarbeit mit zwei weiteren Personen ein FiveM Projekt aufgebaut und geleitet. Mit über 100 aktiven Spielern gleichzeitig online. Vorraning Support und Einstellung von Systemen.',
    image: '/sunsetv.png',
    technologies: ['Teambetreung', 'Support', 'Systemeinstellung'],
    detailComponent: SunsetVDetails
  },
  {
    title: 'Wild Wild West - RedM Projekt',
    description:
      'Nach Trennung von SunsetV ein RedM Projekt aufgebaut und geleitet. Begonnen mit der Entwicklung von Skripten in Lua und HTML für RedM. Nach 4 Monaten Laufzeit in Neuaufbau gegangen.',
    image: '/wildwildwest.png',
    technologies: ['LUA', 'HTML', 'CSS', 'JavaScript'],
    detailComponent: WildWildWestDetails
  },
  {
    title: 'Little Creek - RedM Projekt',
    description:
      'Über 6 Monate aktiv mit Entwicklung von Skripten in Lua und HTML für RedM verbraucht und über 60% der Systeme selber entwickelt und viele weitere auf Open Source basierend umgeschrieben und eingebunden in bestehende Systeme. Über 120 aktiven Spieler.',
    image: '/littlecreek.png',
    technologies: ['LUA', 'HTML', 'CSS', 'JavaScript'],
    detailComponent: LittleCreekDetails
  },
  {
    title: 'Little Creek - Alt:V Projekt',
    description:
      'Begonnen mit der Entwicklung eines kompletten Roleplay Frameworks in Typescript, Vue3, TailwindCSS auf dem Scaffold Framework Rebar. Aktuell noch in Entwicklung.',
    image: '/altv.png',
    technologies: ['Typescript', 'Vue3', 'TailwindCSS', 'Rebar', 'MongoDB', 'vite'],
    detailComponent: AltvDetails
  },
  {
    title: 'TeachPool - React Native App',
    description:
      'Als Abschlussprojekt für das Fachabitur eine React Native App entwickelt. Eine einfache App um schnell Nachhilfe Lehrer zu finden. Mit Registrierung und Login, Profilverwaltung,Profilbilder mit eigenem Upload, Umgebungssuche, Administrative Steuerung und Multifilter System von Lehrern.',
    image: '/teachpool.png',
    technologies: [
      'React Native',
      'Expo',
      'Firebase Authentication',
      'JavaScript',
      'FireBase Datenbank'
    ],
    detailComponent: TeachPoolDetails
  }
  // Weitere Projekte hier hinzufügen
]

const selectedProject = ref<Project | null>(null)
const scrollPosition = ref(0)

const showProjectDetail = (project: Project) => {
  scrollPosition.value = window.scrollY
  selectedProject.value = project
  setTimeout(() => {
    document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}

const goBack = () => {
  selectedProject.value = null
  setTimeout(() => {
    window.scrollTo({
      top: scrollPosition.value,
      behavior: 'smooth'
    })
  }, 100)
}
</script>

<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <div v-if="!selectedProject">
        <!-- Projects Grid View -->
        <h2 class="text-4xl font-bold text-lime-500 mb-1">Projekte</h2>
        <h3 class="text-lg font-bold text-zinc-700 mb-12">
          Klicke auf ein Projekt um mehr zu erfahren...
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in projects"
            :key="project.title"
            @click="showProjectDetail(project)"
            class="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
          >
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Detail View -->
      <div v-else class="animate-fadeIn">
        <div id="project-details" class="bg-black rounded-lg p-6">
          <component :is="selectedProject.detailComponent" />
          <button
            @click="goBack"
            class="flex items-center text-lime-500 hover:text-lime-400 text-center mx-auto pt-5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
