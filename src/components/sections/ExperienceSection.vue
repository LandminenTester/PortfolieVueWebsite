<script setup lang="ts">
const experiences = [
{
    title: 'Ausbildung zum Fachinformatiker für Systemintegration',
    company: 'Vorraussichtlich erfolgreich im Jahr 2025 abgeschlossen',
    period: '2022 - 2025',
    description: 'Ausbildung zum Fachinformatiker für Systemintegration nach dem neuen Ausbildungsrahmenplan.',
    technologies: ['Field Service', 'Azure', 'Active Directory', 'Git', 'Python', 'C#', 'Powershell']
  },
  {
    title: 'duales Bachlor Studium - KoSi (Informatik)',
    company: 'Nach dem 2. Fachsemester vorzeitig abgebrochen',
    period: '2021 - 2022',
    description: 'Durch verschiedene Faktoren (Corona Pandemie, Online Unterricht, Umzug, mangelndes Vorwissen durch Fachabitur) habe ich mich entschieden eine Ausbildung zu beginnen und später erneut ins Studium einzusteigen.',
    technologies: ['C++', 'Betriebssysteme', 'Algorithmen & Datenstrukturen', 'Rechnerarchitektur', 'Technische Informatik', 'IT Sicherheit']
  },
  {
    title: 'Zweijährige Fachoberschule - Schwerpunkt: Informatik',
    company: 'Fachabitur erfolgreich abgeschlossen mit 1,6',
    period: '2019 - 2021',
    description: 'Hessische Fachhochschulreife mit dem Schwerpunkt Informatik.',
    technologies: ['Netzwerktechnik', 'RaspberryPi', 'Java', 'SQL', 'Python','Linux','React Native']
  },
  {
    title: 'Ausbildung zum Fachinformatiker für Systemintegration',
    company: 'Nach einem Jahr abgebrochen aufgrund Problemen mit dem Betrieb',
    period: '2018 - 2019',
    description: 'Ausbildung zum Fachinformatiker für Systemintegration nach dem alten Ausbildungsrahmenplan.',
    technologies: ['Field Service', 'Jira & Confluence', 'Windows Server', 'Windows Client', 'Intune']
  },
  {
    title: 'Sonstige Erfahrungen',
    company: 'Einjähriges Praktikum und weiterarbeit in einem kleinen IT Betrieb',
    period: '2019 - 2021',
    description: 'Verschiedene Tätigkeiten im Vertrieb, Support und Werkstatt eines kleinen IT Betriebs mit Kundenkontakt.',
    technologies: ['Vor Ort Service', 'Reperaturen von Rechnern','Bereinigung','Backup Service', 'Verkauf', 'Fernwartung', 'Lagerhaltung mit ERP System']
  },
  {
    title: 'Sonstige Erfahrungen',
    company: 'Einzelunternehmer',
    period: '2022 - aktuell',
    description: 'Einzelunternehmer im Bereich der Entwicklung von LUA Skripten für RedM, Grafikdesign und Content Creation auf Twitch.',
    technologies: ['LUA', 'Photoshop', 'Social Media', 'HTML', 'CSS', 'JavaScript']
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold text-lime-500 mb-8">Erfahrung im IT Bereich</h2>
    <div class="space-y-12">
      <div v-for="(exp, index) in experiences" 
           :key="index"
           class="border-l-2 border-lime-500 pl-8 relative hover:translate-x-2 transition-transform">
        <div class="absolute w-3 h-3 bg-lime-500 rounded-full -left-[7px] top-2"></div>
        <h3 class="text-2xl font-bold">{{ exp.title }}</h3>
        <h4 class="text-lime-500">{{ exp.company }}</h4>
        <p class="text-gray-400">{{ exp.period }}</p>
        <p class="mt-2">{{ exp.description }}</p>
        <div class="flex gap-2 mt-3 flex-wrap">
          <span v-for="tech in exp.technologies" 
                :key="tech"
                class="px-3 py-1 bg-lime-500/20 text-lime-500 rounded-full text-sm">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template> 