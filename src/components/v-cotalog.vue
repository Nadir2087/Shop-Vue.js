<template>
    <div class="v-cotalog">
    <h2>Коталог Товаров</h2>
    <div class="v-cotalog-products">
        <vCotalogItem  v-for="post in allProd" :key="post.id" :product_data="post" @addCard="AddCard" @nowPro="nowPro"/>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import vCotalogItem from './v-cotalog-item.vue';
export default {
    name:'v-cotalog',
    components:{
        vCotalogItem,
    },
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['ADD_TO_CARD','NOWPRODUCT']),
        AddCard(data){
            this.ADD_TO_CARD(data)
            // this.t = data
        },
        nowPro(data){
            this.NOWPRODUCT(data)
        }
    },  
    mounted(){
        this.$store.dispatch('GET_CHARACTERS')
         },

    computed: mapGetters(['allProd','allCard']),
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