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
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="All" name="tab1">
              <template #label>
                <span class="item-title"> All </span>
              </template>
              <PortfolioCard></PortfolioCard>
              <LoadMore></LoadMore>
              <!-- <Category :selected-works="selectedWeb"></Category> -->
            </el-tab-pane>
            <el-tab-pane label="Web Develop" name="tab2">
              <template #label>
                <span class="item-title"> Web Develop </span>
              </template>
              Web Develop
              <!-- <Category :selected-works="selectedWeb"></Category> -->
            </el-tab-pane>
            <el-tab-pane label="UI Design" name="tab3">
              <template #label>
                <span class="item-title"> UI Design </span>
              </template>
              UI Design
              <!-- <Category :selected-works="selectedUi"></Category> -->
            </el-tab-pane>
            <el-tab-pane label="Graphic Design" name="tab4">
              <template #label>
                <span class="item-title"> Graphic Design </span>
              </template>
              Graphic Design
              <!-- <Category :selected-works="selectedUi"></Category> -->
            </el-tab-pane>
            <el-tab-pane label="Others" name="tab5">
              <template #label>
                <span class="item-title"> Others </span>
              </template>
              Others
              <!-- <Category :selected-works="selectedUi"></Category> -->
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const activeName = ref('tab1')
  const handleClick = (tab, event) => {
    console.log(tab, event)
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
