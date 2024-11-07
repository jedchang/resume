<template>
  <section id="resume">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SectionTitle :set-color="'isDark'">
            <template #tw> 工作經驗 & 教育背景 </template>
            <template #en> My Resume </template>
          </SectionTitle>
        </div>
        <div class="col-lg-6">
          <div class="experience">
            <div class="category">
              <Icon name="material-symbols:work-outline"></Icon>
              <h5>Experience</h5>
            </div>
            <div class="list">
              <div
                v-for="(item, index) in experienceData"
                :key="index"
                class="item"
              >
                <span class="ripple"></span>
                <h2 class="exp-time">
                  <Icon name="bxs:calendar"></Icon>
                  {{ item.time }}
                </h2>
                <h3 class="exp-title">{{ item.title }}</h3>
                <h4 class="company">{{ item.company }}</h4>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="education">
            <div class="category">
              <Icon name="mynaui:pencil"></Icon>
              <h5>Education</h5>
            </div>
            <div class="list">
              <div
                v-for="(item, index) in educationData"
                :key="index"
                class="item"
              >
                <span class="ripple"></span>
                <h2 class="edu-time">
                  <Icon name="bxs:calendar"></Icon>
                  {{ item.time }}
                </h2>
                <h3 class="edu-title">{{ item.title }}</h3>
                <h4 class="school">{{ item.school }}</h4>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const experienceData = [
    {
      time: '2013/10 - 2024/10',
      title: 'Senior Front-End Engineer',
      company: '精英電腦股份有限公司',
      content:
        '官方網站程式內容開發、維護與 UI/UX 設計，活動網站開發，廣告 Banner 製作，內部系統開發相關協助。'
    },
    {
      time: '2007/12 - 2013/4',
      title: 'Senior Web Designer',
      company: '華智通信股份有限公司',
      content:
        '官方網站內容設計與維護，網站與系統介面 UI/UX 設計，平面設計，廣告 Banner 製作，影音動畫製作等。'
    },
    {
      time: '2005/5 - 2007/12',
      title: 'Web Designer',
      company: '安納賽思股份有限公司',
      content: '官方網站內容設計與維護、GUI 介面設計，平面設計。'
    },
    {
      time: '2000/7 - 2001/6',
      title: 'Designer',
      company: '羚傑企業有限公司',
      content: '平面設計、UI 設計、印刷製作等。'
    }
  ]
  const educationData = [
    {
      time: '2001 - 2003',
      title: 'Ling Tung University',
      school: '嶺東科技大學',
      content: '視覺傳達設計系'
    },
    {
      time: '1999 - 2001',
      title: 'Ling Tung Institute of Technology',
      school: '嶺東技術學院',
      content: '商業設計科'
    },
    {
      time: '1995 - 1998',
      title: 'Taibei High School',
      school: '泰北高級中學',
      content: '美術工藝科'
    }
  ]
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_resume.scss';
  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 220px;
        }
        &::after {
          left: 220px;
        }
      }
    }
    h2.en {
      background-image: linear-gradient(180deg, #fdd196, #b18b59 50%, #242529);
    }
  }
</style>
