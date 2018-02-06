<template>
    <div class="checkout-view">
       <div class="topbar unpritable">
            <h1 class="text-center">
                <span class="check-icon">
                    <icon name="checkmark"></icon>
                </span>
                Checkout
            </h1>
        </div>

        <div class="payment-wrapper">
            <div class="item date">
                <span>YYYY-MM-DD 05:42:05 PM</span>
            </div>

            <div class="item">
                <span>QTY</span>
                <span>ITEM</span>
                <span>TOTAL</span>
            </div>

            <div class="item" v-for="v in 10" :key="v">
                <span>{{v}}</span>
                <span>Original Blend</span>
                <span>1.75</span>
            </div>

            <div class="item summary">
                <span>Subtotal</span>
                <span></span>
                <span>$100</span>
            </div>

            <div class="item summary">
                <span>HST</span>
                <span></span>
                <span>$100</span>
            </div>

            <div class="item summary">
                <span>Total</span>
                <span></span>
                <span>$100</span>
            </div>
            
            <div class="item summary">
                <span>CREDIT CARD</span>
                <span></span>
                <span>$100</span>
            </div>

            <div class="item summary">
                <span>Change</span>
                <span></span>
                <span>$100</span>
            </div>
        </div>

        <div class="footer unpritable">
            <button class="btn btn-primary fl" @click="toMenu">Back To menu</button>
            <button class="btn btn-success fr" @click="print">
                Print Receipt
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checkout',
    methods: {
        print() {
            window.print()
            return false
        },
        toMenu() {
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style lang="scss" scoped src="./Checkout.scss"></style>
