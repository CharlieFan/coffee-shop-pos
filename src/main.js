import Vue from 'vue'
import App from './App.vue'
import router from 'router'

// load svg sprite
import 'assets/svg-symbols.svg'

// Golbal Components:
import Icon from 'components/ui/Icon/Icon'
Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
