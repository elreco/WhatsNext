<template>
  <div v-for="number in items" :key="number">
    <div class="wrapper antialiased text-gray-900 mb-5">
      <div>
        <div class="w-full h-72 rounded-lg shadow-md relative overflow-hidden">
          <div
            class="
              bg-white
              img-hover
              bg-center
              rounded-lg
              w-full
              h-full
              bg-cover
              animated-background
            "
          ></div>
        </div>
        <div class="relative px-4 -mt-16">
          <div
            class="bg-white p-6 rounded-lg shadow-lg"
            style="height: 280px"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      default: 9,
      required: false,
    },
  },
};
</script>
