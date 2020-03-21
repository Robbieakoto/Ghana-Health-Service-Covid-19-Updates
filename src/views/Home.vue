<template>
  <div id="home" class="md:my-38 lg:my-40 mx-auto p-4">   
    <hero-page/>
    <Footer/>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    HeroPage
  }
}
</script>