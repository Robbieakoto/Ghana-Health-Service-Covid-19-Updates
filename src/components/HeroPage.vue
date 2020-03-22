<template>
        <Section class="container mx-auto p-2 justify-center">
            <div class="mx-auto lg:justify-start md:pt-10">
                <div class="text-center mx-auto">
                    <div class="mb-10 sm:mb-24">
                        <h2 class="mt-4 text-3xl font-bold text-gray-900 lg:text-6xl sm:text-4xl">Ghana Health Service Corona Virus <br class="sm:hidden"> (COVID-19) Updates</h2>
                        <p class="mt-2 w-full sm:w-2/3 text-base sm:text-lg lg:text-xl text-gray-600 mx-auto">
                            Subscribe to get COVID-19 Information delivered right to you from <br class="hidden lg:block"> Ghana Health Service.
                        </p>
                    </div>

                    <section class="container mx-auto my-4 sm:my-10">
                        <div class="w-full sm:w-2/3 lg:w-1/3 mx-auto">
                            <input type="email" v-model.trim="email" class="sm:h-16 sm:text-xl rounded-md p-4 text-gray-800 bg-white w-full border-2 border-gray-300 placeholder-gray-500" placeholder="Enter your email here" autofocus/>
                            <button class="mt-2 lg:mt-6 bg-blue-700 text-white p-4 rounded-md w-full mt-4 sm:text-xl" @click="addSubscriber">Subscribe</button>
                        </div>
                    </section>
                    </div>
                </div>
            </Section> 
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