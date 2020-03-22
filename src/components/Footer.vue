<template>
      <section class="container mx-auto p-2 justify-center mt-2 sm:mt-6">
            <p class="text-2xl text-gray-700 text-center mb-4">Spread the word: </p>
            <div class="flex items-center justify-center flex-wrap mb-12">
                <div class="m-2 lg:m-4">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.ghana-covid19-updates-signup.netlify.com" class="text-white font-semibold py-2 px-4 lg:py-4 lg:px-6 border border-blue rounded inline-flex items-center">
                      <img
                          src="../assets/images/facebook.png"
                          alt="Facebook share"
                          class="h-4 lg:h-8 w-auto mr-2"
                      />
                      <span class="text-gray-700 lg:text-lg">Share</span>
                    </a>
                </div>
                
                <div class="m-2 sm:m-4">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.ghana-covid19-updates-signup.netlify.com&title=Ghana%20Health%20Service%20COVID-19%20Updates&summary=&source="
                       class="text-white font-semibold py-2 px-4 lg:py-4 lg:px-6 border border-red rounded inline-flex items-center">
                      <img
                          src="../assets/images/linkedln.png"
                          alt="Linkedin share"
                          class="h-4 sm:h-8 w-auto mr-2"
                      />
                      <span class="text-gray-700">Share</span>
                      <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </a>
                </div>
                
                <div class="m-2 sm:m-4">
                    <a href="https://twitter.com/intent/tweet?url=https://www.ghana-covid19-updates-signup.netlify.com" class="text-white font-semibold py-2 px-4 lg:py-4 lg:px-6 border border-blue rounded inline-flex items-center">
                    <img
                        src="../assets/images/twitter.png"
                        alt="Tweet"
                        class="h-4 sm:h-8 w-auto mr-2"
                    />
                    <span class="text-gray-700">Tweet</span>
                    <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </a>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
