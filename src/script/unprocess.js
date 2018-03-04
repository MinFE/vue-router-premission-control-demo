import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './unprocess-app.vue';
import Home from './home.vue';
import Err from './error.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
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
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
