<template>
    <div class="number-input">
        <input type="text"
            :value="value"
            @input="updateValue"
            @focus="$event.target.select()"
            @keyup.delete="checkDelete">
        <div class="actionbox">
            <span @click="add">
                <Icon name="plus" width="16" height="16"></Icon>
            </span>
            <span @click="minus"> 
                <Icon name="minus" width="16" height="16"></Icon>
            </span>
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
            type: Number
        },
        max: {
            types: Number
        },
        value: {
            types: Number,
            default: 0,
            required: true
        }
    },
    watch: {
        value() {
             if (this.max !== undefined && this.max <= this.value) {
                this.$emit('input', this.max)
                return false
            }

            if (this.min !== undefined && this.min >= this.value) {
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
            this.$emit('input', e.targe.value)
        },
        checkDelete(e) {
            if (Number(e.target.value) === Number(this.min)) {
                e.target.select()
            }
        }
    }
}
</script>

<style lang="scss" scoped src="./NumberInput.scss"></style>
