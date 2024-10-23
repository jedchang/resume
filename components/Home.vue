<template>
  <section id="home" class="intro-hero">
    <div class="bg-overlay"></div>
    <div class="intro-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="intro-heading">
              <h4>Hello, i'm Jed Chang</h4>
              <h1>前端工程師 & <br />UI/UX 設計師經驗</h1>
              <!-- <h1>frontend developer and UI/UX designer experience</h1> -->
              <ul class="list-btn">
                <li class="list-item">
                  <button type="button" class="btn">
                    <Icon name="mdi:tray-download"></Icon>
                    Download Resume
                  </button>
                </li>
                <li class="list-item">
                  <button type="button" class="btn btn-outline">
                    <Icon name="mdi:email-outline"></Icon>
                    Email Me
                  </button>
                </li>
              </ul>
              <img
                class="ornament-arrow"
                src="~/assets/images/ornament-arrow.svg"
                alt="Ornament"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="intro-photo">
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
