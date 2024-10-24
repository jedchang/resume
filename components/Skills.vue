<template>
  <section id="skills">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SectionTitle>
            <template #tw> 主要技能 </template>
            <template #en> Main Skills </template>
          </SectionTitle>
        </div>
        <div v-for="item in skillsData" :key="item.name" class="col-lg-4">
          <div class="skill-item">
            <div class="skill-icon">
              <Icon v-if="item.icon1" :name="item.icon1"></Icon>
              <Icon v-if="item.icon2" :name="item.icon2"></Icon>
            </div>
            <h4 class="skill-name">{{ item.name }}</h4>
            <ul>
              <li v-for="list in item.content" :key="list">
                <Icon name="bi:check"></Icon>
                {{ list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const skillsData = [
    {
      icon1: 'devicon:vuejs',
      icon2: 'logos:nuxt-icon',
      name: 'Vue.js | Nuxt.js',
      content: [
        '熟悉 Composition API 用法',
        '熟悉 Options API 用法',
        '熟悉 Vuex、Pinia 應用',
        '熟悉 Vue Router 應用',
        '使用 Element plus 表單驗證',
        'Nuxt2、Nuxt3 應用'
      ]
    },
    {
      icon1: 'devicon:javascript',
      icon2: 'devicon:jquery',
      name: 'JavaScript | jQuery',
      content: [
        '熟悉 JavaScript 基礎與 ES6 用法',
        '使用 jQuery、plugin 應用',
        '熟悉串接 Restful API',
        '使用 AJAX、JSON 串接第三方 API',
        '瞭解 ESLint 強化程式碼品質'
      ]
    },
    {
      icon1: 'devicon:css3',
      icon2: 'vscode-icons:file-type-scss',
      name: 'CSS | SCSS',
      content: [
        '熟悉 CSS 基礎與 SCSS 用法',
        '手刻 RWD 響應式網頁',
        '瞭解 Tailwind CSS 用法',
        '瞭解 UnoCSS 用法',
        '瞭解 Prettier 統一程式碼風格'
      ]
    },
    {
      icon1: 'devicon:git',
      icon2: 'simple-icons:github',
      name: 'Git | GitHub',
      content: [
        '熟悉 Git 版本控制',
        '瞭解 Git Flow 工作流程',
        '使用 GitHub Pages 部署靜態網頁',
        '使用 Sourcetree GUI 介面'
      ]
    },
    {
      icon1: 'logos:figma',
      icon2: 'logos:adobe-xd',
      name: 'Web Layout',
      content: [
        '熟悉 Figma 工具',
        '熟悉 Figma Auto Layout 功能',
        '熟悉 Figma Prototype 互動原型',
        '熟悉 Adobe XD 工具'
      ]
    },
    {
      icon1: 'devicon:photoshop',
      icon2: 'skill-icons:illustrator',
      name: 'Design Tools',
      content: ['熟悉 Photoshop 工具', '熟悉 illustrator 工具']
    }
  ]
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/_skills.scss';
  :deep(.section-title) {
    h3.tw {
      span {
        &::before {
          right: 100px;
        }
        &::after {
          left: 100px;
        }
      }
    }
    h2.en {
      background-image: linear-gradient(180deg, #fdd196, #b18b59 50%, #242529);
    }
  }
</style>
