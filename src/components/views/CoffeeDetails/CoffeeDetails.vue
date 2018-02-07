<template>
    <div class="detail-view">
        <div class="topbar">
            <h1>{{coffeeInfo.title}}</h1>
        </div>

        <div class="image_box text-center">
            <img :src="coffeeInfo.img_path" :alt="coffeeInfo.title">
        </div>

        <form @submit.prevent>
            <div class="form-item">
                <label>Size</label>
                <div>
                    <select class="menu-select max-160" v-model="coffeeInfo.size_price">
                        <option :value="v.value"
                            v-for="v in sizes"
                            :key="v.label">
                            {{v.label}}
                        </option>
                    </select>
                </div>
            </div>

            <div class="form-item" v-for="(v,k) in ingredients" :key="k">
                <label>
                    {{v.category_name}}
                </label>
                <div class="sub-item" v-for="i in v.list" :key="i.id">
                    <span>{{i.product_name}}</span>
                    <icon name="cross" width="16" height="16"
                         v-if="v.list.length > 1"></icon>
                    <number-input class="max-160"
                        :min="0"
                        v-model="coffeeInfo.addsOn[i.id]"></number-input>
                    <span class="tail">shot(s)</span>
                </div>
            </div>
        </form>
        <div class="footer">
            <button class="btn btn-primary fl"
                @click="backMenu">Back to Menu</button>
            <button class="btn btn-success fr" @click="addToOrder">Add to Order</button>
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
            sizes: [
                {
                    label: "small",
                    value: 0
                }
            ],
            ingredients: [],
            priceList: {},
            coffeeInfo: {
                title: '...',
                img_path: '',
                base_price: 0,
                size_price: 0,
                addsOn: {
                    esp_shot: 0,
                    sugar: 0,
                    splanda: 0,
                    honey: 0,
                    milk_2: 0,
                    cream_18: 0,
                    milk_skimmed: 0,
                    f_vanilla: 0,
                    f_hazelnut: 0,
                    f_caramel: 0,
                    whipped_cream: 0,
                    drizzle: 0,
                }
            }
        }
    },
    computed: {
        id() {
            let { id } = this.$route.params
            return id
        },
        orderId() {
            let { item_id } = this.$route.params
            return item_id
        },
        sizeSelected() {
            let res = this.sizes.filter((size) => {
                return size.value === this.coffeeInfo.size_price
            })

            return res[0].label
        },
        sum() {
            let result = 0
            for(let item in this.coffeeInfo.addsOn) {
                if (this.coffeeInfo.addsOn.hasOwnProperty(item) && this.priceList.hasOwnProperty(item)) {
                    result += this.coffeeInfo.addsOn[item] * this.priceList[item]
                }
            }
            return result + this.coffeeInfo.base_price + this.coffeeInfo.size_price
        }
    },
    watch: {
        id() {
            this.updateIngredients().then(() => {
                this.updatePreset(this.id)
            })
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
                console.log(res)
                this.ingredients = res
                let all = {}
                res.map((item) => {
                    return item.list
                }).reduce((prev, curr) => {
                    return prev.concat(curr)
                }).forEach((item) => {
                    all[item.id] = item.price
                })

                this.priceList = all
            })
        },
        updatePreset(id) {
            this.api.menu.getCoffeeDetails(id).then((res) => {
                console.log(res)
                let preset = res[0]
                this.coffeeInfo.title = preset.product_name
                this.coffeeInfo.img_path = preset.img_path
                this.sizes = preset.sizes
                this.coffeeInfo.base_price = preset.base_price
                let presetAddsOn = {}
                preset.ingredients.forEach((item) => {
                    presetAddsOn[item.id] = item.amount
                })
                this.coffeeInfo.addsOn = Object.assign({}, this.coffeeInfo.addsOn, presetAddsOn)
            })
        },
        addToOrder() {
            console.log('hahah')
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
