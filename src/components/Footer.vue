<template>
  <div id="footer">
    <div>
      <section class="container mx-auto p-2 justify-center">
            <p class="text-3xl text-gray-700 text-center mb-12">Spread the word</p>
            <div class="flex items-center justify-center flex-wrap mb-12">
                <div class="m-3">
                    <button class="text-white font-semibold py-2 px-4 border border-blue rounded py-4 px-6 inline-flex items-center">
                    <img
                        src="../assets/images/facebook.png"
                        alt="Visa Logo"
                        class="h-6 w-auto mr-4"
                    />
                    <span class="mr-2 text-gray-700">Share</span>
                    </button>
                </div>
                
                <div class="m-3">
                    <button class="text-white font-semibold py-2 px-4 border border-red rounded py-4 px-6 inline-flex items-center">
                    <img
                        src="../assets/images/instagram.svg"
                        alt="Visa Logo"
                        class="h-6 w-auto mr-4"
                    />
                    <span class="mr-2 text-gray-700">Share</span>
                    <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </button>
                </div>
                
                <div class="m-3">
                    <button class="text-white font-semibold py-2 px-4 border border-blue rounded py-4 px-6 inline-flex items-center">
                    <img
                        src="../assets/images/twitter.png"
                        alt="Visa Logo"
                        class="h-6 w-auto mr-4"
                    />
                    <span class="mr-2 text-gray-700">Tweet</span>
                    <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </button>
                </div>
            </div>
        </section>
    </div>
  </div>
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
