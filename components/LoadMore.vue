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
  </div>
</template>

<script setup>
  const props = defineProps({
    loadState: {
      type: Boolean,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  })
  const { $mitt } = useNuxtApp()
  const isVisible = ref(true) // 按鈕是否可見
  const isActive = ref(false) // 按鈕執行狀態

  const handleLoadMore = () => {
    isActive.value = true
    // 發送 'loadMore' 事件，帶上分類名稱
    $mitt.emit('loadMore', (category) => {
      activeLoadMore(category) // 父組件處理邏輯
    })
    // 模擬延遲處理，移除 `active` 類名
    setTimeout(() => {
      isActive.value = false
    }, 1600)
  }

  onMounted(() => {
    $mitt.on('noMore', (category) => {
      if (category === props.category) {
        isVisible.value = false // 僅隱藏對應分類的按鈕
      }
    })
  })
</script>

<style lang="scss">
  .load-more {
    display: inline-block;
    margin-top: 50px;
    @include medium {
      width: 50%;
    }
    @include small {
      width: 70%;
    }
    @include extraSmall {
      width: 100%;
    }
    button {
      width: 260px;
      padding: 12px 45px;
      height: 46px;
      border-radius: 25px;
      border: 1px solid $borderColor;
      background-color: rgba(20, 25, 32, 1);
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: $setTransition;
      @include medium {
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
      @include small {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 30px;
      }
      @include extraSmall {
        width: 98%;
        height: 55px;
        line-height: 0;
        border-radius: 30px;
      }
      &.active {
        cursor: default;
        pointer-events: none;
      }
      span {
        color: $primaryTextColor2;
        font-size: 14px;
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
          background: $primaryColor;
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
