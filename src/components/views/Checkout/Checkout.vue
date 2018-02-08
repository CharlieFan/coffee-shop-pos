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
                <span>{{ time }}</span>
            </div>

            <div class="item">
                <span>QTY</span>
                <span>ITEM</span>
                <span>TOTAL</span>
            </div>

            <div class="item" v-for="(v, k) in processed" :key="k">
                <span>{{ v.qty }}</span>
                <span>{{ v.product_name }}</span>
                <span>{{ v.price }}</span>
            </div>

            <div class="item summary">
                <span>Subtotal</span>
                <span></span>
                <span>${{ subtotal }}</span>
            </div>

            <div class="item summary">
                <span>HST</span>
                <span></span>
                <span>${{ tax }}</span>
            </div>

            <div class="item summary">
                <span>Total</span>
                <span></span>
                <span>${{ total }}</span>
            </div>
            
            <div class="item summary">
                <span>{{ method }}</span>
                <span></span>
                <span>${{ paid }}</span>
            </div>

            <div class="item summary">
                <span>Change</span>
                <span></span>
                <span>${{ change }}</span>
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
    data() {
        return {
            time: null,
            processed: [],
            subtotal: null,
            tax: null,
            total: null,
            method: null,
            paid: null,
            change: null
        }
    },
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
    },
    created() {
        this.api.transaction.getTransaction().then((res) => {
            this.time = res.time
            this.subtotal = res.subtotal
            this.tax = res.tax
            this.total = res.total
            this.method = res.method
            this.paid = res.paid
            this.change = res.change
            this.processed = res.processed.map((item) => {
                let flat = []
                flat.push({
                    product_name: item.product_name,
                    qty: item.amount ? item.amount : 1,
                    size: item.size ? item.size : '',
                    price: item.base_price
                })

                item.extra_charged.forEach((sub) => {
                    flat.push({
                        product_name: sub.product_name,
                        qty: sub.amount,
                        size: sub.size ? sub.size : '',
                        price: sub.total_price
                    })
                })
                return flat
            }).reduce((prev, curr) => {
                return prev.concat(curr)
            })
        })
    }
}
</script>

<style lang="scss" scoped src="./Checkout.scss"></style>
