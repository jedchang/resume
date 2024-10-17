<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Subtitle>
            <template #tw> 關於我 </template>
            <template #en> About Me </template>
          </Subtitle>
        </div>
        <div class="col-lg-4">
          <div class="profile-img">
            <div class="img">
              <img
                src="~/assets/images/about-profile.jpg"
                alt="About Profile"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-8 vertical-align">
          <div class="info">
            <div class="text">
              <h4>
                我是<span class="main-color">前端工程師</span> &
                <span class="main-color">UI/UX 設計師</span
                >，從事網頁開發相關工作。
              </h4>
              <p>
                大家好，我的名字是 Jed
                Chang，有著設計相關背景，並致力學習前端工程師相關技能。我在之前公司擔任高級工程師，負責官網建置、開發功能與創建品牌產品網頁和
                UI/UX 使用者體驗。
              </p>
              <div class="features">
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
              </div>
              <div class="contacts">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/components/_about.scss';
</style>
