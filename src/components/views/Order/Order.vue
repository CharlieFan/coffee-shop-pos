<template>
    <div class="order-view">
        <div class="topbar">
            <h1>Order List</h1>
        </div>

        <div class="footer">
            <button class="btn btn-danger fl">Cancel Order</button>
            <button class="btn btn-success fr">Checkout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order',
}
</script>

<style lang="scss" scoped src="./Order.scss"></style>
