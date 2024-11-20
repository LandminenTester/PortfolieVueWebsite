<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  project: any;
  onClose: () => void;
}>();
</script>

<template>
  <div v-if="isOpen" 
       class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-zinc-900 rounded-lg w-full h-full overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-lime-500">{{ project.title }}</h2>
          <button @click="onClose" 
                  class="text-gray-400 hover:text-white">
            <span class="text-2xl">&times;</span>
          </button>
        </div>
        <component :is="project.detailComponent" />
      </div>
    </div>
  </div>
</template> 