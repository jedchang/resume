<template>
  <section id="home" class="intro-hero">
    <div class="bg-overlay"></div>
    <div class="intro-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-main">
            <img
              class="ornament-drawn"
              src="~/assets/images/ornament-drawn.svg"
              alt="Ornament"
            />
            <div class="intro-heading">
              <ul>
                <li>Front-End Developer</li>
                <li>UI/UX Designer</li>
              </ul>
              <h1>
                Hello, I'm
                <span class="name">Jed Chang<span class="dot">.</span></span>
              </h1>
              <h2>
                我是一名前端工程師 <span class="and">&</span> UI/UX
                設計師，專注於網頁開發與設計，致力於將視覺美感與互動體驗融入每一個細節。擅長將設計理念轉化為高效、流暢的前端頁面，提供優質的使用者體驗與視覺呈現。
              </h2>
              <div class="list-btn">
                <div class="item">
                  <a
                    href="https://www.jedchang.com.tw/download/resume.pdf"
                    class="btn"
                    target="_blank"
                  >
                    <Icon name="mdi:tray-download"></Icon>
                    Download Resume
                  </a>
                </div>
                <div class="item">
                  <button
                    type="button"
                    class="btn btn-outline"
                    @click="scrollToSection('contact')"
                  >
                    <Icon name="mdi:email-outline"></Icon>
                    Email Me
                  </button>
                </div>
                <div class="item">
                  <SocialMedia></SocialMedia>
                </div>
              </div>
              <img
                class="ornament-arrow"
                src="~/assets/images/ornament-arrow.svg"
                alt="Ornament"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useActiveSectionStore } from '~/stores/activeSection.js'
  const activeSectionStore = useActiveSectionStore()

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      activeSectionStore.setActiveSection(sectionId)
    }
  }

  // onMounted(() => {
  //   const setVh = () => {
  //     const vh = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty('--vh', `${vh}px`)
  //   }
  //   // 初始化時設定
  //   setVh()

  //   // 當視窗調整大小時重新設定
  //   window.addEventListener('resize', setVh)
  // })
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_home.scss';
  @import '../assets/scss/components/_button.scss';
</style>
