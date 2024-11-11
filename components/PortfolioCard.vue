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
    <el-dialog
      v-model="dialogVisible"
      width="60%"
      align-center
      @close="handleDialogClose"
    >
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
            <Swiper
              v-if="currentItem.detailsImg.length > 1 && showSwiper"
              v-bind="swiperOptions"
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
            <img v-else :src="currentItem.detailsImg" alt="Portfolio Details" />
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
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

  // el-dialog 關閉後 Swiper 回到第一張
  const showSwiper = ref(true)
  const handleDialogClose = () => {
    showSwiper.value = false
    setTimeout(() => {
      showSwiper.value = true // 重新顯示 Swiper，重置 initialSlide
    }, 800)
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
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolioCard.scss';
  @import '../assets/scss/components/_button.scss';
</style>
