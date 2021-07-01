<template>
  <div>
    <header-component></header-component>
    <main>
      <div
        class="
          relative
          pt-16
          pb-32
          flex
          content-center
          items-center
          justify-center
        "
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('/images/restaurant-wallpaper.jpg')"
        >
          <div
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></div>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Welcome to <span class="text-yellow-500">WhatsNext</span>.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Hello Mark, Whatsnext is an app which allowing you to find
                  easily partner restaurants around your hotel.
                  <br /><strong>
                    Note that it's a
                    <span class="text-yellow-500">preview version</span> of
                    the final product. <br />Testing purpose only.</strong
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
          "
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center mt-0">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-24">
              <div
                class="
                  text-gray-600
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mb-6
                  shadow-lg
                  rounded-full
                  bg-gray-100
                "
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                WhatsNext, restaurant finder.
              </h3>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-4
                  mb-4
                  text-gray-700
                "
              >
                Your travel agency is testing a new tool to get the best
                restaurant experience.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                WhatsNext helps you to find the best restaurant around you.
              </p>
              <router-link
                :to="{ name: 'restaurant.index' }"
                class="font-bold text-gray-800 mt-8"
                >Browse restaurants
              </router-link>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-yellow
                  w-full
                  mb-6
                  shadow-lg
                  rounded-lg
                  bg-yellow-500
                "
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-yellow-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  name: "home",
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>
