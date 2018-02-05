import Vue from 'vue'
import App from './App.vue'
import router from 'router'

// load svg sprite
import 'assets/svg-symbols.svg'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
