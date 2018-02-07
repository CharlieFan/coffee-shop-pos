<template>
    <div class="detail-view">
        <div class="topbar">
            <h1>{{coffeeInfo.title}}</h1>
        </div>


        <img src="" alt="">

        <form @submit.prevent>
            <div class="form-item">
                <label>Size</label>
                <div>
                    <select class="menu-select max-160" v-model="orderSet.size_price">
                        <option :value="v.price_add"
                            v-for="v in size"
                            :key="v.label">
                            {{v.label}}
                        </option>
                    </select>
                </div>
            </div>

            <!-- <div class="form-item">
                <label>
                    Espresso
                    <input type="checkbox">
                </label>
                <div>
                    <number-input class="max-160"
                        v-model="espNum">
                    </number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>

            <div class="form-item">
                <label>
                    Sweetener
                    <input type="checkbox">
                </label>
                <div>
                    <select class="menu-select max-130">
                        <option value="s">Sugar</option>
                        <option value="m">Splanda</option>
                        <option value="l">Honey</option>
                    </select>
                    <icon name="cross" width="16" height="16"></icon>
                    <number-input class="max-160"
                            v-model="espNum"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>

            <div class="form-item">
                <label>
                    Milk
                    <input type="checkbox">
                </label>
                <div>
                    <select class="menu-select max-130">
                        <option value="m">18% Cream</option>
                        <option value="s">2% Milk</option>
                        <option value="l">Skimmed Milk</option>
                    </select>
                    <icon name="cross" width="16" height="16"></icon>
                    <number-input class="max-160"
                            v-model="espNum"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>

            <div class="form-item">
                <label>
                    Flavor
                    <input type="checkbox">
                </label>
                <div>
                    <select class="menu-select max-130">
                        <option value="m">Vanilla</option>
                        <option value="s">Hazelnut</option>
                        <option value="l">Caramel</option>
                    </select>
                    <icon name="cross" width="16" height="16"></icon>
                    <number-input class="max-160"
                        :min="0"
                        v-model="flavor.shot"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>

            <div class="form-item">
                <label>
                    Topping
                    <input type="checkbox">
                </label>
                <div>
                    <select class="menu-select max-130">
                        <option value="m">Whipped Cream</option>
                        <option value="s">Drizzle</option>
                    </select>
                    <icon name="cross" width="16" height="16"></icon>
                    <number-input class="max-160"
                        :min="0"
                        v-model="flavor.shot"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div> -->

            <div class="form-item" v-for="v in ingredients" :key="v.category">
                <label>
                    {{v.category}}
                    <input type="checkbox">
                </label>
                <div>
                    <select class="menu-select max-130"
                        v-if="v.list.length > 1">
                        <option value="m"
                            v-for="i in v.list"
                            :key="i.id">{{i.product_name}}</option>
                    </select>
                    <icon name="cross" width="16" height="16"
                         v-if="v.list.length > 1"></icon>
                    <number-input class="max-160"
                        :min="0"
                        v-model="flavor.shot"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>
        </form>
        <div class="footer">
            <button class="btn btn-primary fl"
                @click="backMenu">Back to Menu</button>
            <button class="btn btn-success fr">Add to Order</button>
        </div>
    </div>
</template>

<script>
import NumberInput from 'components/ui/NumberInput/NumberInput'

export default {
    name: 'coffeeDetails',
    components: {
        NumberInput
    },
    data () {
        return {
            size: {
                s: {
                    label: "small",
                    price_add: 0
                }
            },
            ingredients: [],
            coffeeInfo: {
                title: '...'
            },
            orderSet: {
                size_price: 0
            },
            espNum: 2,
            flavor: {
                type: 'vanilla',
                shot: 2
            }
        }
    },
    computed: {
        id() {
            let { id } = this.$route.params
            return id
        }
    },
    methods: {
        backMenu() {
            this.$router.push({
                name: 'home'
            })
        },
        updateIngredients() {
            return this.api.menu.getIngredients().then((res) => {
                this.ingredients = res
            })
        },
        updatePreset(id) {
            this.api.menu.getCoffeeDetails(id).then((res) => {
                console.log(res)
                let preset = res[0]
                this.size = preset.size
                this.coffeeInfo.title = preset.product_name
                // this.preset = res[0]
            })
        }
    },
    created() {
        this.updateIngredients().then(() => {
            this.updatePreset(this.id)
        })
    }
}
</script>

<style lang="scss" scoped src="./CoffeeDetails.scss"></style>
