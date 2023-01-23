<template>
  <div class="v-product">
    <img src="https://ae04.alicdn.com/kf/Hfaccd4d3a40f485897df3e8158c20e9dQ/MR-GREEN.jpg_640x640.jpg" alt="" class="img">
    <div class="product_info">
        <h2 class="product_name">MacBuc 2020</h2>
        <p class="product_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi molestias distinctio tenetur voluptas soluta impedit vero, nihil laboriosam quod, aspernatur aperiam officia laudantium. Beatae libero tenetur odio fugiat veritatis voluptatum!</p>
        <p class="product_price">2000$</p>
        <div class="btns">
            <a class="btn add_to_card">Добавить в Корзинку</a>
            <a class="btn pay_now">Купить сейчас</a>
        </div>

    </div>

  </div>
</template>

<script>
export default {
    name:'v-product'
}
</script>

<style lang="scss">
.v-product{
    display: flex;
    padding: 40px 0 0 0;
    .img{
            width: 50%;
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