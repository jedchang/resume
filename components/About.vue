<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SectionTitle>
            <template #tw> 關於我 </template>
            <template #en> About Me </template>
          </SectionTitle>
        </div>
        <div class="col-12 col-lg-4 col-xl-4">
          <div class="intro-photo">
            <div class="intro-grid"></div>
            <figure>
              <img src="~/assets/images/hero-profile.jpg" alt="Hero Profile" />
            </figure>
            <div class="intro-circle">
              <img src="~/assets/images/icon-rotate.svg" alt="Icon Rotate" />
              <div class="icon">
                <Icon name="icon-park-solid:good-one"></Icon>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 col-xl-8 vertical-align">
          <div class="info">
            <div class="code-wrapper">
              <div class="code-row">
                &lt;<i>code</i>&gt;
                <span>Front-End Developer & UI/UX Designer.</span>
                <!-- <span
                  >I'm a Front-End Developer & UI/UX Designer located in
                  Taipei.</span
                > -->
                &lt;/<i>code</i>&gt;
              </div>
              <div class="code-row">
                &lt;<i>code</i>&gt;
                <span>Specialized in</span>
                <span class="typed"></span>
                &lt;/<i>code</i>&gt;
              </div>
              <div class="typed-strings">
                <p>Creating Websites.</p>
                <p>Writing Code.</p>
                <p>Designing UI/UX.</p>
                <p>Designing Visual Arts.</p>
              </div>
            </div>
            <h4>
              我是一名<span class="main-color">前端工程師</span> &
              <span class="main-color">UI/UX 設計師</span
              >，從事網頁開發相關工作。
            </h4>
            <p>
              大家好，我是 Jed
              Chang，擁有多年網站開發與設計的實務經驗，能夠從需求探討、架構規劃、草稿設計到程式開發，獨立完成網站開發的整體流程。並且不斷提升前端開發相關技能，以程式邏輯解決設計中的問題，並結合用戶需求後創造出優質的使用體驗。
            </p>
            <div class="slogan-wrapper">
              <h6 class="slogan">
                <Icon name="bi:quote"></Icon>
                融合視覺設計與程式技術，締造卓越的互動體驗。
                <Icon name="bi:quote"></Icon>
              </h6>
              <figure>
                <img src="~/assets/images/sign.png" alt="Sign" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Typed from 'typed.js'
  onMounted(async () => {
    await nextTick()
    const options = {
      stringsElement: '.typed-strings',
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500
    }
    const typed = new Typed('.typed', options)
  })
  // onMounted(() => {
  //   nextTick(() => {
  //     const options = {
  //       stringsElement: '.typed-strings',
  //       loop: true,
  //       typeSpeed: 100,
  //       backSpeed: 50,
  //       backDelay: 1500
  //     }
  //     const typed = new Typed('.typed', options)
  //   })
  // })
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_about.scss';
  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 100px;
          @include extraSmall {
            right: 115%;
            top: 50%;
          }
        }
        &::after {
          left: 100px;
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
