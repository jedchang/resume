<template>
  <div class="load-more">
    <button type="button" class="btn">
      <span>Load More</span>
      <Icon name="stash:arrow-right-solid"></Icon>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .load-more {
    margin-top: 50px;
    button {
      padding: 12px 45px;
      height: 46px;
      border-radius: 25px;
      border: 1px solid $borderColor;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      transition: $setTransition;
      span {
        color: $primaryTextColor2;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        &.iconify {
          width: 20px;
          height: 20px;
          margin-left: 5px;
        }
      }
      &:hover {
        cursor: pointer;
        color: $primaryColor;
        background-color: $primaryBgColor;
        border: 1px solid $primaryColor;
        span {
          color: $primaryColor;
        }
      }
    }
  }
</style>
