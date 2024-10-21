<template>
  <div class="section-title">
    <h3 class="tw">
      <span>
        <slot name="tw">標題</slot>
      </span>
    </h3>
    <h2 class="en">
      <slot name="en">Section Title</slot>
    </h2>
  </div>
</template>

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
        }
        &::after {
          content: '';
          position: absolute;
          top: 10px;
          left: 80px;
          width: 40px;
          height: 40px;
          border-top: 1px solid #ffffff;
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
  }
</style>
