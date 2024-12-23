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
          <el-tabs
            id="myTabs"
            v-model="activeName"
            type="card"
            @tab-click="handleCategory"
          >
            <!-- All -->
            <el-tab-pane label="All" name="all">
              <template #label>
                <span class="item-title"> All </span>
                <span v-if="remainingCounts.all > 0" class="count">
                  {{ remainingCounts.all }}</span
                >
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore
                v-if="hasMore.all"
                :category="'all'"
                :loadState="loading"
                @click="activeLoadMore('all')"
              ></LoadMore>
            </el-tab-pane>
            <!-- Web Develop -->
            <el-tab-pane label="Web Develop" name="web-develop">
              <template #label>
                <span class="item-title"> Web Develop </span>
                <span v-if="remainingCounts.webDevelop > 0" class="count">
                  {{ remainingCounts.webDevelop }}
                </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore
                v-if="hasMore.webDevelop"
                :category="'webDevelop'"
                :loadState="loading"
                @click="activeLoadMore('webDevelop')"
              ></LoadMore>
            </el-tab-pane>
            <!-- UI Design -->
            <el-tab-pane label="UI Design" name="ui-design">
              <template #label>
                <span class="item-title"> UI Design </span>
                <span v-if="remainingCounts.uiDesign > 0" class="count">
                  {{ remainingCounts.uiDesign }}</span
                >
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore
                v-if="hasMore.uiDesign"
                :category="'uiDesign'"
                :loadState="loading"
                @click="activeLoadMore('uiDesign')"
              ></LoadMore>
            </el-tab-pane>
            <!-- Graphic Design -->
            <el-tab-pane label="Graphic Design" name="graphic-design">
              <template #label>
                <span class="item-title"> Graphic Design </span>
                <span v-if="remainingCounts.graphicDesign > 0" class="count">
                  {{ remainingCounts.graphicDesign }}
                </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore
                v-if="hasMore.graphicDesign"
                :category="'graphicDesign'"
                :loadState="loading"
                @click="activeLoadMore('graphicDesign')"
              ></LoadMore>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { $mitt } = useNuxtApp()
  import { webDevelopData } from '~/utils/webDevelop.js'
  import { uiDesignData } from '~/utils/uiDesign.js'
  import { graphicDesignData } from '~/utils/graphicDesign.js'

  // 合併資料
  const portfolioData = [
    ...webDevelopData,
    ...uiDesignData,
    ...graphicDesignData
  ]

  // 設置總數計算
  const totals = ref({
    all: portfolioData.length,
    webDevelop: webDevelopData.length,
    uiDesign: uiDesignData.length,
    graphicDesign: graphicDesignData.length
  })

  // 設置當前顯示筆數
  const counts = ref({
    all: 16,
    webDevelop: 16,
    uiDesign: 16,
    graphicDesign: 16
  })

  // 判斷是否還有更多資料
  const hasMore = computed(() => {
    return {
      all: counts.value.all < totals.value.all,
      webDevelop: counts.value.webDevelop < totals.value.webDevelop,
      uiDesign: counts.value.uiDesign < totals.value.uiDesign,
      graphicDesign: counts.value.graphicDesign < totals.value.graphicDesign
    }
  })

  // 計算每個類別剩餘資料數量
  const remainingCounts = computed(() => {
    return {
      all: totals.value.all - counts.value.all,
      webDevelop: totals.value.webDevelop - counts.value.webDevelop,
      uiDesign: totals.value.uiDesign - counts.value.uiDesign,
      graphicDesign: totals.value.graphicDesign - counts.value.graphicDesign
    }
  })

  const loading = ref(false)
  const activeName = ref('all')

  // 加載更多方法
  const activeLoadMore = (category) => {
    loading.value = true
    setTimeout(() => {
      // 更新該分類的顯示筆數
      counts.value[category] += 4 // 每次加載 4 筆資料
      loading.value = false
      // 如果該分類已經沒有更多資料，通知按鈕隱藏
      if (!hasMore.value[category]) {
        $mitt.emit('noMore', category) // 發送特定類別的事件
      }
    }, 1500)
  }

  // 限制顯示資料
  const limitedAll = computed(() => {
    return portfolioData.slice(0, counts.value.all)
  })
  const limitedWebDevelop = computed(() => {
    return webDevelopData.slice(0, counts.value.webDevelop)
  })
  const limitedUiDesign = computed(() => {
    return uiDesignData.slice(0, counts.value.uiDesign)
  })
  const limitedGraphicDesign = computed(() => {
    return graphicDesignData.slice(0, counts.value.graphicDesign)
  })
  // console.log('limitedUiDesign:', limitedUiDesign.value)

  // 計算並返回過濾後的資料
  const filteredPortfolio = computed(() => {
    switch (activeName.value) {
      case 'all':
        return limitedAll.value
      case 'web-develop':
        return limitedWebDevelop.value
      case 'ui-design':
        return limitedUiDesign.value
      case 'graphic-design':
        return limitedGraphicDesign.value
      default:
        return []
    }
  })

  // 在組件掛載時監聽事件
  onMounted(() => {
    $mitt.on('loadMore', activeLoadMore)
  })

  const handleCategory = (tab) => {
    const tabsElement = document.getElementById('myTabs')
    if (tabsElement) {
      // 設置偏移量
      const scrollToPosition = tabsElement.offsetTop - 40
      // 先執行滾動
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      })
    }
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
