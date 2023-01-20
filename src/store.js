import { createStore } from "vuex";

export default createStore({
    state(){
        return{
            products: []
        }
    },
    actions:{
        Product(com){
            const jso = fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then(response => response.json())

            com.commit('UPDATAPRODUCTS', jso)
        }
    },
    mutations:{
        UPDATAPRODUCTS(state, product){
            state.products = product
        }
    },
    getters:{
        allProd(state){
            return state.products
        }
    }
})

/*

*/