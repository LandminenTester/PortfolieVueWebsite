<script setup lang="ts">
const projects = [
  {
    title: 'SunsetV - FiveM Projekt',
    description: 'In zusammenarbeit mit zwei weiteren Personen ein FiveM Projekt aufgebaut und geleitet. Mit über 100 aktiven Spielern gleichzeitig online. Vorraning Support und Einstellung von Systemen.',
    image: '/path/to/image1.jpg',
    technologies: ['Teambetreung', 'Support', 'Systemeinstellung'],
  },
  {
    title: 'Wild Wild West - RedM Projekt',
    description: 'Nach Trennung von SunsetV ein RedM Projekt aufgebaut und geleitet. Begonnen mit der Entwicklung von Skripten in Lua und HTML für RedM. Nach 4 Monaten Laufzeit in Neuaufbau gegangen.',
    image: '/path/to/image1.jpg',
    technologies: ['LUA', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Little Creek - RedM Projekt',
    description: 'Über 6 Monate aktiv mit Entwicklung von Skripten in Lua und HTML für RedM verbraucht und über 60% der Systeme selber entwickelt und viele weitere auf Open Source basierend umgeschrieben und eingebunden in bestehende Systeme. Über 120 aktiven Spieler.',
    image: '/path/to/image1.jpg',
    technologies: ['LUA', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Little Creek - AltV Projekt (Rebar)',
    description: 'Begonnen mit der Entwicklung eines kompletten Roleplay Frameworks in Typescript, Vue3, TailwindCSS auf dem Scaffold Framework Rebar. Aktuell noch in Entwicklung.',
    image: '/path/to/image1.jpg',
    technologies: ['Typescript', 'Vue3', 'TailwindCSS', 'Rebar'],
  },
  {
    title: 'Abschlussprojekt Fachabitur - React Native App',
    description: 'Für das Fachabitur eine React Native App entwickelt. Eine einfache App um schnell Nachhilfe Lehrer zu finden. Mit Registrierung und Login, Profilverwaltung,Profilbilder mit eigenem Upload, Umgebungssuche, Administrative Steuerung und Multifilter System von Lehrern.',
    image: '/path/to/image1.jpg',
    technologies: ['React Native', 'Expo', 'Firebase Authentication', 'JavaScript','FireBase Datenbank'],
  },
  // Weitere Projekte hier hinzufügen
]
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-lime-500 mb-8">Projekte</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div v-for="(project, index) in projects" 
           :key="index"
           class="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
        <div class="h-48 bg-lime-500/20">
          <!-- Projektbild hier -->
        </div>
        <div class="p-9">
          <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-400 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-5 py-3 bg-lime-500/20 text-lime-500 rounded-full text-sm">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 