<template>
  <Overlay></Overlay>
  <div class="preloader" :class="{ active: isActive }">
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
    <ScrollTop></ScrollTop>
  </main>
</template>

<script setup>
  const isActive = ref(false)

  const handlePreloader = () => {
    const preloader = document.querySelector('.preloader')

    preloader.style = 'display:flex'
    Promise.resolve()
      .then(() => {
        setTimeout(() => {
          isActive.value = true
          window.scrollTo(0, 0)
          preloader.classList.add('active')
        }, 1200)
      })
      .then(() => {
        setTimeout(() => {
          preloader.style = 'display:none'
          preloader.classList.remove('active')
          isActive.value = false
        }, 2000)
      })
  }

  onMounted(() => {
    const timer = setInterval(() => {
      if (document.readyState === 'complete') {
        window.scrollTo(0, 0)
        clearInterval(timer)

        setTimeout(() => {
          handlePreloader()
        }, 1200)
        // handlePreloader()
      }
    })
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
        content: 'https://www.jedchang.com.tw/images/og-image.jpg'
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
