<template>
  <div class="app ">
    <vHeader/>

    <div class="container">
      
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import vHeader from './components/v-header.vue'
export default {
  name: 'App',
  components: {
    vHeader
  },
  props:{},
  methods:{}
}
</script>

<style>
  .container{
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
