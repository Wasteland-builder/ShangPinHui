// 引入路由组件
import Login from "@/views/Login"
import Detail from "@/views/Detail"
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/myOrder'
import GroupOrder from '@/views/Center/groupOrder'

// 路由懒加载
// const foo = () => import("@/views/Home") 

// 路由配置信息
export default
    [
        {
            path: '/center',
            component: Center,
            meta: { show: true },
            children:[
                {
                    path: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'grouporder',
                    component: GroupOrder
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]
        },
        {
            path: '/paysuccess',
            component: PaySuccess,
            meta: { show: true }
        },
        {
            path: '/pay',
            component: Pay,
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                if (from.path ==='/trade') {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/trade',
            component: Trade,
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                if (from.path=="/shopcart") {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: { show: true }
        },
        {
            path: '/detail/:skuid',
            component: Detail,
            meta: { show: true }
        },
        {
            path: '/home',
            component: () => import("@/views/Home"),
            meta: { show: true }
        },
        {
            path: '/addcartsuccess',
            component: () => import("@/views/AddCartSuccess"),
            name: 'addcartsuccess',
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            // path: '/search/:keyword',
            path: '/search/:keyword?',
            component: () => import("@/views/Search"),
            meta: { show: true },
            name: "search"
        },
        {
            path: '/register',
            component: () => import("@/views/Register"),
            meta: { show: false }
        },
        // 重定向
        {
            path: '*',
            redirect: "/home"
        }
    ]
