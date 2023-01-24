<template>
  <div class="v-card">
    <h3>Card</h3>
    <div class="v-card-">
        <vCardItem  
          v-for="(card, index) in allCard" 
          :key="card.id" :card_data="card"
          @delCard="delCard(index)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import vCardItem from './v-card-item.vue';
export default {
    name:'v-card',
    components:{
        vCardItem
    },
    data(){
      return{
      }
    },
    methods:{
      ...mapActions(['DELITECARD']),
      delCard(index){
          this.DELITECARD(index)
      }
    },
    computed: mapGetters(['allCard'])
}
</script>

<style>

</style>