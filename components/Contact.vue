<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SectionTitle>
            <template #tw> 聯絡我 </template>
            <template #en> Contact Us </template>
          </SectionTitle>
        </div>
        <div class="col-12 col-lg-5 col-xl-5">
          <div class="item">
            <div class="icon">
              <Icon name="bi:telephone"></Icon>
              <h6>Phone</h6>
            </div>
            <p>0922-641-110</p>
          </div>
          <div class="item">
            <div class="icon">
              <Icon name="bi:envelope"></Icon>
              <h6>Email</h6>
            </div>
            <a href="mailto:march.24@gmail.com">march.24@gmail.com</a>
          </div>
          <div class="item">
            <div class="icon">
              <Icon name="bi:geo-alt"></Icon>
              <h6>Address</h6>
            </div>
            <p>Neihu Dist., Taipei City, Taiwan</p>
          </div>
          <div class="item">
            <div class="icon">
              <Icon name="lineicons:website"></Icon>
              <h6>Website</h6>
            </div>
            <p>www.jedchang.com.tw/resume</p>
          </div>
        </div>
        <div class="col-12 col-lg-7 col-xl-7">
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
            <div class="row">
              <div class="col-12 col-lg-6 col-xl-6">
                <el-form-item label="您的姓名" prop="name">
                  <el-input v-model="ruleForm.name" />
                </el-form-item>
              </div>
              <div class="col-12 col-lg-6 col-xl-6">
                <el-form-item label="您的電子郵件" prop="email">
                  <el-input v-model="ruleForm.email" />
                </el-form-item>
              </div>
              <div class="col-12 col-lg-12 col-xl-12">
                <el-form-item label="您的留言" prop="message">
                  <el-input v-model="ruleForm.message" type="textarea" />
                </el-form-item>
                <el-form-item class="last-item">
                  <el-button
                    type="primary"
                    class="btn btn-submit disabled"
                    :class="{ loading: btnLoading }"
                    @click="submitForm(ruleFormRef)"
                  >
                    <Icon
                      v-if="btnLoading"
                      name="line-md:loading-twotone-loop"
                    ></Icon>
                    <span v-else> 送出 </span>
                  </el-button>
                  <el-button
                    class="btn btn-outline btn-reset disabled"
                    @click="resetForm(ruleFormRef)"
                  >
                    清除
                  </el-button>
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
        <!-- 隱藏的 HTML 表單，因為 emailjs 似乎只能支援原生 form 表單格式 -->
        <form id="hidden-form" ref="htmlFormRef">
          <input type="text" name="name" :value="ruleForm.name" />
          <input type="email" name="email" :value="ruleForm.email" />
          <textarea v-model="ruleForm.message" name="message"></textarea>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useOverlayStore } from '~/stores/overlayStore.js'
  const overlayStore = useOverlayStore()
  import emailjs from '@emailjs/browser'

  const btnLoading = ref(false)
  const ruleFormRef = ref(null)
  const ruleForm = reactive({
    name: '',
    email: '',
    message: ''
  })

  // 自訂義驗證規則
  const validateEmail = (rule, value, callback) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (value === '') {
      return callback(new Error('請輸入您的電子郵件'))
    } else if (!regex.test(value)) {
      return callback(new Error('請輸入正確的電子郵件'))
    } else {
      callback()
    }
  }
  // 驗證規則
  const rules = reactive({
    name: [
      {
        required: true,
        message: '請輸入您的姓名',
        trigger: ['blur', 'change']
      }
    ],
    email: [
      {
        validator: validateEmail,
        required: true,
        // message: '請輸入您的電子郵件',
        trigger: ['blur', 'change']
      }
    ],
    message: [
      {
        required: true,
        message: '請輸入您的留言',
        trigger: ['blur', 'change']
      }
    ]
  })

  const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate(async (valid, fields) => {
      if (valid) {
        btnLoading.value = true
        overlayStore.showOverlay()
        // 建立 newRuleForm 因為 emailjs.send() 格式問題
        const newRuleForm = {
          name: ruleForm.name,
          email: ruleForm.email,
          message: ruleForm.message
        }
        try {
          await emailjs.send(
            process.env.NUXT_EMAILJS_SERVICE_ID,
            process.env.NUXT_EMAILJS_TEMPLATE_ID,
            newRuleForm,
            {
              publicKey: process.env.NUXT_EMAILJS_PUBLIC_KEY
            }
          )
          successMessage()
          formEl.resetFields()
        } catch (error) {
          console.log(error)
          errorMessage()
          formEl.resetFields()
        } finally {
          btnLoading.value = false
          overlayStore.hideOverlay()
        }
      } else {
        console.log('log error submit!', fields)
      }
    })
  }

  const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
  }

  const successMessage = () => {
    ElMessage({
      duration: 3000,
      message: '已成功送出留言! 感謝您的來信，將會盡快回覆您。',
      type: 'success',
      offset: 48
    })
  }
  const errorMessage = () => {
    ElMessage({
      duration: 3000,
      message: '尚未送出留言! 系統發生異常，請稍候再試。',
      type: 'error',
      offset: 48
    })
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_contact.scss';
  @import '../assets/scss/components/_button.scss';

  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 100x;
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

  form#hidden-form {
    visibility: hidden;
    display: none;
    textarea {
      height: 24.39px;
    }
  }
</style>
