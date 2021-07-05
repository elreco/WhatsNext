<template>
  <div>
    <header-component></header-component>
    <main>
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="
            !loading && restaurant
              ? `background-image: url('${
                  restaurant.image_url
                    ? restaurant.image_url
                    : '/images/placeholder.jpg'
                }')`
              : `background-image: url('/images/placeholder.jpg')`
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
          <template v-else>
            <restaurant-box-component
              :restaurant="restaurant"
            ></restaurant-box-component>

            <h3
              class="
                text-4xl
                w-8/12
                lg:w-3/12
                font-semibold
                leading-normal
                text-blueGray-700
                border-b-4 border-yellow-500
                mb-0
              "
            >
              Reviews
            </h3>
            <restaurant-comment-card-component
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
            ></restaurant-comment-card-component>
          </template>
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
import RestaurantCommentCardComponent from "@/components/restaurant/CommentCard";
import LoaderBoxComponent from "@/components/loader/Box";

export default {
  name: "home",
  data() {
    return {
      appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : "Nobody",
      restaurant: {},
      comments: [],
      loading: true,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    RestaurantCommentCardComponent,
    RestaurantBoxComponent,
    LoaderBoxComponent,
  },
  async mounted() {
    this.loading = true;
    this.getRestaurant();
    this.getComments();
    setTimeout(() => (this.loading = false), 500);
  },
  methods: {
    async getRestaurant() {
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
    },
    async getComments() {
      try {
        const { data } = await this.axios.get(
          `businesses/${this.$route.params.id}/reviews`
        );
        this.comments = data && data.reviews ? data.reviews : [];
      } catch (error) {
        this.comments = [];
      }
    },
  },
};
</script>
