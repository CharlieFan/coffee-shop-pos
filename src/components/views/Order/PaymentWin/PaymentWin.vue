<template>
    <div class="payment-win" v-if="isShow">
        <div class="window">
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
                <p class="text-center">
                    <strong>
                        Balance to Pay:
                    </strong>

                    <span>
                        $100.00
                    </span>
                </p>

                <p class="text-center">
                    <strong>
                        Change Due:
                    </strong>

                    <span>
                        $0.00
                    </span>
                </p>

                <div class="paybox">
                    <button class="btn btn-success" v-if="!isCash">
                        Charge
                    </button>


                    <div class="cashbox" v-if="isCash">
                        <div class="form-item">
                            <label>Cash Taken: $
                                <input type="number" min="0" class="input-box">
                            </label>
                        </div>
                        <div class="form-item">
                            <button class="btn btn-success">
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
        }
    },
    data() {
        return {
            isCash: true // cash: true; card: false
        }
    },
    methods: {
        chooseCash() {
            this.isCash = true
        },
        chooseCard() {
            this.isCash = false
        },
        close() {
            this.$emit('update:isShow', false)
        }
    }
}
</script>

<style lang="scss" scoped src="./PaymentWin.scss"></style>
