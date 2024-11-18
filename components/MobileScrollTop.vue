<template>
  <div id="m-scroll-top">
    <button type="button" class="btn" @click="scrollToTop">
      <Icon name="fa6-solid:chevron-up"></Icon>
      <span>Scroll Top</span>
    </button>
  </div>
</template>

<script setup>
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<style lang="scss" scoped>
  #m-scroll-top {
    display: none;
    @include extraSmall {
      display: block;
      background: $primaryBgColor;
      border-top: 1px solid darken($borderColor, 5%);
      border-bottom: 1px solid darken($borderColor, 5%);
      position: relative;
      z-index: 1;
      transition: $setTransition;
    }
    button.btn {
      display: flex;
      width: 100%;
      height: 53px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-shadow: 0 0 6px $primaryColor;
      color: #fff;
      transition: $setTransition;
      &:active {
        cursor: pointer;
        text-shadow: 0 0 6px $primaryColor;
      }
      span {
        font-size: 14px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        &.iconify {
          width: 16px;
          height: 16px;
          margin-right: 7px;
        }
      }
    }
  }
</style>
