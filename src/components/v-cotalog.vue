<template>
    <div class="v-cotalog">
    <h2>Коталог Товаров</h2>
    <div class="v-cotalog-products">
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
        <vCotalogItem/>
    </div>
    </div>
</template>

<script>
import vCotalogItem from './v-cotalog-item.vue';
export default {
    name:'v-cotalog',
    components:{
        vCotalogItem,
    }
}
</script>

<style lang="scss">
.v-cotalog{
    text-align: center;
    .v-cotalog-products{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

</style>