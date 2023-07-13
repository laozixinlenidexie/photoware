import Vue from "vue";
import VueRouter from "vue-router";
import Helloworld from '@/components/HelloWorld';
import Content from "@/page/Content"
import xiangqing from '@/page/XiangQing'
Vue.use(VueRouter);
const routes=[
    {
        path:'/vue',
        name:'helloworld',
        component:Helloworld,
    },
    {
        path: '/home' ,
        name:'home',
        component: Content,
    },
    {
      path: "/xiangqing"  ,
        name: 'xiangqing',
        component: xiangqing,
    },
    {
        path: '*',
        redirect: '/home'
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router