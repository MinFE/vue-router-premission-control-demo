
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './home.vue';
import Err from './error.vue';

Vue.use(VueRouter);

export let baseRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/error',
        name: 'error',
        component: Err
    },
    {
        path: '*',
        redirect: '/error'
    }
];

export let router = new VueRouter({
    routes: baseRoutes
});