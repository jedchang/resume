<template>
  <div id="home" class="intro-hero">
    <div class="bg-overlay"></div>
    <Navbar></Navbar>
    <div class="intro-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="intro-heading">
              <h4>Hi, i'm Jed Chang</h4>
              <h1>前端工程師 & <br />UI/UX 設計師經驗</h1>
              <!-- <h1>frontend developer and UI/UX designer experience</h1> -->
              <ul class="list-btn">
                <li class="list-item">
                  <a href="#" class="btn btn-primary">
                    <Icon name="mdi:tray-download"></Icon>
                    Download Resume
                  </a>
                </li>
                <li class="list-item">
                  <a href="#" class="btn">
                    <Icon name="mdi:email-outline"></Icon>
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="intro-photo">
              <div class="intro-grid"></div>
              <figure>
                <img
                  src="~/assets/images/hero-profile.png"
                  alt="Hero Profile"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/components/_home.scss';
</style>
