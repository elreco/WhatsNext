<template>
  <nav
    class="
      relative
      z-0
      inline-flex
      rounded-md
      shadow-sm
      -space-x-px
      items-center
      shadow-md
    "
    aria-label="Pagination"
  >
    <router-link
      :disabled="isInFirstPage"
      :to="getRoute(1)"
      class="
        bg-white
        border-gray-300
        text-gray-500
        relative
        inline-flex
        items-center
        px-2
        py-2
        rounded-l-md
        border
        text-sm
        font-medium
        hover:bg-gray-50
      "
    >
      <span class="sr-only">Previous</span>
      <!-- Heroicon name: solid/chevron-left -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </router-link>
    <router-link
      :disabled="isInFirstPage"
      :to="getRoute(currentPage - 1)"
      class="
        bg-white
        border-gray-300
        text-gray-500
        relative
        inline-flex
        items-center
        px-2
        py-2
        border
        text-sm
        font-medium
        hover:bg-gray-50
      "
    >
      <span class="sr-only">Previous</span>
      <!-- Heroicon name: solid/chevron-left -->
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </router-link>
    <!-- Current: "z-10 bg-yellow-50 border-yellow-500 text-yellow-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
    <router-link
      :to="getRoute(page.name)"
      v-for="page in pages"
      :key="page.name"
      href="#"
      aria-current="page"
      :class="
        isPageActive(page.name)
          ? 'z-10 bg-yellow-50 border-yellow-500 text-yellow-600'
          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
      "
      class="
        relative
        inline-flex
        items-center
        px-4
        py-2
        border
        text-sm
        font-medium
      "
    >
      {{ page.name }}
    </router-link>
    <router-link
      :disabled="isInLastPage"
      :to="getRoute(currentPage + 1)"
      class="
        relative
        inline-flex
        items-center
        px-2
        py-2
        border border-gray-300
        bg-white
        text-sm
        font-medium
        text-gray-500
        hover:bg-gray-50
      "
    >
      <span class="sr-only">Next</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </router-link>
    <router-link
      :disabled="isInLastPage"
      :to="getRoute(totalPages)"
      class="
        relative
        inline-flex
        items-center
        px-2
        py-2
        rounded-r-md
        border border-gray-300
        bg-white
        text-sm
        font-medium
        text-gray-500
        hover:bg-gray-50
      "
    >
      <span class="sr-only">Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      totalPages: Math.ceil(this.total / this.perPage),
    };
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        const calculatePage = this.totalPages - this.maxVisibleButtons + 1;
        if (calculatePage === 0) {
          return 1;
        } else {
          return calculatePage;
        }
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    getRoute(num) {
      if (num === 0) {
        num = 1;
      }
      const query = {};
      Object.assign(query, this.$route.query);
      query.page = num;
      return {
        query,
      };
    },
  },
};
</script>
