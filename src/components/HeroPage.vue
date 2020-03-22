<template>
    <div id="heropage" class="mx-auto">
        <div class="text-white">
        <Section class="container mx-auto p-2 justify-center">
            <div class="mx-auto lg:justify-start md:pt-10">
                <div class="text-center mx-auto">
                    <h2 class="mt-2 text-3xl font-bold text-gray-900 lg:text-6xl sm:text-4xl">Ghana Health Service Corona Virus <br class="sm:hidden"> (COVID-19) Updates</h2>
                    
                    <p class="mt-2 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-600 lg:mx-auto md:mb-12">
                        Subscribe to get COVID-19 Information delivered right to you from <br class="lg:hidden"> Ghana Health Service.
                    </p>

                    <section class="invisible container mx-auto">
                        <div class="md:visible sm:invisible">
                            <div class="container mx-auto">
                                <div class="flex md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 overflow-hidden mx-auto bg-white">
                                    <input type="email" v-model.trim="email" placeholder="Enter your email here" class="rounded-l-md h-16 sm:h-20 text-gray-700 w-64 flex-1 px-8 text-lg focus:outline-none border-2 border-gray-300 placeholder-gray-500" autofocus>
                                    <button @click="addSubscriber" class="bg-blue-700 w-32 font-bold text-secondary rounded-r-md">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section> 
                        <div class="flex items-center justify-center mb-12">
                            <div class="w-full max-w-md">
                                <section class="flex items-center justify-center w-full">
                                    <div class="text-gray-600 lg:invisible md:invisible sm:visible">
                                        <input type="email" v-model.trim="email" class="rounded-md p-4 text-gray-800 bg-white w-full border border-gray-300 placeholder-gray-500" placeholder="Enter your email here" autofocus/>
                                        <button class="bg-blue-700 text-white p-4 rounded-md w-full mt-4" @click="addSubscriber">Subscribe</button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </Section>
        </div>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeroPage',
  data(){
      return {
        email: '',
        telephone: '',
      }
  },
  methods: {
      addSubscriber(e) {
          e.preventDefault();
        axios.post('https://cors-anywhere.herokuapp.com/https://ghana-covid-19-info-system-backend.netlify.com/.netlify/functions/add-subscriber', {
            email: this.email,
            telephone: this.telephone
        })
        .then(response => (console.log(response.data)))
        .catch(error => (console.log(error)))
      },
    //   printButton() {
    //       alert('button clicked')
    //   }
  }
}
</script>