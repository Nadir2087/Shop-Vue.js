import {createRouter, createWebHashHistory} from 'vue-router';
import comOne from './components/comOne.vue'
import comTwo from './components/comTwo.vue'
import comThee from './components/comThee.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/one', component: comOne},
        {path: '/two', component: comTwo},
        {path: '/thee', component: comThee}
    ]
})