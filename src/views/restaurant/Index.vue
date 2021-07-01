<template>
    <div>
        <header-component></header-component>
        <main class="profile-page">
            <section class="relative block" style="height: 500px">
                <div
                    class="absolute top-0 w-full h-full bg-top bg-cover"
                    style="background-image: url('/images/restaurant-wallpaper-2.jpg')"
                >
                    <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div
                    class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style="height: 70px"
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
                        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section class="relative py-16 bg-gray-300">
                <div class="container mx-auto px-4">
                    <div class="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8 -mt-64">
                        <restaurant-card-component v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"></restaurant-card-component>
                    </div>
                </div>
            </section>
        </main>
        <footer-component></footer-component>
    </div>
</template>
<script>
import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import RestaurantCardComponent from '@/components/restaurant/Card'

export default {
    name: 'home',
    data() {
        return {
            appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'Nobody',
            location: '485 7th Ave, New York, NY 10018',
            categories: 'restaurants',
            restaurants: [],
            loading: true,
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        RestaurantCardComponent
    },
    async mounted() {
        this.getRestaurants()
    },
    methods: {
        async getRestaurants() {
            this.loading = true
            const { data } = await this.axios.get('businesses/search', {
                params: {
                    location: this.location,
                    categories: this.categories,
                },
            })
            this.restaurants = data && data.businesses
            this.loading = false
        },
    },
}
</script>
