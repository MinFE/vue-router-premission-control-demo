import Vue from 'vue';
import { router } from './process-router';
import App from './process-app.vue';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
