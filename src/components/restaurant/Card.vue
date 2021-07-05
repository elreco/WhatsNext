<template>
  <div>
    <div class="wrapper antialiased text-gray-900 mb-5">
      <div>
        <router-link
          :to="{
            name: 'restaurant.view',
            params: { id: restaurant.id, alias: restaurant.alias },
          }"
        >
          <div
            class="w-full h-72 rounded-lg shadow-md relative overflow-hidden"
          >
            <div
              class="img-hover bg-center rounded-lg w-full h-full bg-cover"
              :style="`background-image:url(${
                restaurant.image_url
                  ? restaurant.image_url
                  : '/images/placeholder.jpg'
              })`"
            ></div>
          </div>
        </router-link>
        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg auto-rows-max">
            <div class="mb-2">
              <span
                class="
                  text-xs
                  px-2
                  inline-block
                  rounded-full
                  uppercase
                  font-semibold
                  tracking-wide
                  bg-indigo-200
                  text-indigo-800
                "
              >
                $ &bull; {{ displayPrice() }}
              </span>
            </div>

            <router-link
              :to="{
                name: 'restaurant.view',
                params: { id: restaurant.id, alias: restaurant.alias },
              }"
              class="
                h4
                hover:text-yellow-500
                mt-1
                block
                text-xl
                font-semibold
                uppercase
                leading-tight
                truncate
              "
            >
              {{ restaurant.name }}
            </router-link>
            <div
              class="
                mb-3
                text-gray-600
                uppercase
                text-xs
                font-semibold
                tracking-wider
              "
            >
              <span
                v-for="(categorie, index) in restaurant.categories"
                :key="categorie"
              >
                {{ categorie.title }}
                {{
                  index !== restaurant.categories.length - 1 ? "&bull; " : ""
                }}
              </span>
            </div>
            <div class="mt-1 mb-3" v-if="restaurant.location">
              <p
                class="text-gray-600 text-sm"
                v-for="(display_address, index) in restaurant.location
                  .display_address"
                :key="index"
              >
                {{ display_address }}
              </p>
            </div>
            <strong> </strong>
            <p>{{ displayDistance() }} kilometers aways</p>
            <div class="mt-4">
              <span :class="ratingColor()" class="text-md font-semibold"
                >{{ restaurant.rating }}/5 rating
              </span>
              <span class="text-sm text-gray-600"
                >(based on {{ restaurant.review_count }} ratings)</span
              >
            </div>
            <div class="w-full mt-3 text-right">
              <a
                class="
                  bg-yellow-500
                  text-white
                  active:bg-yellow-50
                  hover:bg-yellow-600
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
                "
                target="_blank"
                :href="restaurant.url"
                ><i class="fas fa-external-link-alt"></i> Order on Yelp</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  methods: {
    displayPrice() {
      var price = "Not expensive";
      if (this.restaurant.price === "$$") {
        price = "Average";
      } else if (this.restaurant.price === "$$$") {
        price = "Expensive";
      } else if (this.restaurant.price === "$$$$") {
        price = "Gastronomic";
      }
      return price;
    },
    displayDistance() {
      var km = this.restaurant.distance ? this.restaurant.distance / 1000 : 0;
      return km.toFixed(3);
    },
    ratingColor() {
      if (this.restaurant.rating <= 1) {
        return "text-red-400";
      }
      if (this.restaurant.rating <= 3 && this.restaurant.rating > 1) {
        return "text-yellow-400";
      }
      return "text-teal-600";
    },
  },
};
</script>
