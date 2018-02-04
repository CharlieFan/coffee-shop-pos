<template>
    <div class="detail-view">
        <h1>Vanilla Latte</h1>

        <form>
            <div class="form-item">
                <label>Size:</label>
                <select class="menu-select">
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                </select>
            </div>

        </form>


        <div class="footer">
            <button class="btn btn-primary fl">Back to Menu</button>
            <button class="btn btn-success fr">Add to Order</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'coffeeDetails',
    data () {
        return {
            msg: 'coffee details view'
        }
    }
}
</script>

<style lang="scss" src="./CoffeeDetails.scss"></style>
