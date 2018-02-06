<template>
    <div class="detail-view">
        <div class="topbar">
            <h1>Vanilla Latte</h1>
        </div>


        <img src="" alt="">

        <form @submit.prevent>
            <div class="form-item">
                <label>Size</label>
                <div>
                    <select class="menu-select max-160">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                </div>
            </div>

            <div class="form-item">
                <label>
                    Espresso
                    <input type="checkbox">
                </label>
                <!-- <p>No Espresso</p> -->
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
            size: 's',
            espNum: 2,
            flavor: {
                type: 'vanilla',
                shot: 2
            }
        }
    },
    methods: {
        backMenu() {
            this.$router.push({
                name: 'home'
            })
        }
    },
    created() {
        // console.log(this)
    }
}
</script>

<style lang="scss" scoped src="./CoffeeDetails.scss"></style>
