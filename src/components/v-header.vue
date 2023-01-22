<template>
  <header class="v-header">
    <div class="container">
        <div class="header_wraper">
            <div class="header_logo"><a href="#/"> Notnic</a></div>
            <div class="search">
                <img src="../img/search.svg" alt="">
                <input class="search_input" type="text" placeholder="Поиск">
            </div>
                <nav class="header_nav">
                    <ul>
                        <li><a href="#" class="nav-link">
                            <img src="../img/user.svg" alt="">
                            Войти</a></li>
                        <li><a href="#/card" class="nav-link">
                            <img src="../img/cart.svg" alt="">
                            Корзинка</a></li>
                    </ul>
            </nav>
        </div>
    </div> 
  </header>
</template>

<script>
export default {
    name:'v-header',
    components:{},
}
</script>

<style lang="scss">
    .v-header{
        .header_wraper{
            border-bottom: 1px solid #c6c6c6;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content:space-between;
            .header_logo{
                font-size: 30px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                font-weight: bold;
                a{
                    text-decoration: none;
                    color: green;
                }
            }
            .search{
                display: flex;
                align-items: center;
                width: 600px;
                padding: 5px;
                margin: 0 0 0 30px;
                border: 2px solid #000;
                border-radius: 15px;
                img{
                    width: 20px;
                    color: #c6c6c6;
                }
                .search_input{
                    border: none;
                    outline:none;
                    width: 100%;
                }
            }
            .header_nav ul{
                list-style-type: none;
                display: flex;
                align-items:flex-end;
                li{
                    margin-left: 15px;
                    
                    font-size: 15px;
                    .nav-link{    
                        align-items: center;
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                        
                        color: #000;
                        text-decoration: none;
                        img{
                            width:1.5em;
                        }
                    }

                }

                }
            }
        }
        .container{
            max-width: 1100px;
            margin: 0 auto;
        }
</style>