<template>
  <nav class="navbar navbar-hover navbar-expand-lg navbar-soft">
    <div class="container">
      <a href="#" class="navbar-brand">
        <span class="special">Jed</span>Chang.
      </a>
      <div class="navbar-collapse justify-content-between collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" :class="{ active: activeSection === 'home' }">
            <a
              href="#home"
              class="nav-link"
              @click.prevent="scrollToSection('home')"
              >Home</a
            >
          </li>
          <li class="nav-item" :class="{ active: activeSection === 'about' }">
            <a
              href="#about"
              class="nav-link"
              @click.prevent="scrollToSection('about')"
              >About</a
            >
          </li>
          <li class="nav-item" :class="{ active: activeSection === 'resume' }">
            <a
              href="#resume"
              class="nav-link"
              @click.prevent="scrollToSection('resume')"
              >Resume</a
            >
          </li>
          <li class="nav-item" :class="{ active: activeSection === 'skills' }">
            <a
              href="#skills"
              class="nav-link"
              @click.prevent="scrollToSection('skills')"
              >Skills</a
            >
          </li>
          <li
            class="nav-item"
            :class="{ active: activeSection === 'portfolio' }"
          >
            <a
              href="#portfolio"
              class="nav-link"
              @click.prevent="scrollToSection('portfolio')"
              >Portfolio</a
            >
          </li>
          <li class="nav-item" :class="{ active: activeSection === 'contact' }">
            <a
              href="#contact"
              class="nav-link"
              @click.prevent="scrollToSection('contact')"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const activeSection = ref('home')

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 95) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }

    const sections = [
      'home',
      'about',
      'resume',
      'skills',
      'portfolio',
      'contact'
    ]
    let currentSection = 'home'
    sections.forEach((sectionId) => {
      const section = document.querySelector(`#${sectionId}`)
      const sectionTop = section.offsetTop //表示某個 section 的頂部距離整個頁面頂部的垂直距離。
      const sectionHeight = section.offsetHeight //表示這個 section 的高度，從頂部到底部的像素高度。
      // window.scrollY：表示網頁目前滾動的垂直距離（從頁面頂部到目前滾動位置的像素距離）。
      // window.innerHeight / 2：表示瀏覽器窗口高度的一半，用來計算視窗的中間位置。
      if (
        window.scrollY + window.innerHeight / 2 >= sectionTop &&
        window.scrollY + window.innerHeight / 2 <= sectionTop + sectionHeight
      ) {
        currentSection = sectionId
      }
    })
    activeSection.value = currentSection
  }

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
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
  @import '../assets/scss/components/_navbar.scss';
</style>
