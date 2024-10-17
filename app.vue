<template>
  <Home></Home>
  <About></About>
  <Resume></Resume>
  <Skills></Skills>
  <Contact></Contact>
</template>

<script setup>
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
  @import '@/assets/scss/main.scss';
</style>
