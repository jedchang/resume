<template>
  <div class="section-title" :class="{ dark: setColor === 'isDark' }">
    <h3 class="tw">
      <span>
        <slot name="tw">標題</slot>
      </span>
    </h3>
    <h2 class="en">
      <slot name="en">Section Title</slot>
    </h2>
    <div class="bar"></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    setColor: {
      type: String,
      default: () => ''
    }
  })
</script>

<style lang="scss">
  .section-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
    // &.align-left {
    //   justify-content: flex-start;
    //   align-items: flex-start;
    //   h3.tw {
    //     margin-left: 60px;
    //   }
    // }
    h3.tw {
      font-family: 微軟正黑體, Oswald, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.05em;
      color: #ffffff;
      margin: 0px;
      span {
        letter-spacing: 6px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 10px;
          right: 80px;
          width: 40px;
          height: 40px;
          border-top: 1px solid #ffffff;
          opacity: 0.3;
        }
        &::after {
          content: '';
          position: absolute;
          top: 10px;
          left: 80px;
          width: 40px;
          height: 40px;
          border-top: 1px solid #ffffff;
          opacity: 0.3;
        }
      }
    }
    h2.en {
      position: relative;
      font-family: 'Oswald', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 62px;
      text-align: center;
      text-transform: uppercase;
      // letter-spacing: -0.04em;
      color: #fff;
      margin: 0;
      // width: 100%;
      line-height: 100%;
      z-index: 1;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(180deg, #fdd196, #b18b59 50%, #37250e);
    }
    &.dark {
      .bar {
        &::before {
          background-color: $primaryBgColor;
        }
        &::after {
          background-color: $primaryBgColor;
        }
      }
    }

    .bar {
      width: 60px;
      height: 3px;
      background-color: $primaryColor;
      position: relative;
      overflow: hidden;
      margin-top: 30px;
      border-radius: 3px;
      &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 3px;
        background-color: $primaryBgColor2;
        left: 10px;
        top: 0;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: move-bar;
      }
      &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 3px;
        background-color: $primaryBgColor2;
        left: 0;
        top: 0;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: move-bar;
      }
    }
  }
</style>
