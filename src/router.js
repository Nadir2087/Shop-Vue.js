import {createRouter, createWebHashHistory} from 'vue-router';
import comOne from './components/comOne.vue'
import cotalog from './components/v-cotalog.vue'
import comThee from './components/comThee.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/one', component: comOne},
        {path: '/v-cotalog', component: cotalog},
        {path: '/thee', component: comThee}
    ]
})