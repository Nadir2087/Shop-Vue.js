import { createStore } from "vuex";
const axios = require('axios')
export default createStore({
    state(){
        return{
            products: [],
            card:[]
        }
    },
    actions:{
        async GET_CHARACTERS (context){
            let data = await axios.get('http://localhost:3000/products');
            context.commit('UPDATAPRODUCTS', data.data)
        },
        ADD_TO_CARD({commit}, data){
            commit('ADDCARD',data)
        }
    },
    mutations:{
        UPDATAPRODUCTS:(state,data)=>{
            state.products = data
        },
        ADDCARD(state,data){
            state.card.push(data)
        }
    },
    getters:{
        allProd: (state) => {
            return state.products
        },
        allCard: (state) => {
            return state.card
        }
    }
})

/*

*/