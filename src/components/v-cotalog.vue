<template>
    <div class="v-cotalog">
    <h2>Коталог Товаров</h2>
    <p>{{ $store.state }}</p>
    <div class="v-cotalog-products">
        <vCotalogItem  v-for="post in posts" :key="post.id" :product_data="post" @addCard="AddCard"/>
    </div>
    <vCard v-if="card.length > 0" :c_data="card" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios'
import vCotalogItem from './v-cotalog-item.vue';
import vCard from './v-card.vue';
export default {
    name:'v-cotalog',
    components:{
        vCotalogItem,
        vCard
    },
    data(){
        return{
            posts:[],
            card:[]
        }
    },
    methods:  {
        ...mapActions('GET_CHARACTERS'),
            AddCard(data){
            this.card.push(data)
        },
    },
    // methods:{
    //     

    // },
    mounted(){
        axios
        .get(' http://localhost:3000/products')
        .then(response => ( this.posts = response.data));
        },
    
    computed: mapGetters(['allProd']),
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