<template>
  <div class="portfolio-card">
    <!-- <img :src="useAssetsImage(`images/portfolio/web/thumb-web1.jpg`)" /> -->
    <div
      v-for="portfolio in portfolioData"
      :key="portfolio.name"
      class="col-lg-4"
    >
      <div class="card-item">
        <div class="image">
          <!-- <img :src="loadImage(portfolio)" :alt="portfolio.category" /> -->
          <img :src="portfolio.image" :alt="portfolio.category" />
        </div>
        <div class="content">
          <div class="category">{{ portfolio.category }}</div>
          <div class="name">{{ portfolio.name }}</div>
          <a href="#" class="more">learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import portfolioWeb4 from '~/public/images/portfolio/web-develop/portfolio-web4.jpg'

  const props = defineProps({
    selectedWorks: {
      type: Array,
      default() {
        return []
      }
    }
  })

  const runtimeConfig = useRuntimeConfig()

  const portfolioData = [
    {
      category: 'Web Develop',
      name: 'Parallax 視差滾動網頁',
      image: `${runtimeConfig.app.baseURL}images/portfolio/web/thumb-web1.jpg`,
      url: '123'
    },
    {
      category: 'Web Develop',
      name: 'ECS 精英電腦官網',
      image: `${runtimeConfig.app.baseURL}images/portfolio/web/thumb-web2.jpg`,
      url: '123'
    },
    {
      category: 'Web Develop',
      name: 'Scrum 介紹互動遊戲',
      image: `${runtimeConfig.app.baseURL}images/portfolio/web/thumb-web3.jpg`,
      url: '123'
    },
    {
      category: 'Web Develop',
      name: 'SE40AN 筆記型電腦',
      image: `${runtimeConfig.app.baseURL}images/portfolio/web/thumb-web4.jpg`,
      url: '123'
    },
    {
      category: 'Web Develop',
      name: '技術支援表單頁面',
      image: `${runtimeConfig.app.baseURL}images/portfolio/web/thumb-web5.jpg`,
      url: '123'
    }
  ]
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolioCard.scss';
</style>
