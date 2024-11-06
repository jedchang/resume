<template>
  <div class="portfolio-card">
    <div
      v-for="portfolio in portfolioData"
      :key="portfolio.name"
      class="col-lg-3"
    >
      <div class="card-item">
        <img :src="portfolio.thumbImg" :alt="portfolio.category" />
        <div class="overlay"></div>
        <div class="caption">
          <div class="container">
            <a :href="portfolio.url" class="link" target="_blank">
              <Icon name="fa6-solid:link"></Icon>
            </a>
            <a
              href="javascript:void(0);"
              class="view"
              @click="handleClickDialog(portfolio)"
            >
              <Icon name="fa6-solid:magnifying-glass"></Icon>
            </a>
          </div>
          <h4 class="title">{{ portfolio.title }}</h4>
          <p class="category">{{ portfolio.category }}</p>
        </div>
      </div>
    </div>
    <!-- dialog -->
    <el-dialog v-model="dialogVisible" width="60%" align-center>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="info">
              <span class="category">{{ currentItem.category }}</span>
              <h3>{{ currentItem.title }}</h3>
              <p>{{ currentItem.description }}</p>
              <ul class="tag">
                <li v-for="tag in currentItem.tag" :key="tag">
                  <span> {{ tag }}</span>
                </li>
              </ul>
              <a
                :href="currentItem.url"
                class="btn"
                :class="{ disabled: currentItem.url === null }"
                target="_blank"
              >
                <Icon name="fa6-solid:up-right-from-square"></Icon>
                View Site
              </a>
            </div>
          </div>
          <div class="col-lg-7">
            <el-carousel
              v-if="currentItem.detailsImg.length > 1"
              height="auto"
              trigger="click"
              arrow="always"
              :autoplay="false"
              indicator-position="outside"
            >
              <el-carousel-item
                v-for="(img, index) in currentItem.detailsImg"
                :key="index"
              >
                <img :src="img" alt="Portfolio Details" />
              </el-carousel-item>
            </el-carousel>
            <img v-else :src="currentItem.detailsImg" alt="Portfolio Details" />
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
  // import { portfolioData } from '@/utils/portfolioData.js'

  const props = defineProps({
    selectedWorks: {
      type: Array,
      default() {
        return []
      }
    },
    portfolioData: {
      type: Array,
      default: () => []
    }
  })

  const dialogVisible = ref(false)
  const currentItem = ref('')

  const handleClickDialog = (item) => {
    dialogVisible.value = true
    currentItem.value = item
  }

  const filteredPortfolio = computed(() =>
    portfolioData.filter((item) => item.category === selectedCategory.value)
  )

  // const runtimeConfig = useRuntimeConfig()
  // const portfolioData = [
  //   {
  //     category: 'Web Develop',
  //     title: 'Parallax 視差滾動網頁',
  //     thumbImg: `${runtimeConfig.app.baseURL}images/portfolio/thumb/web/thumb-web1.jpg`,
  //     detailsImg: `${runtimeConfig.app.baseURL}images/portfolio/details/web/details-web1.jpg`,
  //     tag: [
  //       'HTML5',
  //       'SCSS',
  //       'jQuery',
  //       'RWD',
  //       'GSAP',
  //       'Parallax.js',
  //       'Typed.js'
  //     ],
  //     url: 'https://jedchang.github.io/Parallax-Interactive-Website/'
  //   },
  //   {
  //     category: 'Web Develop',
  //     title: 'ECS 精英電腦官網',
  //     thumbImg: `${runtimeConfig.app.baseURL}images/portfolio/thumb/web/thumb-web2.jpg`,
  //     tag: [
  //       'HTML5',
  //       'SCSS',
  //       'Nuxt.js',
  //       'RWD',
  //       'Bootstrap',
  //       'RESTful API',
  //       'Vuex',
  //       'Element UI',
  //       'PM2'
  //     ],
  //     url: 'https://www.ecs.com.tw/tw'
  //   },
  //   {
  //     category: 'Web Develop',
  //     title: 'Scrum 介紹互動遊戲',
  //     thumbImg: `${runtimeConfig.app.baseURL}images/portfolio/thumb/web/thumb-web3.jpg`,
  //     tag: ['HTML5', 'SCSS', 'Vue.js', 'Vuex', 'RWD', 'vuedraggable.js'],
  //     url: 'https://jedchang.github.io/Scrum-Interactive-Game/'
  //   },
  //   {
  //     category: 'Web Develop',
  //     title: 'SE40AN 筆記型電腦',
  //     thumbImg: `${runtimeConfig.app.baseURL}images/portfolio/thumb/web/thumb-web4.jpg`,
  //     tag: ['HTML5', 'SCSS', 'Vue.js', 'Vuex', 'RWD', 'vuedraggable.js'],
  //     url: '123'
  //   },
  //   {
  //     category: 'Web Develop',
  //     title: '技術支援表單頁面',
  //     thumbImg: `${runtimeConfig.app.baseURL}images/portfolio/thumb/web/thumb-web5.jpg`,
  //     tag: [
  //       'HTML5',
  //       'SCSS',
  //       'jQuery',
  //       'RWD',
  //       'GSAP',
  //       'Parallax.js',
  //       'Typed.js'
  //     ],
  //     url: '123'
  //   }
  // ]
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolioCard.scss';
  @import '../assets/scss/components/_button.scss';
</style>
