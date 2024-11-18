<script setup lang="ts">
import { ref } from 'vue'

const navItems = [
  { name: 'Über mich', href: '#about' },
  { name: 'Erfahrung', href: '#experience' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Skills', href: '#skills' }
]

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="bg-black/80 backdrop-blur-sm py-4 px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#" class="text-lime-500 text-xl font-bold">LandminenTester</a>
      
      <div class="flex gap-8">
        <a v-for="item in navItems" 
           :key="item.name"
           :href="item.href"
           @click="(e) => scrollToSection(e, item.href)"
           class="text-white hover:text-lime-500 transition-colors">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
