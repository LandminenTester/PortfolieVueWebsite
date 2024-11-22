<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MainNavbar from './components/MainNavbar.vue'
import ArrowDown from './components/svg/ArrowDown.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'

const showNav = ref(false)
const gradientScale = ref(1)
const isHeaderVisible = ref(false)

const handleScroll = () => {
  showNav.value = window.scrollY > 100
  gradientScale.value = Math.max(0.5, 1 - (window.scrollY / window.innerHeight) * 0.8)
}

const handleHeaderIntersection = (entries: IntersectionObserverEntry[]) => {
  isHeaderVisible.value = entries[0].isIntersecting
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  const observer = new IntersectionObserver(handleHeaderIntersection, {
    threshold: 0.2
  })
  const header = document.querySelector('header')
  if (header) observer.observe(header)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-black min-h-screen w-full overflow-x-hidden">
    <!-- Hero Section -->
    <header class="h-screen flex flex-col items-center justify-center relative hero-gradient"
      :style="{ '--gradient-scale': gradientScale }"
    >
      <h1 class="text-7xl font-extrabold mb-4 text-white tracking-tight" :class="{ 'animate-title': isHeaderVisible }">
        <span class="inline-block">Land</span><span class="inline-block">minen</span><span class="inline-block text-lime-400">Tester</span>
      </h1>
      <h2 class="text-3xl font-light mb-12 text-lime-400 tracking-wide" :class="{ 'animate-subtitle': isHeaderVisible }">
        Zocker aus Leidenschaft der sein Weg in die Informatik gefunden hat
      </h2>
    </header>

    <!-- Navbar mit Transition -->
    <Transition name="fade">
      <MainNavbar v-show="showNav" class="fixed top-0 w-full z-50" />
    </Transition>

    <!-- Main Content -->
    <main class="bg-black text-white w-full">
      <div class="max-w-7xl mx-auto px-4">
        <!-- About Section -->
        <section 
          id="about" 
          class="min-h-screen py-20"
          v-intersection-observer="{ threshold: 0.2 }"
        >
          <AboutSection />
        </section>

        <!-- Experience Section -->
        <section 
          id="experience" 
          class="min-h-screen py-20"
          v-intersection-observer="{ threshold: 0.2 }"
        >
          <ExperienceSection />
        </section>

        <!-- Projects Section -->
        <section 
          id="projects" 
          class="min-h-screen py-20"
          v-intersection-observer="{ threshold: 0.2 }"
        >
          <ProjectsSection />
        </section>

        <!-- Skills Section -->
        <section 
          id="skills" 
          class="min-h-screen py-20"
          v-intersection-observer="{ threshold: 0.2 }"
        >
          <SkillsSection />
        </section>
        <section 
          id="impressum" 
          class="min-h-screen py-20"
          v-intersection-observer="{ threshold: 0.2 }"
        >
        <h2 class="text-3xl font-light mb-12 text-center text-lime-400 tracking-wide animate-subtitle opacity-0">
          Dies ist eine reine private Seite und es besteht keine Impressumspflicht.
        </h2>
        </section>
      </div>

    </main>
  </div>
</template>

<style>
/* Diese Styles müssen global sein (kein scoped) */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  background: black;
}

#app {
  width: 100%;
  overflow-x: hidden;
}
</style>

<style scoped lang="scss">
// Navbar Fade Animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Section Animations
.section-enter-active {
  transition: all 0.8s ease-out;
}

.section-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

// Scrollbar Styles
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #84cc16;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #65a30d;
}

.hero-gradient {
  background: radial-gradient(
    circle at center,
    rgba(153, 255, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.9) calc(50% * var(--gradient-scale)),
    black calc(100% * var(--gradient-scale))
  );
}

// Title and Subtitle Animations
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-title span {
  opacity: 0;
  transform: translateY(-20px);
  animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.5s; }
}

.animate-subtitle {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.8s forwards;
}
</style>
