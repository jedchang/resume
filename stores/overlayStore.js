import { defineStore } from 'pinia'

export const useOverlayStore = defineStore('overlay', {
  state: () => ({
    isOverlayShow: false
  }),
  actions: {
    showOverlay() {
      this.isOverlayShow = true
    },
    hideOverlay() {
      this.isOverlayShow = false
    }
  }
})
