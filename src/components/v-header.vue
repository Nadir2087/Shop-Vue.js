<template>
  <header class="v-header">
    <div class="container">
        <div class="header_wraper">
            <div class="header_logo">logo</div>
                <nav class="header_nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">link1</a></li>
                        <li><a href="">link2</a></li>
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
            }
            .header_nav ul{
                list-style-type: none;
                display: flex;
                li{
                    margin-left: 10px;
                }
            }
        }
        .container{
            max-width: 1100px;
            margin: 0 auto;
        }
    }
</style>