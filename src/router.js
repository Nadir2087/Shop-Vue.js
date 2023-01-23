import {createRouter, createWebHashHistory} from 'vue-router';
// import cotalog from './components/v-cotalog.vue'
import card from './components/v-card.vue'
import product from './components/v-product.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', component: product},
        // {path: '/', component: cotalog},
        {path: '/card', component: card},
    ]
})