<template>
    <div id="heropage" class="mx-auto">
        <div class="text-white">
        <Section class="container mx-auto p-2 justify-center">
            <div class="mx-auto leading-tight lg:justify-start md:pt-10">
                <div class="text-center mx-auto">
                    <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Don't miss out on the news! Stay Healthy always!</h2>
                    
                    <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto md:mb-12">
                        Get updates on the latest news about Corona Virus.
                    </p>

                    <section class="invisible container mx-auto">
                        <div class="md:visible sm:invisible">
                            <form class="container mx-auto" @submit="addSubscriber">
                                <div>
                                    <div class="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
                                        <input type="text" name="" id="email" v-model.trim="email" placeholder="Enter your mail" class="h-16 text-gray-700 w-64 flex-1 px-8 text-lg focus:outline-none" autofocus>
                                        <button @click="addSubscriber" class="bg-blue-700 w-32 font-bold text-secondary rounded-full">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>

                    <section>
                        <div class="flex items-center justify-center mb-12">
                            <div class="w-full max-w-md">
                                <section class="flex items-center justify-center w-full">
                                    <div class="text-gray-600 lg:invisible md:invisible sm:visible">
                                        <input type="email" class="rounded-full p-4 text-gray-800 bg-white w-full" placeholder="Email"/>
                                        <button class="bg-blue-700 text-white p-4 rounded-full w-full mt-4">Subscribe now!</button>
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
// import Footer from './components/Footer.vue'

export default {
  name: 'HeroPage',
  data(){
      return {
        //   newSubscriber: {
        //       email:'',
        //       telephone:''
        //   }
        email: '',
        telephone: '',
      }
  },
  methods: {
      addSubscriber(e) {
          e.preventDefault();
        //   subscribers.add(this.newSubscriber);
        //     this.newSubscriber.email = '';
        axios.post('https://cors-anywhere.herokuapp.com/https://ghana-covid-19-info-system-backend.netlify.com/.netlify/functions/add-subscriber', {
            email: this.email,
            telephone: this.telephone
        })
        .then(response => (console.log(response.data)))
        .catch(error => (console.log(error)))
      },
      printButton() {
          alert('button clicked')
      }
  }
}
</script>