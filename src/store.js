import { createStore } from "vuex";
const axios = require('axios')
export default createStore({
    state(){
        return{
            products: [],
            card:[],
            product_now: []
        }
    },
    actions:{
        async GET_CHARACTERS (context){
            let data = await axios.get('http://localhost:3000/products');
            context.commit('UPDATAPRODUCTS', data.data)
        },
        ADD_TO_CARD({commit}, data){
            commit('ADDCARD',data)
        },
        NOWPRODUCT({commit}, data){
            commit('NOWPRODUCT',data)
        }
    },
    mutations:{
        UPDATAPRODUCTS:(state,data)=>{
            state.products = data
        },
        ADDCARD(state,data){
            state.card.unshift(data)
        },
        NOWPRODUCT:(state,data)=>{
            state.product_now = data
        },

    },
    getters:{
        allProd: (state) => {
            return state.products
        },
        allCard: (state) => {
            return state.card
        },
        nowPro: (state) => {
            return state.product_now
        }
    }
})

/*

*/