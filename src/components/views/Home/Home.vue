<template>
    <div class="home-view">
        <div class="topbar">
            <div class="inner-wrapper">
                <h1 class="flex-3">Coffee Menu</h1>
                <a class="cart-wrapper flex-1"
                    href="javascript:void(0)">
                    <icon name="cart"></icon>
                    <span>orders ({{0}})</span>
                </a>
            </div>
        </div>
        <!-- <h3>Select Drink</h3> -->
        <div class="list-wrapper" v-for="v in products" :key="v.category">
            <h4>{{v.category}}</h4>
            <ul>
                <li v-for="i in v.list" :key="i.product_id">
                    <p>{{i.product_name}}</p>
                </li>
            </ul>
        </div>


    </div>
</template>

<style lang="scss" src="./Home.scss"></style>

<script>
export default {
    name: 'home',
    data () {
        return {
            products: [
                {
                    category: 'Espresso',
                    list: [
                        {
                            product_id: 11,
                            product_name: 'Latte',
                            img_path: 'fjkdslfsd'
                        }
                    ]
                },
                {
                    category: 'Brewed Coffee',
                    list: [
                        {
                            product_id: 21,
                            product_name: 'Premium Roasted blend'
                        },
                        {
                            product_id: 22,
                            product_name: 'Dark Roasted blend'
                        },
                        {
                            product_id: 23,
                            product_name: 'Decaf blend'
                        }
                    ]
                },
                {
                    category: 'Iced Coffee',
                    list: [
                        {
                            product_id: 31,
                            product_name: 'Cold Brewed'
                        },
                        {
                            product_id: 32,
                            product_name: 'Iced Latte'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
