<template>
    <div class="payment-win" v-if="isShow">
        <div class="window"
            :class="{error: hasErr}">
            <div class="topbar text-right clear">
                <p class="fl">Payment</p>
                <button class="fr" @click="close">
                    <icon name="cross"></icon>
                </button>
            </div>

            <div class="body">
                <div class="action">
                    <button :class="{active: !isCash}"
                        @click="chooseCard">
                        Debit / Credit
                    </button>
                    <button :class="{active: isCash}"
                        @click="chooseCash">
                        Cash
                    </button>
                </div>
                <p class="text-center balance">
                    <strong>
                        Balance to Pay:
                    </strong>

                    <span>
                        ${{Number(total).toFixed(2)}}
                    </span>
                </p>

                <p class="text-center">
                    <strong>
                        Change Due:
                    </strong>

                    <span>
                        ${{Number(changeDue).toFixed(2)}}
                    </span>
                </p>

                <div class="paybox">
                    <button class="btn btn-success" v-if="!isCash"
                        @click="chargeCard">
                        Charge
                    </button>


                    <div class="cashbox" v-if="isCash">
                        <div class="form-item cash-row">
                            <label>Cash Taken: $
                                <input type="number" min="0" class="input-box"
                                    @focus="$event.target.select()"
                                    @keyup.delete="checkDelete"
                                    v-model="cashAmount">
                            </label>
                        </div>
                        <div class="form-item">
                            <button class="btn btn-success"
                                @click="chargeCash">
                                Charge
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'payment-win',
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isCash: true, // cash: true; card: false
            cashAmount: 0,
            hasErr: false
        }
    },
    computed: {
        changeDue() {
            let change = this.cashAmount - this.total
            if (change < 0) {
                change = 0
            }

            return change
        }
    },
    watch: {
        cashAmount() {
            if (this.cashAmount < 0 || !this.cashAmount) {
                this.cashAmount = 0
            }

            this.checkCash()
        }
    },
    methods: {
        chooseCash() {
            this.isCash = true
        },
        chooseCard() {
            this.isCash = false
        },
        checkCash() {
            let rest = this.total - this.cashAmount
            if (rest > 0) {
                console.log('you should pay')
                this.hasErr = true
                return true
            } else {
                this.hasErr = false
                return false
            }
        },
        chargeCard() {
            console.log('call card payment api')
            this.$router.push({
                name: 'checkout'
            })
        },
        chargeCash() {
            if(this.checkCash()) {
                return false
            }

            this.$router.push({
                name: 'checkout'
            })
        },
        checkDelete(e) {
            if (e.target.value <= 0) {
                e.target.select()
            }
        },
        close() {
            this.$emit('update:isShow', false)
        }
    }
}
</script>

<style lang="scss" scoped src="./PaymentWin.scss"></style>
