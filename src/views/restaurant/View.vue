<template>
  <div>
    <header-component></header-component>
    <main>
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="
            !loading && restaurant
              ? `background-image: url('${restaurant.image_url}')`
              : `background-image: url('/images/restaurant-wallpaper-2.jpg')`
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
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
      </section>
      <section class="relative py-16 bg-gray-300" style="min-height: 350px">
        <div class="container mx-auto px-4">
          <div
            class="
              text-white
              relative
              px-6
              py-4
              border-0
              rounded
              mb-4
              bg-pink-500
            "
            v-if="!loading && !restaurant"
          >
            <span class="text-xl inline-block mr-5 align-middle">
              <i class="fas fa-times" />
            </span>
            <span class="inline-block align-middle mr-8">
              <b class="capitalize">No result!</b> Restaurant not found!
            </span>
          </div>
          <loader-box-component v-if="loading" />
          <restaurant-box-component
            v-else
            :restaurant="restaurant"
          ></restaurant-box-component>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import RestaurantBoxComponent from "@/components/restaurant/Box";
import LoaderBoxComponent from "@/components/loader/Box";

export default {
  name: "home",
  data() {
    return {
      appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : "Nobody",
      restaurant: {},
      loading: true,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    RestaurantBoxComponent,
    LoaderBoxComponent,
  },
  async mounted() {
    this.getRestaurant();
  },
  methods: {
    async getRestaurant() {
      this.loading = true;
      try {
        const { data } = await this.axios.get(
          `businesses/${this.$route.params.id}`
        );
        if (data.alias === this.$route.params.alias) {
          this.restaurant = data;
        } else {
          this.restaurant = null;
        }
      } catch (error) {
        this.restaurant = null;
      }

      setTimeout(() => (this.loading = false), 500);
    },
  },
};
</script>
