import { defineStore } from 'pinia'

export const useActiveSectionStore = defineStore('activeSection', {
  state: () => ({
    activeSection: 'home' // 初始值
  }),
  actions: {
    setActiveSection(section) {
      this.activeSection = section
    }
  }
})

// export const useActiveSectionStore = defineStore('activeSection', () => {
//   const activeSection = ref('home')
//   const setActiveSection = (section) => {
//     activeSection.value = section
//   }
//   return {
//     activeSection,
//     setActiveSection
//   }
// })
