<template>
  <section id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SectionTitle>
            <template #tw> 作品集 </template>
            <template #en> MY Portfolio </template>
          </SectionTitle>
        </div>
        <div class="col-12">
          <el-tabs v-model="activeName" type="card" @tab-click="handleCategory">
            <el-tab-pane label="All" name="all">
              <template #label>
                <span class="item-title"> All </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore :loadState="loading"></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="Web Develop" name="web-develop">
              <template #label>
                <span class="item-title"> Web Develop </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore :loadState="loading"></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="UI Design" name="ui-design">
              <template #label>
                <span class="item-title"> UI Design </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore :loadState="loading"></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="Graphic Design" name="graphic-design">
              <template #label>
                <span class="item-title"> Graphic Design </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore :loadState="loading"></LoadMore>
            </el-tab-pane>
            <!-- <el-tab-pane label="Others" name="others">
              <template #label>
                <span class="item-title"> Others </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore></LoadMore>
            </el-tab-pane> -->
          </el-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { $mitt } = useNuxtApp()
  import { portfolioData } from '@/utils/portfolioData.js'

  // 設置初始顯示資料筆數，初始顯示 20 筆
  const count = ref(20)
  const total = ref(portfolioData.length)
  // 計算並限制顯示前20筆資料
  const limitedPortfolioData = computed(() => {
    return portfolioData.slice(0, count.value)
  })
  // console.log(limitedPortfolioData.value) // 要加上 value 才能印出資料

  // 是否顯示按鈕（當前顯示資料未達總數量時） true/false
  const hasMore = computed(() => count.value < total.value)
  const loading = ref(false)

  const activeLoadMore = () => {
    // 如果已經沒有更多資料，直接返回
    if (!hasMore.value) return
    loading.value = true
    setTimeout(() => {
      count.value += 4 // 按鈕時增加 4 筆資料
      loading.value = false // 加載完成，重置加載狀態
      // 如果沒有更多資料，通知按鈕隱藏
      if (!hasMore.value) {
        $mitt.emit('noMore')
      }
    }, 1500)
  }

  // 在組件掛載時監聽事件
  onMounted(() => {
    $mitt.on('loadMore', activeLoadMore)
  })

  const activeName = ref('all')

  const filteredPortfolio = computed(() => {
    if (activeName.value === 'all') {
      return limitedPortfolioData.value
      // return portfolioData
    } else if (activeName.value === 'web-develop') {
      return limitedPortfolioData.value.filter(
        (item) => item.category === 'Web Develop'
      )
      // return portfolioData.filter((item) => item.category === 'Web Develop')
    } else if (activeName.value === 'ui-design') {
      return limitedPortfolioData.value.filter(
        (item) => item.category === 'UI Design'
      )
      // return portfolioData.filter((item) => item.category === 'UI Design')
    } else if (activeName.value === 'graphic-design') {
      return limitedPortfolioData.value.filter(
        (item) => item.category === 'Graphic Design'
      )
      // return portfolioData.filter((item) => item.category === 'Graphic Design')
    }
  })

  const handleCategory = (tab) => {
    activeName.value = tab.props.name
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolio.scss';

  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 80px;
          @include extraSmall {
            right: 115%;
            top: 50%;
          }
        }
        &::after {
          left: 80px;
          @include extraSmall {
            left: 105%;
            top: 50%;
          }
        }
      }
    }
    h2.en {
      background-image: linear-gradient(180deg, #fdd196, #b18b59 50%, #242529);
    }
  }
</style>
