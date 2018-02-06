<template>
    <div class="number-input">
        <input type="text"
            :value="value"
            @input="updateValue"
            @focus="$event.target.select()"
            @keyup.delete="checkDelete">
        <div class="actionbox">
            <button @click="add">
                <Icon name="plus" width="16" height="16"></Icon>
            </button>
            <button @click="minus">
                <Icon name="minus" width="16" height="16"></Icon>
            </button>
        </div>
    </div>
</template>

<script>
import Icon from 'components/ui/Icon/Icon'
export default {
    name: 'numberInput',
    components: {
        Icon
    },
    props: {
        min: {
            type: Number,
            default: null
        },
        max: {
            types: Number,
            default: null
        },
        value: {
            types: Number,
            default: 0,
            required: true
        }
    },
    watch: {
        value() {
             if (this.max !== null && this.max <= this.value) {
                this.$emit('input', this.max)
                return false
            }

            if (this.min !== null && this.min >= this.value) {
                this.$emit('input', this.min)
                return false
            }
        }
    },
    methods: {
        add() {
            let payload = this.value + 1
            this.$emit('input', payload)
        },
        minus() {
            let payload = this.value - 1
            this.$emit('input', payload)
        },
        updateValue(e) {
            this.$emit('input', e.target.value)
        },
        checkDelete(e) {
            if (Number(e.target.value) === Number(this.min)) {
                e.target.select()
            }
        }
    },
    created() {
        if (this.max !== null && this.max <= this.value) {
            this.$emit('input', this.max)
            return false
        }

        if (this.min !== null && this.min >= this.value) {
            this.$emit('input', this.min)
            return false
        }
    }
}
</script>

<style lang="scss" scoped src="./NumberInput.scss"></style>
