<template>
    <svg class="svg-icon"
        :style="styleObj">
        <use :xlink:href="`svg-symbols.svg#${name}`"></use>
    </svg>
</template>

<script>
// simple svg icon, support single color only
export default {
    name: 'icon',
    props: {
        name: {
            type: String,
            required: true
        },
        width: {
            type: [Number, String]
        },
        height: {
            type: [Number, String]
        }
    },
    computed: {
        styleObj() {
            return {
                width: this.width ? this.width : '1rem',
                height: this.height ? this.height : '1rem'
            }
        }
    }
}
</script>

<style lang="scss" src="./Icon.scss"></style>
