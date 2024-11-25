<template>
  <div class="load-more">
    <button
      v-if="isVisible"
      type="button"
      class="btn"
      :class="{ active: isActive }"
      @click="handleLoadMore"
    >
      <span v-if="!loadState">Load More</span>
      <div v-else class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
    <!-- 沒資料可以顯示 button 應該要消失 -->
  </div>
</template>

<script setup>
  const props = defineProps({
    loadState: {
      type: Boolean,
      required: true
    }
  })
  const { $mitt } = useNuxtApp()
  const isVisible = ref(true) // 按鈕是否可見
  const isActive = ref(false)

  const handleLoadMore = () => {
    isActive.value = true
    $mitt.emit('loadMore') // 當按鈕被點擊時，發送 'loadMore' 事件
    // 模擬延遲處理，移除 `active` 類名
    setTimeout(() => {
      isActive.value = false
    }, 1600)
  }

  onMounted(() => {
    $mitt.on('noMore', () => {
      isVisible.value = false // 隱藏按鈕
    })
  })
</script>

<style lang="scss">
  .load-more {
    margin-top: 50px;
    button {
      width: 210px;
      padding: 12px 45px;
      height: 46px;
      border-radius: 25px;
      border: 1px solid $primaryColor;
      background-color: transparent;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: $setTransition;
      @include medium {
        width: 60%;
        height: 50px;
        line-height: 50px;
      }
      @include small {
        width: 100%;
        height: 55px;
        line-height: 55px;
        border-radius: 30px;
      }
      @include extraSmall {
        width: 100%;
        height: 55px;
        line-height: 55px;
        border-radius: 30px;
      }
      &.active {
        cursor: default;
        pointer-events: none;
        background-color: $primaryColor;
      }
      span {
        color: $primaryColor;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: '微軟正黑體', Oswald, sans-serif;
        transition: $setTransition;
        // font-family: 'Montserrat', sans-serif;
        @include small {
          font-size: 16px;
        }
        @include extraSmall {
          font-size: 16px;
        }
      }
      &:hover {
        cursor: pointer;
        // color: $primaryColor;
        background-color: $primaryColor;
        border: 1px solid $primaryColor;
        span {
          color: #fff;
        }
      }

      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 20px;
        div {
          position: absolute;
          top: 5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
          &:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
          }
          &:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          &:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          &:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
          }
        }
      }
    }
  }
</style>
