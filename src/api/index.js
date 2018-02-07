import {get, post, put, apiDelete} from './http'

export default {
    menu: {
        /**
         * Get coffee menu
         * @param query
         */
        getCoffeeMenu() {
            return get('/menu')
        },
        /**
         * Get ingredients dependance data
         */
        getIngredients() {
            return get('/ingredients_list')
        },
        /**
         * Get individual coffee presets
         * @param id
         */
        getCoffeeDetails(id) {
            return get('/coffee', {id})
        }
    },
    order: {
        /**
         * Get orders
         */
        getOrderList() {
            return get('/orderList')
        },
        /**
         * Get orderDetails
         * @param id
         */
        getOrderDetails(id) {
            return get('/orderList', {id})
        },
        /**
         * Add an item to order
         * @param data
         */
        addItemToOrder(data) {
            return post('/orderList', data)
        },
        /**
         * Save an item in order
         * @param data
         */
        saveItemToOrder(id, data) {
            return put(`/orderList/${id}`, data)
        },
        /**
         * Remove an item from order
         */
        removeItemFromOrder(id) {
            return apiDelete(`/orderList/${id}`)
        }
    }
}
