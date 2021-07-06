<template>
  <carousel :wrap-around="true">
    <slide v-for="slide in images" :key="slide" class="h-full">
      <img
        class="w-full h-full object-cover object-center"
        :src="slide"
        alt=""
      />
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style>
.carousel__viewport {
  height: 100%;
}
.carousel__slide {
  height: 100%;
}
.carousel__track {
  height: 100%;
}
.carousel__prev,
.carousel__next {
  background-color: rgba(245, 158, 11, var(--tw-bg-opacity));
  box-sizing: content-box;
  border: 3px solid white;
}
</style>
