
<template>
    <div class="main">
        <h2>处理状态</h2>
        <div class="nav">
            <router-link class="btn" to="/">回到首页</router-link>
            <router-link class="btn" to="/admin">管理员页面</router-link>
            <router-link class="btn" to="/user">普通用户页面</router-link>
        </div>
        <div class="operate">
            <button class="btn" @click="addAdminRoutes">注入管理员路由</button>
            <button class="btn" @click="addUserRoutes">注入用户路由</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import { baseRoutes } from './process-router';
    import Admin from './admin.vue';
    import User from './user.vue';

    export default {
        name: 'App',

        methods: {
            resetRouter() {
                let newRouter = new VueRouter({
                    routes: baseRoutes
                });

                this.$router.matcher = newRouter.matcher;
            },
            addAdminRoutes() {
                this.resetRouter();
                this.$router.addRoutes([
                    {
                        path: '/admin',
                        name: 'admin',
                        component: Admin
                    }
                ])
            },
            addUserRoutes() {
                this.resetRouter();
                this.$router.addRoutes([
                    {
                        path: '/user',
                        name: 'user',
                        component: User
                    }
                ])
            }
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nav {
        padding: 10px 0;
    }
</style>
