<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="w-full md:max-w-full md:flex">
      <div
        class="
          h-48
          md:h-auto md:w-48
          flex-none
          bg-cover
          rounded-0
          lg:rounded-l-lg
          text-center
          overflow-hidden
          bg-center
        "
        :style="`background-image: url('${
          comment.user && comment.user.image_url
            ? comment.user.image_url
            : '/images/placeholder.jpg'
        }')`"
      ></div>
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          shadow-xl
          rounded-0
          lg:rounded-r-lg
          p-10
        "
      >
        <div class="mb-8">
          <div class="mt-4">
            <span class="text-md font-semibold" :class="ratingColor()"
              >{{ comment.rating }}/5
            </span>
          </div>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ comment.user && comment.user.name }}
          </div>
          <p class="text-gray-700 text-base">{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ratingColor() {
      if (this.comment.rating <= 1) {
        return "text-red-400";
      }
      if (this.comment.rating <= 3 && this.comment.rating > 1) {
        return "text-yellow-400";
      }
      return "text-teal-600";
    },
  },
};
</script>
