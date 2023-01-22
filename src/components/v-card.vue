<template>
  <div class="v-card">
    <h3>Card</h3>
    <div class="v-card-">
        <vCardItem  v-for="card in allCard" :key="card.id" :card_data="card"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vCardItem from './v-card-item.vue';
export default {
    name:'v-card',
    components:{
        vCardItem
    },
    computed: mapGetters(['allCard'])
}
</script>

<style>

</style>