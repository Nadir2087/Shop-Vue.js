<template>
  <div class="v-card">
    <h3>Card</h3>
    <div class="v-card-">
        <vCardItem/>
    </div>
  </div>
</template>

<script>
import vCardItem from './v-card-item.vue';
export default {
    name:'v-card',
    components:{
        vCardItem
    },
    props:{
      c_data:{
        type: Object,
        default(){
          return{}
        }
      }
    }
}
</script>

<style>

</style>