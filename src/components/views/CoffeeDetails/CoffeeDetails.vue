<template>
    <div class="detail-view">
        <div class="topbar">
            <button class="btn btn-primary fl">Back to Menu</button>
            <button class="btn btn-success fr">Add to Order</button>
        </div>

        <h1>Vanilla Latte</h1>

        <img src="" alt="">

        <form>
            <div class="form-item">
                <label>Size:</label>
                <select class="menu-select">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
            </div>

            <div class="form-item">
                <label>Espresso:</label>
                <input class="input-box" type="number" min="1">
                <icon name="cross" width="16" height="16"></icon>
                <span>shot(s)</span>
            </div>

            <div class="form-item">
                <label>Sweetener:</label>
                <select class="menu-select">
                    <option value="s">Sugar</option>
                    <option value="m">Splanda</option>
                    <option value="l">Honey</option>
                </select>
                <icon name="cross" width="16" height="16"></icon>
                <input class="input-box" type="number" min="0"><span>shot(s)</span>
            </div>

            <div class="form-item">
                <label>Milk:</label>
                <select class="menu-select">
                    <option value="m">18% Cream</option>
                    <option value="s">2% Milk</option>
                    <option value="l">Skimmed Milk</option>
                </select>
                <icon name="cross" width="16" height="16"></icon>
                <input class="input-box" type="number" min="0"><span>shot(s)</span>
            </div>

            <div class="form-item">
                <label>Flavor:</label>
                <select class="menu-select">
                    <option value="m">Vanilla</option>
                    <option value="s">Hazelnut</option>
                    <option value="l">Caramel</option>
                </select>
                <icon name="cross" width="16" height="16"></icon>
                <input class="input-box" type="number" min="0"><span>shot(s)</span>
            </div>
        </form>

        <number-input :max="10" :min="0"
            v-model="espNum"></number-input>
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
            espNum: 0
        }
    }
}
</script>

<style lang="scss" src="./CoffeeDetails.scss"></style>
