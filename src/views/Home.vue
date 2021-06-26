<template>
  <div>
    <header-component></header-component>
    <main>
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://picsum.photos/1920/1080");'
        >
          <div
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">

        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="grid grid-cols-2">
        <div class="flex bg-white dark:bg-gray-800 rounded-lg shadow">
    <div class="flex-none w-24 md:w-48  relative">
        <img src="https://picsum.photos/800/300" alt="shopping image" class="absolute rounded-lg inset-0 w-full h-full object-cover"/>
    </div>
    <form class="flex-auto p-6">
        <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
                Classic Utility Jacket
            </h1>
            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                $110.00
            </div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                In stock
            </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
            <div class="space-x-2 flex">
                <label class="text-center">
                    <input type="radio" class="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg" name="size" value="xs"/>
                        XS
                    </label>
                    <label class="text-center">
                        <input type="radio" class="w-6 h-6 flex items-center justify-center" name="size" value="s"/>
                            S
                        </label>
                        <label class="text-center">
                            <input type="radio" class="w-6 h-6 flex items-center justify-center" name="size" value="m"/>
                                M
                            </label>
                            <label class="text-center">
                                <input type="radio" class="w-6 h-6 flex items-center justify-center" name="size" value="l"/>
                                    L
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="w-6 h-6 flex items-center justify-center" name="size" value="xl"/>
                                        XL
                                    </label>
                                </div>
                                <a href="#" class="ml-auto hidden md:block text-sm text-gray-500 dark:text-gray-300 underline">
                                    Size Guide
                                </a>
                            </div>
                            <div class="flex mb-4 text-sm font-medium">
                                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Buy now
                                </button>
                            </div>
                            <p class="text-sm text-gray-500 dark:text-gray-300">
                                Free shipping on all continental US orders.
                            </p>
                        </form>
                    </div>
      </div>
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="https://picsum.photos/200/200"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style="max-width: 150px;"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >22</span
                      ><span class="text-sm text-gray-500">Friends</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >10</span
                      ><span class="text-sm text-gray-500">Photos</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >89</span
                      ><span class="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  Jenna Stones
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  Los Angeles, California
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                  >University of Computer Science
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" class="font-normal text-pink-500"
                      >Show more</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import HeaderComponent from "@/components/Header";

export default {
  name: "home",
  components: {
    HeaderComponent
  }
}
</script>
