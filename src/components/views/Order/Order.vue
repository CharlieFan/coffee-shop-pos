<template>
    <div class="order-view">
        <div class="topbar">
            <h1>Order List</h1>
        </div>

        <table class="order-table">
            <!-- Item Row -->
            <tr v-for="v in 5" :key="v">
                <!-- 1. img slot -->
                <td class="width-50">
                    <img src="logo.png" alt="coffee-logo">
                </td>

                <!-- 2. name slot -->
                <td class="col-name">
                    <p>
                        Hazelnut Latte{{v}}
                    </p>
                    <span>
                        size: M
                    </span>
                </td>

                <!-- 3. extra charged slot -->
                <td class="col-charged">
                    <p>
                        vanila syrup + $1.00
                    </p>

                    <p>
                        vanila syrup + $1.00
                    </p>

                    <p>
                        vanila syrup + $1.00
                    </p>
                </td>


                <!-- 4. price slot -->
                <td class="col-price">
                    $115.00
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
                    $74.75
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
                    $649.75
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
            isShowPayment: false
        }
    },
    methods: {
        checkout() {
            this.isShowPayment = true
            // this.$router.push({
            //     name: 'checkout'
            // })
        }
    }
}
</script>

<style lang="scss" scoped src="./Order.scss"></style>
