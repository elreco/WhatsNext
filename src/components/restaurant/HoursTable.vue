<template>
  <div>
    <div
      v-if="hours && hours.length === 0"
      class="text-white relative px-6 py-4 border-0 bg-yellow-500"
    >
      <span class="inline-block align-middle mr-8"> No hours </span>
    </div>
    <table v-else class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="
              px-6
              bg-blueGray-50
              text-blueGray-500
              align-middle
              border border-solid border-blueGray-100
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-left
            "
          >
            Day
          </th>
          <th
            class="
              px-6
              bg-blueGray-50
              text-blueGray-500
              align-middle
              border border-solid border-blueGray-100
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-center
            "
          >
            Open
          </th>
          <th
            class="
              px-6
              bg-blueGray-50
              text-blueGray-500
              align-middle
              border border-solid border-blueGray-100
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-center
            "
          >
            Close
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours" :key="hour.day">
          <th
            class="
              border-t-0
              px-6
              align-middle
              border-l-0 border-r-0
              text-xs
              whitespace-nowrap
              p-4
              text-left
            "
          >
            {{ hour.day }}
          </th>
          <td
            class="
              border-t-0
              px-6
              align-middle
              border-l-0 border-r-0
              text-xs
              whitespace-nowrap
              p-4
            "
          >
            <div v-html="hour.start"></div>
          </td>
          <td
            class="
              border-t-0
              px-6
              align-middle
              border-l-0 border-r-0
              text-xs
              whitespace-nowrap
              p-4
            "
          >
            <div v-html="hour.end"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    hours: {
      type: Array,
      required: true,
    },
  },
};
</script>
