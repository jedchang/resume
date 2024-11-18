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
      span {
        color: $primaryTextColor2;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        @include small {
          font-size: 16px;
        }
        @include extraSmall {
          font-size: 16px;
        }
        &.iconify {
          width: 20px;
          height: 20px;
          margin-left: 5px;
          @include small {
            width: 22px;
            height: 22px;
          }
          @include extraSmall {
            width: 22px;
            height: 22px;
          }
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
