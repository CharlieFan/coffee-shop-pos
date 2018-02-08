<template>
    <div class="home-view">
        <div class="topbar">
            <div class="inner-wrapper">
                <h1 class="flex-3">Coffee Menu</h1>
                <a class="cart-wrapper flex-1"
                    href="javascript:void(0)"
                    @click="toOrder">
                    <icon name="cart"></icon>
                    <span>Orders</span>
                </a>
            </div>
        </div>
        <div class="list-wrapper" v-for="v in products" :key="v.category">
            <h4>{{v.category}}</h4>
            <ul>
                <li v-for="i in v.list" :key="i.id"
                    @click="toDetails(i.id)">
                    <img :src="i.img_path" :alt="i.product_name">
                    <p>{{i.product_name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./Home.scss"></style>

<script>
export default {
    name: 'home',
    data () {
        return {
            products: []
        }
    },
    methods: {
        toOrder() {
            this.$router.push({
                name: 'order'
            })
        },
        toDetails(id) {
            this.$router.push({
                name: 'addNewCoffee',
                params: {
                    id
                }
            })
        }
    },
    created() {
        this.api.menu.getCoffeeMenu().then(res => {
            this.products = res.map((item) => {
                return item
            })
        })
    }
}
</script>
