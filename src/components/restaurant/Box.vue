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
    <div class="px-6">
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
          <div class="py-6 px-3 mt-32 sm:mt-0">
            <button
              class="
                bg-pink-500
                active:bg-pink-600
                uppercase
                text-white
                font-bold
                hover:shadow-md
                shadow
                text-xs
                px-4
                py-2
                rounded
                outline-none
                focus:outline-none
                sm:mr-2
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
            >
              Connect
            </button>
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
                >22</span
              ><span class="text-sm text-blueGray-400">Friends</span>
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
                >10</span
              ><span class="text-sm text-blueGray-400">Photos</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span
                class="
                  text-xl
                  font-bold
                  block
                  uppercase
                  tracking-wide
                  text-blueGray-600
                "
                >89</span
              ><span class="text-sm text-blueGray-400">Comments</span>
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
          "
        >
          <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Los Angeles, California
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
          <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i
          >Solution Manager - Creative Tim Officer
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
