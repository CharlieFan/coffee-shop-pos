import {get, post} from './http'

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
    }
}
