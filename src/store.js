import { createStore } from "vuex";
const axios = require('axios')
export default createStore({
    state(){
        return{
            products: []
        }
    },
    actions:{
        GET_CHARACTERS: async (context) => {
            let data = await axios.get('http://localhost:3000/products');
            context.commit('UPDATAPRODUCTS', data)
        }
    },
    mutations:{
        UPDATAPRODUCTS:(state,data)=>{
            state.products = data
        }
    },
    getters:{
        allProd: (state) => {
            return state.products
        }
    }
})

/*

*/