<template>
    <div class="home-view">
        <header>
            <h1 class="flex-1">Coffee Menu</h1>
            <a class="cart-wrapper flex-1"
                href="javascript:void(0)">
                <i class="fas fa-shopping-cart"></i>
                <span>My orders ({{0}})</span>
            </a>
        </header>
        <p>Welcome what would you like to drink?</p>

        <div class="list-wrapper">
            <h3>Espresso Drink</h3>
            <ul>
                <li>

                </li>
            </ul>
        </div>



        
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            msg: 'home view'
        }
    }
}
</script>

<style lang="scss" src="./Home.scss"></style>
