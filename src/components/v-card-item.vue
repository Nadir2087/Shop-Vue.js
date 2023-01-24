<template>
    <div class="v-card-item">
      <img class="v-item-img" src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg" alt="">
      <div class="v-item-info">
        <h3 class="v-item-title">{{ card_data.title }}</h3>
        <p class="plice">{{card_data.price}} $</p>
      </div>
      <div class="btn">
        <button class="del" @click="delCard">Удалить</button>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name:'v-card-item',
    props:{
      card_data:{
        type: Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      delCard(){
        this.$emit('delCard')
      }
    }
  }
  </script>
  
  <style lang="scss">
    .v-card-item{
      margin: 10px 10px;
      width: 100%;
      height: 135px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
      overflow: hidden;
      border-radius: 15px;
      .v-item-img{
        width: 200px;
        float: left;
      }
      .del{
        padding: 5px;
        
      }
    }
  </style>