<template>
  <nav
    class="
      top-0
      absolute
      z-50
      w-full
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto lg:static lg:block lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-white
          "
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >{{appName}}</a
        ><button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="
          lg:flex
          flex-grow
          items-center
          bg-white
          lg:bg-transparent lg:shadow-none
        "
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <router-link
              class="
                lg:hover:text-yellow-500
                px-3
                py-4
                lg:py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              :to="{ name: 'home' }"
              :class="
                $route.name === 'home'
                  ? 'lg:text-yellow-500 text-yellow-500'
                  : 'lg:text-white text-gray-800'
              "
            >
              Home</router-link
            >
          </li>
          <li class="flex items-center">
            <router-link
              class="
                lg:hover:text-yellow-500
                px-3
                py-4
                lg:py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              :to="{ name: 'restaurant.index' }"
              :class="
                $route.name === 'restaurant.index'
                  ? 'lg:text-yellow-500 text-yellow-500'
                  : 'lg:text-white text-gray-800'
              "
            >
              Restaurants</router-link
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link :to="{ name: 'restaurant.index' }"
              class="
                bg-white
                text-gray-800
                active:bg-gray-100
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1 lg:mb-0
                ml-3
                mb-3
              "
              type="button"
              style="transition: all 0.15s ease 0s"
            >
              <i class="fas fa-search-location"></i> Browse Restaurants
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'Nobody'
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
