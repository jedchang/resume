<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Subtitle>
            <template #tw> 聯絡我 </template>
            <template #en> Contact Us </template>
          </Subtitle>
        </div>
        <div class="col-lg-5">
          <div class="info">
            <div class="item">
              <Icon name="bi:telephone"></Icon>
              <h6>Phone</h6>
              <p>0922-641-110</p>
            </div>
            <div class="item">
              <Icon name="bi:envelope"></Icon>
              <h6>Email</h6>
              <p>march.24@gmail</p>
            </div>
            <div class="item">
              <Icon name="bi:geo-alt"></Icon>
              <h6>Address</h6>
              <p>Neihu Dist., Taipei City, Taiwan</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="contact-form">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="name">您的姓名</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="email">您的電子郵件</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label for="message">您的留言</label>
                  <textarea
                    id="form-message"
                    name="message"
                    required="required"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="submit disabled"
                  front="送出"
                  back="👍️"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_contact.scss';
</style>
