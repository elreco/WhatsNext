<template>
  <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      bg-white
      w-full
      mb-6
      shadow-xl
      rounded-lg
      -mt-64
    "
  >
    <div class="flex flex-wrap justify-center">
      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div class="relative">
          <div
            class="
              shadow-xl
              rounded-full
              align-middle
              border-none
              object-cover
              absolute
              -m-16
              -ml-20
              lg:-ml-16
            "
            style="width: 150px; height: 150px"
          >
            <img
              :alt="restaurant.name"
              :src="
                restaurant.image_url
                  ? restaurant.image_url
                  : '/images/placeholder.jpg'
              "
              class="rounded-full h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
      >
        <div class="py-6 px-3 mt-24 lg:mt-0 text-center lg:text-right">
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
      <div class="w-full lg:w-4/12 px-4 lg:order-1">
        <div class="flex justify-center py-4 lg:pt-4 pt-8">
          <div class="mr-4 p-3 text-center">
            <span
              class="
                text-xl
                font-bold
                block
                uppercase
                tracking-wide
                text-blueGray-600
              "
              >{{ restaurant.rating }}/5</span
            ><span class="text-sm text-blueGray-400">Rating</span>
          </div>
          <div class="mr-4 p-3 text-center">
            <span
              class="
                text-xl
                font-bold
                block
                uppercase
                tracking-wide
                text-blueGray-600
              "
              >{{ restaurant.review_count }}</span
            ><span class="text-sm text-blueGray-400">Reviews</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-12">
      <h3
        class="
          text-4xl
          font-semibold
          leading-normal
          mb-2
          text-blueGray-700
          mb-0
        "
      >
        {{ restaurant.name }}
      </h3>
      <div class="text-gray-600 uppercase text-xs font-semibold tracking-wider">
        <span
          v-for="(categorie, index) in restaurant.categories"
          :key="categorie"
        >
          {{ categorie.title }}
          {{ index !== restaurant.categories.length - 1 ? "&bull; " : "" }}
        </span>
      </div>
      <div class="mb-4">
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
            !restaurant.open_now
              ? 'bg-red-200 text-red-800'
              : 'bg-teal-200 text-teal-800'
          "
        >
          {{ !restaurant.open_now ? "Closed" : "Open" }}
        </span>
        <span
          class="
            text-xs
            ml-2
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

      <div
        class="
          text-sm
          leading-normal
          mt-0
          mb-2
          text-blueGray-400
          font-bold
          uppercase
          hover:text-yellow-500
        "
      >
        <a :href="`tel:${restaurant.display_phone}`">
          <i class="fas fa-phone mr-2 text-lg"></i>
          {{ restaurant.display_phone }}
        </a>
      </div>
      <div
        class="
          text-sm
          leading-normal
          mt-0
          mb-2
          text-blueGray-400
          font-bold
          uppercase
        "
      >
        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
        {{ getFullAdress() }}
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1">
        <iframe
          class="my-5"
          width="100%"
          height="350"
          frameborder="0"
          style="border: 0"
          :src="`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}=${getFullAdress()}`"
          allowfullscreen
        >
        </iframe>
        <slider-component
          class="my-5"
          style="height: 350px"
          :images="restaurant.photos"
        />
      </div>
    </div>
    <div class="py-10 text-center">
      <div class="flex flex-wrap justify-center">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-8">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-lg
              rounded
              border
            "
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-left">
                <h3 class="font-semibold text-base text-blueGray-700">Hours</h3>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <hours-table-component :hours="hours" />
            </div>
          </div>
        </div>
        <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-8">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-lg
              rounded
              border
            "
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-left">
                <h3 class="font-semibold text-base text-blueGray-700">
                  Special Hours
                </h3>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <hours-table-component :hours="specialHours" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider";
import HoursTableComponent from "./HoursTable";
import moment from "moment";

export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      googleApiKey: process.env.VUE_APP_GOOGLE_API,
      days: {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
      },
      hours: [],
      specialHours: [],
    };
  },
  components: {
    SliderComponent,
    HoursTableComponent,
  },
  mounted() {
    this.getHours();
    this.getSpecialHours();
  },
  methods: {
    getHours() {
      this.restaurant.hours &&
        this.restaurant.hours[0] &&
        this.restaurant.hours[0].open &&
        this.restaurant.hours[0].open.forEach((hour) => {
          this.hours.push({
            day: this.days[hour.day] ? this.days[hour.day] : "",
            start: moment(hour.start, "HH:mm").format("h[h]mm A"),
            end: moment(hour.end, "HH:mm").format("h[h]mm A"),
          });
        });
    },
    getSpecialHours() {
      this.restaurant.special_hours &&
        this.restaurant.special_hours.forEach((hour) => {
          this.specialHours.push({
            day: moment(hour.date).format("MMM Do YY"),
            start:
              hour.start && !hour.is_closed
                ? moment(hour.start, "HH:mm").format("h[h]mm A")
                : '<span class="text-red-500">Closed</span>',
            end:
              hour.end && !hour.is_closed
                ? moment(hour.end, "HH:mm").format("h[h]mm A")
                : '<span class="text-red-500">Closed</span>',
          });
        });
    },
    getFullAdress() {
      console.log(this.restaurant);
      var address = "";
      this.restaurant.location &&
        this.restaurant.location.display_address.forEach((addr) => {
          address += ` ${addr}`;
        });
      return address;
    },
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
  },
};
</script>
