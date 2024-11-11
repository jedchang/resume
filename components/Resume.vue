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
        <div class="col-lg-12">
          <el-tabs v-model="activeName" type="card" @tab-click="handleTabs">
            <el-tab-pane label="Experience" name="experience">
              <template #label>
                <span class="item-title">
                  <Icon name="fa6-solid:briefcase"></Icon>
                  <span>Experience</span>
                </span>
              </template>
              <Swiper
                v-if="showSwiper"
                v-bind="experienceOptions"
                :initial-slide="0"
                :pagination="{ clickable: true }"
              >
                <SwiperSlide
                  v-for="(experience, index) in experienceData"
                  :key="index"
                >
                  <div class="item">
                    <h6 class="date">
                      <span class="ripple"></span>
                      {{ experience.date }}
                    </h6>
                    <h5 class="title">{{ experience.title }}</h5>
                    <h4 class="company">{{ experience.company }}</h4>
                    <ul>
                      <li
                        v-for="(c_item, c_index) in experience.content"
                        :key="c_index"
                      >
                        {{ c_item }}
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </el-tab-pane>
            <el-tab-pane label="Education" name="education">
              <template #label>
                <span class="item-title">
                  <Icon name="fa6-solid:graduation-cap"></Icon>
                  <span>Education</span>
                </span>
              </template>
              <Swiper
                v-if="showSwiper"
                v-bind="educationOptions"
                :initial-slide="0"
                :pagination="{ clickable: true }"
              >
                <SwiperSlide
                  v-for="(education, index) in educationData"
                  :key="index"
                >
                  <div class="item">
                    <h6 class="date">
                      <span class="ripple"></span>
                      {{ education.date }}
                    </h6>
                    <h5 class="title">{{ education.title }}</h5>
                    <h4 class="school">{{ education.school }}</h4>
                    <p>{{ education.content }}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </el-tab-pane>
            <el-tab-pane label="Awards" name="awards">
              <template #label>
                <span class="item-title">
                  <Icon name="fa6-solid:trophy"></Icon>
                  <span>Awards</span>
                </span>
              </template>
              <Swiper
                v-if="showSwiper"
                v-bind="awardsOptions"
                :initial-slide="0"
                :pagination="{ clickable: true }"
              >
                <SwiperSlide v-for="(awards, index) in awardsData" :key="index">
                  <div class="item">
                    <h6 class="date">
                      <span class="ripple"></span>
                      {{ awards.date }}
                    </h6>
                    <ul>
                      <li
                        v-for="(t_item, t_index) in awards.tournament"
                        :key="t_index"
                      >
                        <span class="title">
                          {{ t_item.title }}
                        </span>
                        <Icon name="fa6-solid:trophy"></Icon>
                        <span class="ranking">{{ t_item.ranking }}</span>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const experienceData = [
    {
      date: '2013/10 - 2024/10',
      title: 'Senior Front-End Engineer',
      company: '精英電腦股份有限公司',
      content: [
        '負責官方網站內容開發及日常維護，確保網站功能與內容的穩定運行。',
        '專案活動網站的開發、建置與維護，同時參與 UI/UX 設計，提升使用者體驗。',
        '內部系統的開發建置，並協助 APP 介面設計，提供 UI/UX 設計支持。',
        '主導內部 Gitea 平台的多人協作開發流程，提升團隊協作效率。',
        '使用 PM2 部署應用程式至 AWS S3，提升服務穩定性。',
        '製作廣告與文宣 Banner，確保視覺傳達的一致性與專業性。',
        '熟練使用 Figma、Adobe XD 等設計工具，進行高效 UI/UX 設計。'
      ]
    },
    {
      date: '2007/12 - 2013/04',
      title: 'Senior Web Designer',
      company: '華智通信股份有限公司',
      content: [
        '負責官方網站的內容開發與維護，確保功能更新與內容的一致性。',
        '活動網站及產品網頁的開發與建置，以符合行銷與用戶需求。',
        '系統介面的 UI/UX 設計，提升使用者操作體驗與介面美感。',
        '平面設計製作，包括產品包裝、DM、海報及名片等印刷品設計',
        '廣告與網頁 Banner 製作，強化視覺吸引力並支持行銷需求。',
        '活動主視覺設計與大型輸出物設計，展現品牌形象與活動主題。',
        '影音動畫及多媒體製作，增強互動性與品牌傳播效果。'
      ]
    },
    {
      date: '2005/05 - 2007/12',
      title: 'Web Designer',
      company: '安納賽思股份有限公司',
      content: [
        '官方網站內容開發與日常維護，確保網站穩定運行並支持行銷活動。',
        '產品網頁建置與設計，從視覺設計到功能實現，提升用戶體驗。',
        '系統 GUI 介面設計，確保操作界面的美觀性和易用性。',
        '廣告與網頁 Banner 製作，提升品牌視覺吸引力。',
        '產品拍攝與修圖，確保產品影像的質量與一致性。',
        '平面設計，包括產品包裝、DM 及 CIS 視覺識別系統，強化品牌形象。',
        '活動相關大型輸出物設計，支援活動需求並突顯品牌視覺主題。'
      ]
    },
    {
      date: '2000/07 - 2001/06',
      title: 'Designer',
      company: '羚傑企業有限公司',
      content: [
        '平面文宣設計，為品牌和產品提供高效的視覺傳達方案。',
        'DM、海報及廣告設計，提升宣傳材料的吸引力與資訊傳達效果。',
        '印刷製作管理，確保成品品質符合設計與品牌標準。',
        '影音多媒體製作，增強互動性並提升品牌的數位影響力。'
      ]
    }
  ]
  const educationData = [
    {
      date: '2001 - 2003',
      title: 'Ling Tung University',
      school: '嶺東科技大學',
      content: '視覺傳達設計系'
    },
    {
      date: '1999 - 2001',
      title: 'Ling Tung Institute of Technology',
      school: '嶺東技術學院',
      content: '商業設計科'
    },
    {
      date: '1995 - 1998',
      title: 'Taibei High School',
      school: '泰北高級中學',
      content: '美術工藝科'
    }
  ]
  const awardsData = [
    {
      date: '2005',
      tournament: [
        {
          title: '全國網頁設計比賽',
          ranking: '社會組‧第一名'
        }
      ]
    },
    {
      date: '2004',
      tournament: [
        {
          title: '國防部網路心戰傳單賽',
          ranking: '第一名'
        },
        {
          title: '第五屆全國網頁設計比賽',
          ranking: '人文獎'
        },
        {
          title: '第四十屆國軍文藝金像獎',
          ranking: '漫畫項‧優選'
        }
      ]
    },
    {
      date: '2003',
      tournament: [
        {
          title: '第四屆全國網頁設計比賽',
          ranking: '優等獎'
        },
        {
          title: '淨化選風海報設計比賽',
          ranking: '金獎'
        },
        {
          title: '絕對伏特加杯墊設計比賽',
          ranking: '優選'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '公共服務項‧佳作'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '企業形象項‧入圍'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '交通項‧入圍'
        }
      ]
    },
    {
      date: '2002',
      tournament: [
        {
          title: '三久牧場商標徵選',
          ranking: '第三名'
        },
        {
          title: '交通安全宣導海報設計',
          ranking: '第三名'
        },
        {
          title: '91資訊月網站設計比賽',
          ranking: '佳作'
        },
        {
          title: '四健會五十週年網頁設計',
          ranking: '最佳視覺獎'
        },
        {
          title: '第三屆全國網頁設計比賽',
          ranking: '科技獎'
        },
        {
          title: '空氣汙染防制網頁設計比賽',
          ranking: '佳作'
        },
        {
          title: '台灣農業策略聯盟基金會會徽',
          ranking: '佳作'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '交通項‧入圍'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '事務器材項‧入圍'
        },
        {
          title: '時報廣告金犢獎',
          ranking: '速食食品項‧入圍'
        },
        {
          title: '91 資訊月全國海報徵選',
          ranking: '佳作'
        },
        {
          title: 'PAPER 海報創作競賽',
          ranking: '佳作'
        }
      ]
    },
    {
      date: '2001',
      tournament: [
        {
          title: '「愛」海報設計比賽',
          ranking: '評審獎'
        }
      ]
    },
    {
      date: '2000',
      tournament: [
        {
          title: '繪出水稻之美比賽',
          ranking: '第三名'
        },
        {
          title: '中區國稅局形象標誌',
          ranking: '佳作'
        },
        {
          title: '春輝才藝競賽海報創作',
          ranking: '佳作'
        }
      ]
    },
    {
      date: '1999',
      tournament: [
        {
          title: '台北市交通局局徽',
          ranking: '第二名'
        },
        {
          title: '名人政治漫畫比賽',
          ranking: '第三名'
        },
        {
          title: '第一屆鏡入台中攝影比賽',
          ranking: '入選'
        }
      ]
    },
    {
      date: '1997',
      tournament: [
        {
          title: '重現雙溪之美寫生比賽',
          ranking: '第一名'
        },
        {
          title: '捷運之美海報比賽',
          ranking: '佳作'
        },
        {
          title: '內湖區第三屆繪畫比賽',
          ranking: '佳作'
        }
      ]
    }
  ]
  const activeName = ref('experience')
  const showSwiper = ref(true)

  const handleTabs = (tab) => {
    activeName.value = tab.props.name
    showSwiper.value = false
    setTimeout(() => {
      showSwiper.value = true // 重新顯示 Swiper，重置 initialSlide
    }, 400)
  }
  const experienceOptions = {
    modules: [SwiperAutoplay, SwiperPagination],
    speed: 500,
    // autoplay: {
    //   delay: 2500
    // },
    slidesPerView: 2,
    grabCursor: true
  }
  const educationOptions = {
    modules: [SwiperAutoplay, SwiperPagination],
    speed: 500,
    slidesPerView: 3,
    grabCursor: true
  }
  const awardsOptions = {
    modules: [SwiperAutoplay, SwiperPagination],
    speed: 500,
    slidesPerView: 3,
    grabCursor: true
  }
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
