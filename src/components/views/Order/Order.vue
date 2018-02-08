<template>
    <div class="order-view">
        <div class="topbar">
            <h1>Order List</h1>
        </div>

        <table class="order-table" v-if="orders.length > 0">
            <!-- Item Row -->
            <tr v-for="(v, k) in orders" :key="k">
                <!-- 1. img slot -->
                <td class="width-50">
                    <img :src="v.img_path" alt="coffee-logo">
                </td>

                <!-- 2. name slot -->
                <td class="col-name">
                    <p>
                        <a href="javascript:void(0)"
                            @click="toEditDetails(v.id)">{{v.product_name}}</a>
                    </p>
                    <span>
                        size: {{v.size}}
                    </span>
                </td>

                <!-- 3. extra charged slot -->
                <td class="col-charged">
                    <p v-for="i in v.extra_charged" :key="i.id" v-if="v.extra_charged.length > 0">
                        ( {{i.product_name}} + ${{Number(i.price).toFixed(2)}} ) * {{i.amount}}
                    </p>
                </td>


                <!-- 4. price slot -->
                <td class="col-price">
                    ${{Number(v.sum).toFixed(2)}}
                </td>

                <!-- 5. action slot -->
                <td class="text-center">
                    <button class="icon-btn" @click="copyItem(v.id)">
                        <icon width="20" height="20" name="plus"></icon>
                    </button>
                    <button class="icon-btn" @click="removeItem(v.id)">
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
                    ${{Number(subtotal).toFixed(2)}}
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
        </table>
        <div class="action-box text-center">
            <button class="btn btn-primary" @click="addMore">Add More Order</button>
        </div>

        <div class="footer" v-if="orders.length > 0">
            <button class="btn btn-danger fl" @click="cancelOrder">Cancel Order</button>
            <button class="btn btn-success fr"
                @click="checkout">
                <icon name="coin-dollar"></icon>
                Checkout
            </button>
        </div>
        <payment-win :total="total" :is-show.sync="isShowPayment"
            @paid="gatherData"></payment-win>
    </div>
</template>

<script>
import moment from 'moment'
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
            orders: [],
            subtotal: 0,
            tax: 0,
            total: 0
        }
    },
    methods: {
        getTotal(orders = []) {
            if (!orders) {
                return 0
            }

            let sum = 0
            orders.forEach((item) => {
                sum += item.sum
            })

            return sum
        },
        checkout() {
            this.isShowPayment = true
        },
        updateOrderList() {
            return this.api.order.getOrderList().then(res => {
                this.orders = res
                this.subtotal = this.getTotal(this.orders)
                this.tax = this.getTotal(this.orders) * this.hst
                this.total = this.subtotal + this.tax
            })
        },
        copyItem(id) {
            let copy = this.orders.filter((item) => {
                return item.id === id
            })

            if (!copy || copy.length <=0 ) {
                return false
            }

            let data = copy.map((item) => {
                let { product_id, adds_on, extra_charged, img_path, product_name, size, sum } = item
                return {
                    product_id,
                    adds_on,
                    extra_charged,
                    img_path,
                    product_name,
                    size,
                    sum
                }
            })[0]

            this.api.order.addItemToOrder(data).then((res) => {
                this.updateOrderList()
            })
        },
        removeItem(id) {
            this.api.order.removeItemFromOrder(id).then((res) => {
                this.updateOrderList()
            })
        },
        addMore() {
            this.$router.push({
                name: 'home'
            })
        },
        cancelOrder() {
            if (!this.orders || this.orders.length <=0) {
                this.$router.push({
                    name: 'home'
                })
                return false
            }

            let que = this.orders.map((item) => {
                return this.api.order.removeItemFromOrder(item.id)
            })

            Promise.all(que).then(res => {
                this.$router.push({
                    name: 'home'
                })
            }).catch(err => {
                this.$router.push({
                    name: 'home'
                })
            })
        },
        toEditDetails(id) {
            let product_id = this.orders.filter((item) => {
                return item.id === id
            })[0].product_id

            this.$router.push({
                name: 'editCoffee',
                params: {
                    id: product_id,
                    item_id: id
                }
            })
        },
        gatherData(e) {
            let processed = this.orders.map((order) => {
                let extra_charged = order.extra_charged.map((item) => {
                        return {
                            product_name: item.product_name,
                            amount: item.amount,
                            price: item.price,
                            total_price: item.amount * item.price
                        }
                    })
                let extra_total = 0

                extra_charged.forEach((item) => {
                    extra_total += item.total_price
                })

                return {
                    product_name: order.product_name,
                    size: order.size,
                    sum: Number(order.sum).toFixed(2),
                    extra_charged: extra_charged,
                    base_price: Number(order.sum - extra_total).toFixed(2)
                }
            })

            let data = {
                time: moment().format('YYYY-MM-DD hh:mm:ss A'),
                processed,
                subtotal: Number(this.subtotal).toFixed(2),
                tax: Number(this.tax).toFixed(2),
                total: Number(this.total).toFixed(2),
                method: e.method,
                paid: Number(e.paidAmount).toFixed(2),
                change: Number(e.change).toFixed(2)
            }

            this.api.transaction.generateReceipt(data).then(() => {
                // clear orders:
                let que = this.orders.map((item) => {
                    return this.api.order.removeItemFromOrder(item.id)
                })

                Promise.all(que).then(res => {
                    this.$router.push({
                        name: 'checkout'
                    })
                }).catch(err => {
                    this.$router.push({
                        name: 'checkout'
                    })
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
