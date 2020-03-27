<template>
  <section class="container mx-auto p-2 justify-center">
    <div class="mx-auto lg:justify-start md:pt-10">
      <div class="text-center mx-auto">
        <div class="mb-10 sm:mb-24">
          <h2 class="mt-4 text-3xl font-bold text-gray-900 lg:text-6xl sm:text-4xl">
            Ghana Health Service Corona Virus
            <br class="sm:hidden" />(COVID-19) Updates
          </h2>
          <p class="mt-2 w-full sm:w-2/3 text-base sm:text-lg lg:text-xl text-gray-600 mx-auto">
            Subscribe to get COVID-19 Information delivered right to you from
            <br class="hidden lg:block" />Ghana Health Service.
          </p>
        </div>

        <form class="container mx-auto my-4 sm:my-10" @submit.prevent="addSubscriber">
          <div class="w-full sm:w-2/3 lg:w-1/3 mx-auto">
            <div class="message-container my-4">
              <div
                v-if="isSubscribed"
                class="text-left bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong class="font-bold">You've been added to the list</strong>
                <!-- <span class="block sm:inline">You've been added to the list</span> -->
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    @click="isSubscribed = false"
                  >
                    <title>Close</title>
                    <path
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                  </svg>
                </span>
              </div>
              <div
                v-if="!validEmail"
                class="text-left bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong class="font-bold">Please Enter a valid Email Address</strong>
                <!-- <span class="block sm:inline">You've been added to the list</span> -->
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    @click="validEmail = true"
                  >
                    <title>Close</title>
                    <path
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <input
              type="email"
              v-model.trim="email"
              class="sm:h-16 sm:text-xl rounded-md p-4 text-gray-800 bg-white w-full border-2 border-gray-300 placeholder-gray-500"
              placeholder="Enter your email here"
              required
              autofocus
            />
            <button
              class="mt-2 lg:mt-6 bg-blue-700 text-white p-4 rounded-md w-full mt-4 sm:text-xl"
              type="submit"
            >{{ isLoading ? 'Adding Email...' : 'Subscribe'}}</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroPage",
  data() {
    return {
      email: "",
      telephone: "",
      isSubscribed: false,
      validEmail: true,
      isLoading: false
    };
  },
  methods: {
    addSubscriber() {
      // eslint-disable-next-line
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email || !reg.test(this.email)) {
        this.validEmail = false;
        return;
      }
      this.isLoading = true;
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://ghana-covid-19-info-system-backend.netlify.com/.netlify/functions/add-subscriber",
          {
            email: this.email,
            telephone: this.telephone
          }
        )
        .then(response => {
          console.log(response.data);
          this.isLoading = false;
          this.isSubscribed = true;
          this.email = "";
        })
        .catch(error => console.log(error));
    }
    //   printButton() {
    //       alert('button clicked')
    //   }
  }
};
</script>