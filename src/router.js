import {createRouter, createWebHashHistory} from 'vue-router';
import cotalog from './components/v-cotalog.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', component: cotalog},
    ]
})