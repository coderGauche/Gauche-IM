import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: { name: "login" }
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    {

        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        redirect: { name: "404" }
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
})


export default router;