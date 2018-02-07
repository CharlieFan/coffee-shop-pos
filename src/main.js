import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import api from 'api'

// load svg sprite
import 'assets/svg-symbols.svg'

// Golbal Components:
import Icon from 'components/ui/Icon/Icon'

// Create Global Plugin:
const apiPlugin = function(Vue) {
    Vue.prototype.api = api
}

Vue.use(apiPlugin)

Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
