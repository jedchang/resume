<template>
  <nav class="m-navbar">
    <a href="#" class="m-navbar-brand">
      <span class="special">Jed</span>Chang.
    </a>
    <div class="m-toggle" :class="{ active: toggle }" @click="handleToggle()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="m-navbar-collapse" :class="{ open: toggle }">
      <ul class="m-navbar-nav ml-auto">
        <li class="m-nav-item" :class="{ active: activeSection === 'home' }">
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('home'), handleToggle()"
          >
            Home
          </button>
        </li>
        <li
          class="m-nav-item"
          :class="{ active: activeSection === 'portfolio' }"
        >
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('portfolio'), handleToggle()"
          >
            Portfolio
          </button>
        </li>
        <li class="m-nav-item" :class="{ active: activeSection === 'skills' }">
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('skills'), handleToggle()"
          >
            Skills
          </button>
        </li>
        <li class="m-nav-item" :class="{ active: activeSection === 'resume' }">
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('resume'), handleToggle()"
          >
            Resume
          </button>
        </li>
        <li class="m-nav-item" :class="{ active: activeSection === 'about' }">
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('about'), handleToggle()"
          >
            About
          </button>
        </li>
        <li class="m-nav-item" :class="{ active: activeSection === 'contact' }">
          <button
            type="button"
            class="m-nav-link"
            @click="scrollToSection('contact'), handleToggle()"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  const toggle = ref(false)

  const handleToggle = () => {
    toggle.value = !toggle.value
    const body = document.querySelector('body')
    if (body.classList.contains('no-scroll')) {
      body.classList.remove('no-scroll')
    } else {
      body.classList.add('no-scroll')
    }
  }

  const handleScroll = () => {
    const sections = [
      'home',
      'portfolio',
      'skills',
      'resume',
      'about',
      'contact'
    ]
    let currentSection = 'home'

    sections.forEach((sectionId) => {
      const section = document.querySelector(`#${sectionId}`)
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      if (
        window.scrollY + window.innerHeight / 2 >= sectionTop &&
        window.scrollY + window.innerHeight / 2 <= sectionTop + sectionHeight
      ) {
        currentSection = sectionId
      }
    })
    // 更新 activeSection
    activeSectionStore.setActiveSection(currentSection)
  }

  import { useActiveSectionStore } from '~/stores/activeSection.js'
  const activeSectionStore = useActiveSectionStore()
  // 使用 computed 函數來獲取 activeSection
  const activeSection = computed(() => activeSectionStore.activeSection)

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      // 更新 activeSection
      activeSectionStore.setActiveSection(sectionId)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style lang="scss">
  @import '../assets/scss/components/_mobileNavbar.scss';
</style>
