<template>
    <div class="order-view">
        <div class="topbar">
            <h1>Order List</h1>
        </div>

        <table class="order-table">
            <!-- Item Row -->
            <tr v-for="(v, k) in orders" :key="k">
                <!-- 1. img slot -->
                <td class="width-50">
                    <img :src="v.img_path" alt="coffee-logo">
                </td>

                <!-- 2. name slot -->
                <td class="col-name">
                    <p>
                        {{v.product_name}}
                    </p>
                    <span>
                        size: {{v.size}}
                    </span>
                </td>

                <!-- 3. extra charged slot -->
                <td class="col-charged">
                    <p v-for="i in v.extra_charged" :key="i.id">
                        ( {{i.product_name}} + $1.00 ) * {{i.amount}}
                    </p>
                </td>


                <!-- 4. price slot -->
                <td class="col-price">
                    ${{Number(v.sum).toFixed(2)}}
                </td>

                <!-- 5. action slot -->
                <td class="text-center">
                    <button class="icon-btn">
                        <icon width="20" height="20" name="plus"></icon>
                    </button>
                    <button class="icon-btn">
                        <icon width="20" height="20" name="minus"></icon>
                    </button>
                </td>
            </tr>

            <!-- Subtotal Row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td  class="col-summary text-right">
                    Subtotal:
                </td>
                <td class="col-summary text-right">
                    $575
                </td>
            </tr>

            <!-- Tax Row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td  class="col-summary text-right">
                    Tax:
                </td>
                <td class="col-summary text-right">
                    ${{Number(tax).toFixed(2)}}
                </td>
            </tr>

            <!-- Total Row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td  class="col-summary text-right">
                    Total:
                </td>
                <td class="col-summary text-right">
                    ${{Number(total).toFixed(2)}}
                </td>
            </tr>

            <tr>
                <td colspan="5" class="text-right">
                    <button class="btn btn-primary">Add More Order</button>
                </td>
            </tr>
        </table>

        <div class="footer">
            <button class="btn btn-danger fl">Cancel Order</button>
            <button class="btn btn-success fr"
                @click="checkout">
                <icon name="coin-dollar"></icon>
                Checkout
            </button>
        </div>
        <payment-win :is-show.sync="isShowPayment"></payment-win>
    </div>
</template>

<script>
import PaymentWin from './PaymentWin/PaymentWin'

export default {
    name: 'order',
    components: {
        PaymentWin
    },
    data() {
        return {
            isShowPayment: false,
            hst: 0.13, // demo only. Get from remote api would be better
            orders: []
        }
    },
    computed: {
        subtotal() {
            return this.getTotal(this.orders)
        },
        tax() {
            return this.getTotal(this.orders) * this.hst
        },
        total() {
            return this.getTotal(this.orders) + this.getTotal(this.orders) * this.hst
        }
    },
    methods: {
        getTotal(orders = []) {
            if (orders.length <= 0) {
                return 0
            }

            return orders.reduce((prev, curr) => {
                return prev.sum + curr.sum
            })
        },
        checkout() {
            this.isShowPayment = true
            // this.$router.push({
            //     name: 'checkout'
            // })
        },
        updateOrderList() {
            return this.api.order.getOrderList().then(res => {
                console.log(res)
                this.orders = res.map((item) => {
                    let { extra_charged, id, img_path, product_name, size, sum} = item
                    return {
                        extra_charged,
                        id,
                        img_path,
                        product_name,
                        size,
                        sum
                    }
                })
            })
        }
    },
    created() {
        this.updateOrderList()
    }
}
</script>

<style lang="scss" scoped src="./Order.scss"></style>
