<template>
  <Overlay></Overlay>
  <div v-if="isLoading" class="preloader" :class="{ active: isActive }">
    <div class="logo"><span class="special">Jed</span>Chang</div>
    <div class="text">Loading</div>
  </div>
  <main>
    <Navbar></Navbar>
    <MobileNavbar></MobileNavbar>
    <Home></Home>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Resume></Resume>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
  </main>
  <ScrollTop></ScrollTop>
</template>

<script setup>
  const isLoading = ref(true)
  const isActive = ref(false)

  // 設為 true 測試開發模式，停留在 Loading
  const isDevelopment = false

  const handlePreloader = () => {
    if (isDevelopment) {
      isLoading.value = true
      // document.body.style.overflow = 'hidden'
      return
    }

    isActive.value = true
    setTimeout(() => {
      isLoading.value = false
      isActive.value = false

      // 強制將頁面滾動到最上方
      window.scrollTo(0, 0)
      document.body.style.overflow = 'auto' // 恢復滾動
    }, 2000) // 動畫完成時間
  }

  onMounted(() => {
    // 禁用瀏覽器自動滾動恢復
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    // 禁用滾動，直到頁面完全加載
    // document.body.style.overflow = 'hidden'

    // 定期檢查頁面是否完全加載
    const checkPageLoad = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(checkPageLoad)
        handlePreloader()
        nextTick(() => {
          window.scrollTo(0, 0)
          document.body.style.overflow = 'auto'
        })
      }
    }, 50) // 每50ms檢查一次頁面狀態
  })
  // 組件卸載時清理
  onUnmounted(() => {
    // 如果 checkPageLoad 有值，執行 clearInterval(checkPageLoad) 停止計時器。若為 undefined 或 null，則不執行任何操作，避免不必要的錯誤。
    if (checkPageLoad) {
      clearInterval(checkPageLoad)
    }
  })

  useHead({
    title: 'Jed Chang',
    titleTemplate: null,
    htmlAttrs: {
      lang: 'zh-hant'
    },
    meta: [
      {
        name: 'description',
        content:
          '我是 Jed Chang，是一位前端工程師 & UI/UX 設計師，從事網頁開發和設計相關工作，有著十多年的經驗。'
      }
    ]
  })
</script>

<style lang="scss">
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
</style>
