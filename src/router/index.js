import Vue from 'vue'
import VueRouter from 'vue-router'

// components:
import Home from 'components/views/Home/Home'
import CoffeeDetails from 'components/views/CoffeeDetails/CoffeeDetails'

Vue.use(VueRouter)

const routes = [
    {
        path: '/edit/coffeeDetails/:item_id',
        name: 'editCoffee',
        component: CoffeeDetails
    },
    {
        path: '/add/coffeeDetails/:product_id',
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