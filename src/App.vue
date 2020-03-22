<template>
   <div id="app" class="container mx-auto p-4">   
    <hero-page/>
    <Footer/>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
   Footer,
    HeroPage
  },
  metaInfo: {
    // Children can override the title.
    title: 'Sign Up',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Ghana Health Service COVID-19 Updates',
    // Define meta tags here.
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Subscribe to get COVID-19 Information / Updates delivered right to you from Ghana Health Service.'},

      {property: 'og:title', content: 'Sign Up ← Ghana Health Service COVID-19 Updates'},
      {property: 'og:site_name', content: 'Ghana Health Service COVID-19 Updates'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://www.ghana-covid19-updates-signup.netlify.com'},
      {property: 'og:image', content: 'https://ghanahealthservice.org/images/ghs-logo.png'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Subscribe to get COVID-19 Information / Updates delivered right to you from Ghana Health Service.'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://www.ghana-covid19-updates-signup.netlify.com'},
      {name: 'twitter:title', content: 'Sign Up ← Ghana Health Service COVID-19 Updates'},
      {name: 'twitter:description', content: 'Subscribe to get COVID-19 Information / Updates delivered right to you from Ghana Health Service.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:image:src', content: 'https://ghanahealthservice.org/images/ghs-logo.png'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Sign Up ← Ghana Health Service COVID-19 Updates'},
      {itemprop: 'description', content: 'Subscribe to get COVID-19 Information / Updates delivered right to you from Ghana Health Service.'},
      {itemprop: 'image', content: 'https://ghanahealthservice.org/images/ghs-logo.png'}

    ],
    link: [
      {rel: 'canonical', href: 'https://www.ghana-covid19-updates-signup.netlify.com'}
    ]
  }
}
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');


#app,h3{
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
