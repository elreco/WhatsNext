<template>
  <div>
    <header-component></header-component>
    <main>
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-top bg-cover"
          style="background-image: url('/images/restaurant-wallpaper-2.jpg')"
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
            v-if="!loading && restaurants.length === 0"
          >
            <span class="text-xl inline-block mr-5 align-middle">
              <i class="fas fa-times" />
            </span>
            <span class="inline-block align-middle mr-8">
              <b class="capitalize">No result!</b> There is no restaurant right
              here!
            </span>
          </div>
          <div
            class="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8 -mt-64"
          >
            <loader-grid-component v-if="loading" />
            <restaurant-card-component
              v-else
              v-for="restaurant in restaurants"
              :key="restaurant.id"
              :restaurant="restaurant"
            ></restaurant-card-component>
          </div>
          <div class="text-center">
            <pagination-component
              v-if="total && perPage && !loading && restaurants.length > 0"
              :total="total"
              :per-page="perPage"
              :current-page="currentPage()"
            />
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
import PaginationComponent from "@/components/Pagination";
import RestaurantCardComponent from "@/components/restaurant/Card";
import LoaderGridComponent from "@/components/loader/Grid";

export default {
  name: "home",
  data() {
    return {
      appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : "Nobody",
      location: "485 7th Ave, New York, NY 10018",
      categories: "restaurants",
      restaurants: [],
      perPage: 18,
      total: 0,
      loading: true,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    RestaurantCardComponent,
    LoaderGridComponent,
  },
  async mounted() {
    this.getRestaurants();
  },
  watch: {
    async "$route.query"() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      await this.getRestaurants();
    },
  },
  methods: {
    currentPage() {
      return this.$route.query.page
        ? parseInt(this.$route.query.page)
        : parseInt(1);
    },
    async getRestaurants() {
      this.loading = true;
      const { data } = await this.axios.get("businesses/search", {
        params: {
          offset: (this.currentPage() - 1) * this.perPage,
          limit: this.perPage,
          location: this.location,
          categories: this.categories,
        },
      });
      this.restaurants = data && data.businesses;
      this.total = data.total;
      setTimeout(() => (this.loading = false), 500);
    },
  },
};
</script>
