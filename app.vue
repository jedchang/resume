<template>
  <Overlay></Overlay>
  <!-- <div class="preloader" :class="{ active: isActive }">
    <div class="logo"><span class="special">Jed</span>Chang</div>
    <div class="text">Loading</div>
  </div> -->
  <main>
    <Navbar></Navbar>
    <MobileNavbar></MobileNavbar>
    <!-- <Home></Home> -->
    <!-- <Portfolio></Portfolio> -->
    <!-- <Skills></Skills>
    <Resume></Resume> -->
    <About></About>
    <!-- <Contact></Contact> -->
    <Footer></Footer>
  </main>
  <ScrollTop></ScrollTop>
</template>

<script setup>
  const runtimeConfig = useRuntimeConfig()
  const isActive = ref(false)

  // const handlePreloader = () => {
  //   const preloader = document.querySelector('.preloader')
  //   preloader.style = 'display:flex'
  //   Promise.resolve()
  //     .then(() => {
  //       setTimeout(() => {
  //         isActive.value = true
  //         window.scrollTo(0, 0)
  //       }, 1200)
  //     })
  //     .then(() => {
  //       setTimeout(() => {
  //         preloader.style = 'display:none'
  //         isActive.value = false
  //       }, 2000)
  //     })
  // }

  onMounted(() => {
    setTimeout(() => {
      isActive.value = true
    }, 2000)
    // handlePreloader()
    // window.scrollTo(0, 0)
    // console.log('window.scrollTo(0, 0)')
    // const timer = setInterval(() => {
    //   if (document.readyState === 'complete') {
    //     window.scrollTo(0, 0)
    //     clearInterval(timer)
    //     console.log('complete')
    //     // handlePreloader()
    //   }
    //   console.log('!== complete')
    // })
  })

  useHead({
    title: 'Jed Chang',
    titleTemplate: null,
    htmlAttrs: {
      lang: 'zh-hant'
    },
    meta: [
      { property: 'og:url', content: 'https://www.jedchang.com.tw/resume' },
      {
        property: 'og:image',
        content: `${runtimeConfig.public.baseURL}/images/og-image.jpg`
      },
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
