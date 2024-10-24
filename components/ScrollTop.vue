<template>
  <div id="scroll-top">
    <button type="button" class="btn" @click="scrollToTop">
      <span>Scroll Top</span>
    </button>
    <span class="scrollbar"></span>
  </div>
  <!-- <div id="scroll-top" :class="{ show: showScrollTop }">
    <button type="button" class="btn" @click="scrollToTop">
      <span>Scroll Top</span>
    </button>
    <span class="scrollbar"></span>
  </div> -->
</template>

<script setup>
  import { useActiveSectionStore } from '~/stores/useActiveSection.js'
  const activeSectionStore = useActiveSectionStore()
  // 使用 computed 函數來獲取 activeSection
  const activeSection = computed(() => activeSectionStore.activeSection)

  // 監控 activeSection 的變化
  const showScrollTop = ref(false)
  watch(activeSection, (newValue) => {
    showScrollTop.value = newValue === 'home' ? false : true
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 更新滾動位置
  const handleScroll = () => {
    // ProgressBar
    const bodyHeight = (document.body.scrollHeight - window.innerHeight) / 10 // 計算 body 的高度並減去視窗高度
    const scrollHeight = window.scrollY // 取得當前的滾動位置
    const percentage = ((scrollHeight / bodyHeight) * 100) / 10 // 計算卷軸進度百分比

    // 將結果應用到目標元素上
    const scrollbar = document.querySelector('.scrollbar')
    scrollbar.style.height = `${percentage}%`
  }

  onMounted(() => {
    // calculateHeight()
    window.addEventListener('scroll', handleScroll)
  })
  // 清理事件監聽器
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style lang="scss" scoped>
  #scroll-top {
    // opacity: 0;
    // visibility: hidden;
    position: fixed;
    width: 2px;
    height: 100px;
    top: 53%;
    left: 30px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.25);
    transition: $setTransition;
    z-index: 999;
    &.show {
      opacity: 1;
      visibility: visible;
    }
    button.btn {
      color: $primaryTextColor2;
      background: transparent;
      border: none;
      padding: 0;
      position: relative;
      transition: $setTransition;
      &:hover {
        cursor: pointer;
        color: #fff;
        text-shadow: 0 0 6px $primaryColor;
      }
      span {
        position: absolute;
        bottom: 24px;
        left: -10px;
        height: max-content;
        font-size: 12px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        writing-mode: vertical-rl;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 3px;
        text-shadow: 0 0 8px #000000;
        transform: rotate(-180deg);
      }
    }
    span.scrollbar {
      opacity: 1;
      position: relative;
      display: block;
      width: 2px;
      height: 0px;
      top: -18px;
      border-radius: 6px;
      // background: $primaryColor2;
      background: linear-gradient(to top, $primaryColor2, $primaryColor);
      z-index: 999;
      transition: $setTransition;
    }
  }
</style>
