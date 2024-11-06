<template>
  <section id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
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
              <LoadMore></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="Web Develop" name="web-develop">
              <template #label>
                <span class="item-title"> Web Develop </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="UI Design" name="ui-design">
              <template #label>
                <span class="item-title"> UI Design </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="Graphic Design" name="graphic-design">
              <template #label>
                <span class="item-title"> Graphic Design </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore></LoadMore>
            </el-tab-pane>
            <el-tab-pane label="Others" name="others">
              <template #label>
                <span class="item-title"> Others </span>
              </template>
              <PortfolioCard
                :portfolio-data="filteredPortfolio"
              ></PortfolioCard>
              <LoadMore></LoadMore>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { portfolioData } from '@/utils/portfolioData.js'

  const activeName = ref('all')
  const filteredPortfolio = computed(() => {
    if (activeName.value === 'all') {
      return portfolioData
    } else if (activeName.value === 'web-develop') {
      return portfolioData.filter((item) => item.category === 'Web Develop')
    } else if (activeName.value === 'ui-design') {
      return portfolioData.filter((item) => item.category === 'UI Design')
    } else if (activeName.value === 'graphic-design') {
      return portfolioData.filter((item) => item.category === 'Graphic Design')
    } else if (activeName.value === 'others') {
      return portfolioData.filter((item) => item.category === 'Others')
    }
  })

  const handleCategory = (tab) => {
    activeName.value = tab.name
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_portfolio.scss';
  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 80px;
        }
        &::after {
          left: 80px;
        }
      }
    }
    h2.en {
      background-image: linear-gradient(180deg, #fdd196, #b18b59 50%, #242529);
    }
  }
</style>
