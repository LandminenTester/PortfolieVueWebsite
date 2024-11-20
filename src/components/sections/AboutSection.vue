<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold text-lime-500 mb-8">Über mich</h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <p class="text-lg">
          Hi, ich bin Johannes – online besser bekannt als LandminenTester. Als leidenschaftlicher Zocker habe ich meinen Weg in die Welt der Informatik gefunden und meine Begeisterung für Technik und Entwicklung entdeckt.        </p>
        <p class="text-lg">
          Heute setze ich diese Leidenschaft in die Praxis um, indem ich Skripte und Plugins entwickle, vor allem für Plattformen wie RedM und AltV. Dabei kombiniere ich mein Gaming-Hobby mit meiner Berufung in der Informatik.        </p>
        <p class="text-lg">
          Aktuell befinde ich mich in der Ausbildung zum Fachinformatiker für Systemintegration und arbeite daran, meine Fähigkeiten stetig auszubauen. Mein Ziel: später in der Softwareentwicklung zu arbeiten.
        </p>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/landminentester" 
             target="_blank"
             class="px-4 py-2 bg-lime-500 text-black rounded hover:bg-lime-600 transition-colors">
            GitHub
          </a>
          <a href="https://twitch.tv/landminentester" 
             target="_blank"
             class="px-4 py-2 bg-lime-500 text-black rounded hover:bg-lime-600 transition-colors">
            Twitch
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
          <div class="w-full h-full bg-gradient-radial"></div>
        </div>
        <img 
          src="/Avatar_5.png" 
          alt="LandminenTester Avatar" 
          class="relative w-3/4 mx-auto"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(
    circle at center,
    rgba(132, 204, 22, 0.3) 0%,
    rgba(132, 204, 22, 0.05) 50%,
    transparent 100%
  );
}
</style> 