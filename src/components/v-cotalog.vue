<template>
    <div class="v-cotalog">
    <h2>Коталог Товаров</h2>
    <div class="v-cotalog-products">
        <vCotalogItem  v-for="post in posts" :key="post.id" :product_data="post"/>

    </div>
    </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import vCotalogItem from './v-cotalog-item.vue';
export default {
    name:'v-cotalog',
    components:{
        vCotalogItem,
    },
    data(){
        return{
            posts:[]
        }
    },
    // computed: mapGetters(['allProd']),
    // methods: mapActions(['Product']),
    mounted(){
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(json => this.posts = json)
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
    .post_item{
        border: 1px solid #ccc;
        border-radius: 5px;
    }
}

</style>