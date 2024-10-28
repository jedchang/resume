<template>
  <section id="home" class="intro-hero">
    <div class="bg-overlay"></div>
    <div class="intro-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="intro-heading">
              <img
                class="ornament-drawn"
                src="~/assets/images/ornament-drawn.svg"
                alt="Ornament"
              />
              <h4>Hello, i'm Jed Chang</h4>
              <h1>
                <span>前端工程師</span>
                <span class="and">&</span><br />
                <span class="stroke en">UI</span>
                <span>設計師經驗</span>
              </h1>
              <div class="list-btn">
                <div class="item">
                  <button type="button" class="btn">
                    <Icon name="mdi:tray-download"></Icon>
                    Download Resume
                  </button>
                </div>
                <div class="item">
                  <SocialMedia></SocialMedia>
                </div>

                <!-- <li class="list-item">
                  <button type="button" class="btn btn-outline">
                    <Icon name="mdi:email-outline"></Icon>
                    Email Me
                  </button>
                </li> -->
              </div>
              <img
                class="ornament-arrow"
                src="~/assets/images/ornament-arrow.svg"
                alt="Ornament"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="intro-photo">
              <div class="intro-circle">
                <img src="~/assets/images/icon-rotate.svg" alt="Icon Rotate" />
                <div class="icon">
                  <Icon name="icon-park-solid:good-one"></Icon>
                </div>
              </div>
              <div class="intro-grid"></div>
              <figure>
                <img
                  src="~/assets/images/hero-profile.jpg"
                  alt="Hero Profile"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/components/_home.scss';
  @import '../assets/scss/components/_button.scss';
</style>
