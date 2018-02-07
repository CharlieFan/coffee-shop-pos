import Vue from 'vue'
import VueRouter from 'vue-router'

// components:
import Home from 'components/views/Home/Home'
import CoffeeDetails from 'components/views/CoffeeDetails/CoffeeDetails'
import Order from 'components/views/Order/Order'
import Checkout from 'components/views/Checkout/Checkout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/edit/coffeeDetails/:id/:item_id',
        name: 'editCoffee',
        component: CoffeeDetails
    },
    {
        path: '/add/coffeeDetails/:id',
        name: 'addNewCoffee',
        component: CoffeeDetails
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes
})

export default router
