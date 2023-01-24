<template>
  <div class="v-cotalog-item"><router-link @click="nowPro" :to="{ path: '/catalog/'+ product_data.title}">
    <img class="v-item-img" src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg" alt="">
    <div class="v-item-info">
      <h3 class="v-item-title">{{ product_data.title }}</h3>
      <p class="plice">{{product_data.price}} $</p>
    </div>
  </router-link>
    <button @click="addCard">в корзину</button>
  </div>
</template>

<script>
export default {
  name:'v-cotalog-item',
  data(){
    return{
      show: false
    }
  },
  props:{
    product_data:{
      type: Object,
      default(){
        return{
        }
      }
    }
  },
  methods:{
    addCard(){
      this.$emit('addCard', this.product_data)
    },
    nowPro(){
      this.$emit('nowPro', this.product_data)
    },
  }
}
</script>

<style lang="scss">
  .v-cotalog-item{
    a{
      text-decoration: none;
      color:black;
    }

    padding: 0 0 10px 0;
    margin: 10px 10px;
    width: 200px;
    min-height: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    cursor: pointer;
    .v-item-img{
      width: 200px;
      border-bottom: 2px solid rgba(90, 90, 90, .2);
    }
  }
</style>