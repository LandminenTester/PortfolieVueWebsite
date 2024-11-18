<script setup lang="ts">
const skills = {
  frontend: [
    { name: 'Vue.js (Aktiver Lernprozess)', level: 45 },
    { name: 'React Native (Zu lange her)', level: 25 },
    { name: 'TypeScript (Aktiver Lernprozess)', level: 60 },
    { name: 'Tailwind CSS (Aktiver Lernprozess)', level: 45 },
    { name: 'HTML', level: 55 },
    { name: 'CSS', level: 50 },
  ],
  backend: [
    { name: 'Node.js (Nutzung für Projekte)', level: 40 },
    { name: 'MariaDB', level: 80 },
    { name: 'MongoDB (Aktiver Lernprozess)', level: 60 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'YouTrack', level: 60 },
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
            <div class="flex justify-between mb-1">
              <span>{{ skill.name }}</span>
              <span class="text-lime-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-zinc-800 rounded-full h-2">
              <div class="bg-lime-500 h-2 rounded-full" 
                   :style="{ width: `${skill.level}%` }">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="bg-zinc-900 p-6 rounded-lg">
        <h3 class="text-2xl font-bold mb-6">Backend</h3>
        <div class="space-y-4">
          <div v-for="skill in skills.backend" :key="skill.name">
            <div class="flex justify-between mb-1">
              <span>{{ skill.name }}</span>
              <span class="text-lime-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-zinc-800 rounded-full h-2">
              <div class="bg-lime-500 h-2 rounded-full" 
                   :style="{ width: `${skill.level}%` }">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools -->
      <div class="bg-zinc-900 p-6 rounded-lg">
        <h3 class="text-2xl font-bold mb-6">Tools & Software</h3>
        <div class="space-y-4">
          <div v-for="skill in skills.tools" :key="skill.name">
            <div class="flex justify-between mb-1">
              <span>{{ skill.name }}</span>
              <span class="text-lime-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-zinc-800 rounded-full h-2">
              <div class="bg-lime-500 h-2 rounded-full" 
                   :style="{ width: `${skill.level}%` }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 