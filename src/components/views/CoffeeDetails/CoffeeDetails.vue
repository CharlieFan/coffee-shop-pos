<template>
    <div class="detail-view">
        <h1>Vanilla Latte</h1>

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
