<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SectionTitle>
            <template #tw> 關於我 </template>
            <template #en> About Me </template>
          </SectionTitle>
        </div>
        <div class="col-lg-4">
          <div class="experience">
            <div class="exp-number">
              <span class="number">18 <span>+</span></span>
            </div>
            <h5 class="title">
              Years
              <span>Experience Working</span>
            </h5>
          </div>

          <!-- <div class="experience">
            <span class="number">18 <span>+</span></span>
            <h5 class="title">
              Years
              <span>Experience Working</span>
            </h5>
          </div> -->

          <!-- <div class="profile-img">
            <div class="img">
              <img
                src="~/assets/images/about-profile.jpg"
                alt="About Profile"
              />
            </div>
          </div> -->
        </div>
        <div class="col-lg-8 vertical-align">
          <div class="info">
            <div class="code-wrapper">
              <div class="code-row">
                &lt;<i>code</i>&gt;
                <span
                  >I'm a Front-End Developer & UI/UX Designer located in
                  Taipei.</span
                >
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
              Chang，擁有多年網站開發與設計的實務經驗，能夠從需求探討、架構規劃、草稿設計到程式開發，獨立完成網站開發的整體流程。並且不斷提升前端開發相關技能，以程式邏輯解決設計中的問題，並結合用戶需求，創造出優質的使用體驗。
            </p>
            <div class="slogan-wrapper">
              <!-- <h6 class="slogan">
                <Icon name="bi:quote"></Icon>
                「將視覺與程式技術融合，成就每一個互動細節。」
              </h6> -->
              <h6 class="slogan">
                <Icon name="bi:quote"></Icon>
                「融合視覺設計與程式技術，締造卓越的互動體驗。」
                <Icon name="bi:quote"></Icon>
              </h6>
              <!-- <h6 class="slogan">
                <Icon name="bi:quote"></Icon>
                通過精心設計的視覺呈現與精湛的程式技術完美融合，打造出既美觀又功能強大的用戶體驗。
              </h6> -->
              <figure>
                <img src="~/assets/images/sign.png" alt="Sign" />
              </figure>
            </div>
            <!-- <div class="features">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <h6>
                      <Icon name="fa-solid:check"></Icon>
                      Web Development
                    </h6>
                  </div>
                  <div class="feature-item">
                    <h6>
                      <Icon name="fa-solid:check"></Icon>
                      UI/UX Design
                    </h6>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <h6>
                      <Icon name="fa-solid:check"></Icon>
                      SEO / Marketing
                    </h6>
                  </div>
                  <div class="feature-item">
                    <h6>
                      <Icon name="fa-solid:check"></Icon>
                      Graphic Design
                    </h6>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- <div class="contacts">
              <div class="row">
                <div class="col-lg-6">
                  <div class="contact-item">
                    <div class="icon">
                      <Icon name="fa-solid:envelope"></Icon>
                    </div>
                    <div class="text">
                      <span>Email US</span>
                      <h6>March.24@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="contact-item">
                    <div class="icon">
                      <Icon name="fa-solid:mobile-alt"></Icon>
                    </div>
                    <div class="text">
                      <span>Call US</span>
                      <h6>0922-641-110</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
</style>
