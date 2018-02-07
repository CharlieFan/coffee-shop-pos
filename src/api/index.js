import {get, post} from './http'

export default {
    menu: {
        /**
         * Get Coffee Menu
         * @param query
         */
        getCoffeeMenu(query = null) {
            return get('/menu', query)
        }
    }
}
