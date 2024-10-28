<template>
  <div :class="['overlay', { show: overlayStore.isOverlayShow }]"></div>
</template>

<script setup>
  import { useOverlayStore } from '~/stores/overlayStore.js'
  const overlayStore = useOverlayStore()
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    &.show {
      visibility: visible;
      opacity: 0.4;
    }
  }
</style>
