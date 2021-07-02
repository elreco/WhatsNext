<template>
  <div>
    <div class="wrapper antialiased text-gray-900 mb-5">
      <div>
        <router-link
          :to="{ name: 'restaurant.view', params: { id: restaurant.id } }"
        >
          <div
            class="w-full h-72 rounded-lg shadow-md relative overflow-hidden"
          >
            <div
              class="img-hover bg-center rounded-lg w-full h-full bg-cover"
              :style="`background-image:url(${restaurant.image_url})`"
            ></div>
          </div>
        </router-link>
        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span
                class="
                  text-xs
                  px-2
                  inline-block
                  rounded-full
                  uppercase
                  font-semibold
                  tracking-wide
                "
                :class="
                  restaurant.is_closed
                    ? 'bg-red-200 text-red-800'
                    : 'bg-teal-200 text-teal-800'
                "
              >
                {{ restaurant.is_closed ? "Closed" : "Open" }}
              </span>
              <div
                class="
                  ml-2
                  text-gray-600
                  uppercase
                  text-xs
                  font-semibold
                  tracking-wider
                "
              >
                <span
                  v-for="(transaction, index) in restaurant.transactions"
                  :key="transaction"
                >
                  {{ transaction }}
                  {{
                    index !== restaurant.transactions.length - 1
                      ? "&bull; "
                      : ""
                  }}
                </span>
              </div>
            </div>

            <router-link
              :to="{ name: 'restaurant.view', params: { id: restaurant.id } }"
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
            <div class="mt-4">
              <span class="text-teal-600 text-md font-semibold"
                >{{ restaurant.rating }}/5 ratings
              </span>
              <span class="text-sm text-gray-600"
                >(based on {{ restaurant.review_count }} ratings)</span
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
};
</script>
