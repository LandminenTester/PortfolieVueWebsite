<script setup lang="ts">
const skills = {
  frontend: [
    { 
      name: 'Vue.js (Aktiver Lernprozess)',
      description: 'Grundkenntnisse mit wachsender Erfahrung durch das aktuelle Alt:V Projekt'
    },
    { 
      name: 'React Native (Zu lange her)',
      description: 'Vollständige App entwickelt, aber nicht mehr aktiv genutzt seit 2021'
    },
    { 
      name: 'TypeScript (Aktiver Lernprozess)',
      description: 'Fortgeschrittene Kenntnisse mit wachsender Erfahrung durch das aktuelle Alt:V Projekt'
    },
    { 
      name: 'Tailwind CSS (Aktiver Lernprozess)',
      description: 'Standard-Framework für das aktuelle Alt:V Projekt'
    },
    { 
      name: 'HTML',
      description: 'Solide Kenntnisse durch verschiedene RedM Skripte oder eigene Webseiten'
    },
    { 
      name: 'CSS',
      description: 'Solide Kenntnisse durch verschiedene RedM Skripte oder eigene Webseiten'
    },
  ],
  backend: [
    { 
      name: 'Node.js (Nutzung für Projekte)',
      description: 'Immer wieder genutzt für verschiedene Projekte, aber nie tief in der Materie gewesen'
    },
    { 
      name: 'SQL',
      description: 'Bisher bis auf dem aktuellen Alt:V Projekt in jedem Projekt genutzt als Datenbank, aber auch in verschiedenen beruflichen Wegen genutzt'
    },
    { 
      name: 'MongoDB (Aktiver Lernprozess)',
      description: 'Gute wachsende Grundkenntnisse durch das aktuelle Alt:V Projekt'
    },
  ],
  tools: [
    { 
      name: 'Git',
      description: 'Vielzahl an Projekten über Git verwaltet und beruflich in Nutzung'
    },
    { 
      name: 'YouTrack',
      description: 'Nutzung im Alt:V Projekt, um im Team zu arbeiten und die Arbeit zu organisieren'
    },
  ]
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-lime-500 mb-8">Skills</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Frontend -->
      <div class="bg-zinc-900 p-6 rounded-lg">
        <h3 class="text-2xl font-bold mb-6">Frontend</h3>
        <div class="space-y-4">
          <div v-for="skill in skills.frontend" :key="skill.name">
            <div class="mb-1">
              <span>{{ skill.name }}</span>
            </div>
            <div class="text-sm text-gray-400">
              {{ skill.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="bg-zinc-900 p-6 rounded-lg">
        <h3 class="text-2xl font-bold mb-6">Backend</h3>
        <div class="space-y-4">
          <div v-for="skill in skills.backend" :key="skill.name">
            <div class="mb-1">
              <span>{{ skill.name }}</span>
            </div>
            <div class="text-sm text-gray-400">
              {{ skill.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- Tools -->
      <div class="bg-zinc-900 p-6 rounded-lg">
        <h3 class="text-2xl font-bold mb-6">Tools & Software</h3>
        <div class="space-y-4">
          <div v-for="skill in skills.tools" :key="skill.name">
            <div class="mb-1">
              <span>{{ skill.name }}</span>
            </div>
            <div class="text-sm text-gray-400">
              {{ skill.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 