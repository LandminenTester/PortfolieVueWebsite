<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Über mich', href: '#about' },
  { name: 'Erfahrung', href: '#experience' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Impressum', href: '#impressum' } 
]

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  element?.scrollIntoView({ behavior: 'smooth' })
  isMenuOpen.value = false // Menü nach Klick schließen
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (e: Event) => {
  const navbar = (e.target as HTMLElement).closest('nav')
  if (!navbar) {
    isMenuOpen.value = false
  }
}

// Event-Listener beim Mounting hinzufügen/entfernen
onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>
<template>
  <nav class="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-4 px-8 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#" class="text-lime-500 text-xl font-bold">LandminenTester</a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-8">
        <a v-for="item in navItems" 
           :key="item.name"
           :href="item.href"
           @click="(e) => scrollToSection(e, item.href)"
           class="text-white hover:text-lime-500 transition-colors">
          {{ item.name }}
        </a>
      </div>

      <!-- Mobile Menu -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation - mit Transition -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isMenuOpen" 
           class="md:hidden fixed inset-x-0 top-[3.75rem] bg-black/80 backdrop-blur-sm">
        <div class="flex flex-col items-center gap-4 py-6">
          <a v-for="item in navItems" 
             :key="item.name"
             :href="item.href"
             @click="(e) => scrollToSection(e, item.href)"
             class="text-white hover:text-lime-500 transition-colors text-lg">
            {{ item.name }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
