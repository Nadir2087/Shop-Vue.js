<template>
  <div class="v-product">
    <img src="https://ae04.alicdn.com/kf/Hfaccd4d3a40f485897df3e8158c20e9dQ/MR-GREEN.jpg_640x640.jpg" alt="" class="img">
    <div class="product_info">
        <h2 class="product_name">{{ this.$route.params.product}}</h2>
        <p class="product_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi molestias distinctio tenetur voluptas soluta impedit vero, nihil laboriosam quod, aspernatur aperiam officia laudantium. Beatae libero tenetur odio fugiat veritatis voluptatum!</p>
        <p class="product_price">{{ nowPro.price}}</p>
        <div class="btns">
            <a class="btn add_to_card" @click="AddCard(nowPro)">Добавить в Корзинку</a>
            <a class="btn pay_now">Купить сейчас</a>
        </div>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
    name:'v-product',
    data(){
        return{}
    },
    methods:{
        ...mapActions(['ADD_TO_CARD']),
        AddCard(data){
            this.ADD_TO_CARD(data)
            // this.t = data
        },
    },
    computed:mapGetters(['nowPro']),
    // props:{
    //     product_info:{
    //         type: Object,
    //         default(){
    //             return{}
    //   }
    // }
    // }
}
</script>

<style lang="scss">
.v-product{
    display: flex;
    padding: 40px 0 0 0;
    .img{
            width: 45%;
            border-radius: 20px;
        }
    .product_info{
        
        .product_price{
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            font-weight: 600;
            font-size: 20px;
        }
        .btns{
            width: 400px;
            display: flex;
            justify-content: space-between;
            .btn{
            text-align: center;
            display: inline-block;
            padding: 20px 0;
            width: 160px;
            border-radius: 30px;
            color: #fff;
            transition: all .3s ease;
            }
            .btn:hover{
                background: #757575;
            }
            .add_to_card{
                background: green;
            }
            .pay_now{
                background: blue;
            }
        }

    }
}
</style>