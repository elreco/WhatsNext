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
              :src="restaurant.image_url"
              class="rounded-full h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
      >
        <div class="py-6 px-3 mt-24 lg:mt-0 text-center
                lg:text-right">
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
              ><i class="fas fa-external-link-alt"></i> View on Yelp</a
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
            ><span class="text-sm text-blueGray-400">ratings</span>
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
              >{{ displayDistance() }}</span
            ><span class="text-sm text-blueGray-400">kilometers aways</span>
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
          mb-2
        "
      >
        {{ restaurant.name }}
      </h3>
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
      <iframe
          class="my-5"
          width="100%"
          height="350"
          frameborder="0"
          style="border: 0"
          :src="
              `https://www.google.com/maps/embed/v1/place?key=AIzaSyApkj-YzyeK4psOw5GTZTLoWaPiW5BkAyI&q=${getFullAdress()}`
          "
          allowfullscreen
      >
      </iframe>
      <div class="mb-2 text-blueGray-600 mt-10">
        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i
        >{{ restaurant }}
      </div>
      <div class="mb-2 text-blueGray-600">
        <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i
        >University of Computer Science
      </div>
    </div>
    <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-9/12 px-4">
          <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with
            a solid groove structure. An artist of considerable range.
          </p>
          <a href="#pablo" class="font-normal text-pink-500">Show more</a>
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
    getFullAdress() {
      var address = '';
      this.restaurant.location && this.restaurant.location.display_address.forEach((addr) => {
        address += ` ${addr}`
      })
      return address
    },
    displayDistance() {
      var km = this.restaurant.distance ? this.restaurant.distance / 1000 : 0;
      return km.toFixed(2);
    }
  }
};
</script>
