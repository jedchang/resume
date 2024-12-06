<template>
  <div class="portfolio-card">
    <div
      v-for="portfolio in portfolioData"
      :key="portfolio.name"
      class="col-12 col-md-6 col-lg-4 col-xl-3"
    >
      <!-- Graphic Design -->
      <div v-if="portfolio.category === 'Graphic Design'" class="card-item">
        <img :src="portfolio.thumbImg" :alt="portfolio.category" />
        <div class="overlay"></div>
        <div class="caption">
          <div class="container">
            <a
              href="javascript:void(0);"
              class="view"
              @click="showImg(portfolio)"
            >
              <Icon name="fa6-solid:eye"></Icon>
            </a>
          </div>
          <h4 class="title">{{ portfolio.title }}</h4>
          <p class="category">{{ portfolio.category }}</p>
        </div>
      </div>
      <!-- Web Develop、UI Design  -->
      <div v-else class="card-item">
        <img :src="portfolio.thumbImg" :alt="portfolio.category" />
        <div class="overlay"></div>
        <div class="caption">
          <div class="container">
            <a
              :href="portfolio.url"
              class="link"
              target="_blank"
              :class="{ disabled: portfolio.url === null }"
            >
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
    <!-- Easy Lightbox -->
    <VueEasyLightbox
      :visible="visible"
      :imgs="[currentImg]"
      :index="0"
      :rotate-disabled="true"
      :scroll-disabled="false"
      :move-disabled="true"
      @hide="hideImg"
    >
      <!-- 隱藏工具列 -->
      <template #toolbar>
        <div style="display: none"></div>
      </template>
    </VueEasyLightbox>

    <!-- Dialog -->
    <el-dialog
      v-if="currentItem.category !== 'Graphic Design'"
      v-model="dialogVisible"
      :width="dialogWidth"
      align-center
      :lock-scroll="false"
      @close="handleDialogClose"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-5 col-xl-5">
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
          <div class="col-12 col-md-12 col-lg-7 col-xl-7">
            <Swiper
              v-bind="swiperOptions"
              :key="swiperResetKey"
              :initial-slide="0"
              :pagination="{ clickable: true }"
            >
              <SwiperSlide
                v-for="(img, index) in currentItem.detailsImg"
                :key="index"
              >
                <img :src="img" alt="Portfolio Details" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
  const props = defineProps({
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

  const dialogWidth = ref('60%')

  const watchWidth = () => {
    if (window.innerWidth > 1200) {
      dialogWidth.value = '1140px'
    } else if (window.innerWidth > 992 && window.innerWidth < 1199) {
      dialogWidth.value = '960px'
    } else if (window.innerWidth > 768 && window.innerWidth < 991) {
      dialogWidth.value = '720px'
    } else if (window.innerWidth > 576 && window.innerWidth < 767) {
      dialogWidth.value = '540px'
    } else {
      dialogWidth.value = '96%'
    }
  }
  onMounted(() => {
    watchWidth()
    window.addEventListener('resize', watchWidth)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', watchWidth)
  })

  // el-dialog 關閉後 Swiper 回到第一張
  const swiperReset = ref(0) // 這個變數用來控制 Swiper 顯示的初始幻燈片。
  const swiperResetKey = ref(0) // 這個變數用來強制 Swiper 重新渲染。Vue 中動態改變組件的 key 屬性時，會將該組件銷毀並重新創建!

  const handleDialogClose = () => {
    setTimeout(() => {
      swiperReset.value = 0 // 確保在重新渲染後依然回到第一張
      swiperResetKey.value++ // 增加 key 值來強制 Swiper 重新渲染
    }, 100)
  }

  const swiperOptions = {
    modules: [SwiperAutoplay, SwiperPagination],
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500
    },
    slidesPerView: 1,
    grabCursor: true
  }

  const visible = ref(false)
  const currentImg = ref('')
  // 顯示 Lightbox
  const showImg = (portfolio) => {
    if (portfolio && portfolio.detailsImg && portfolio.detailsImg.length > 0) {
      currentImg.value = portfolio.detailsImg[0] // 顯示第一張細節圖片
      visible.value = true // 開啟 Lightbox
    }
  }
  // 隱藏 Lightbox
  const hideImg = () => {
    visible.value = false
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolioCard.scss';
  @import '../assets/scss/components/_button.scss';
</style>
