<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} {{ appName }}.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : "Nobody",
      date: new Date().getFullYear(),
    };
  },
};
</script>
