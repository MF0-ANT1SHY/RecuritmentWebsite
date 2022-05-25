<template>
    <div class="title-box">
        <div class="left">
            <img src="../assets/logo.png" alt="">
            <h4>recruitment</h4>
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup() {


            return {}
        }
    })
</script>

<style lang="scss" scoped>
.title-box {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        align-items: center;

        img {
            height: 70px;
        }
    }

    border-bottom: 1px solid #8338ec;
}
</style>