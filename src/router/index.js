import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from "../views/Cart.vue"
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import User from '../views/User.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import ProductList from '../views/ProductList.vue'
import Product from '../views/ProductDetail.vue'


Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'MyHome',
//     redirect: MyHome
//   },//默认路径
//   {
//     path: '/MyHome',
//     name: 'MyHome',
//     component: MyHome,
//     meta: {
//       index: 1,
//     },
//   },
//   {
//     path: '/MyCategory',
//     name: 'MyCategory',
//     component: () =>
//       import('../views/MyCategory.vue'),
//     meta: {
//       index: 1,
//     },
//   },
//   {
//     path: '/MyCart',
//     name: 'MyCart',
//     component: () => import('../views/MyCart.vue'),
//     meta: {
//       index: 1,
//     },
//   },
//   {
//     path: '/MyUser',
//     name: 'MyUser',
//     component: () => import('../views/MyUser.vue'),
//     meta: {
//       index: 1,
//     },
//   },
// ];

//创建并暴漏一个路由器
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:
    [
      {
        path: '/',
        name: 'home',
        redirect: 'home'//路由器默认路径
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          index: 1,
        },
      },
      {
        name: 'category',
        path: '/category',
        component: Category,
        meta: {
          index: 1,
        },
      },
      {
        name: 'cart',
        path: '/cart',
        component: Cart,
        meta: {
          index: 1,
        },
      },
      {
        name: 'user',
        path: '/user',
        component: User,
        meta: {
          index: 1,
        },
      },
      // {
      //   name: 'detail',
      //   path: '/detail',
      //   component:Detail,
      //   meta: {
      //     index: 2,
      //   }
      // },
      {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
          index: 2,
        }
      },
      {
        name: 'detail',
        path: '/detail',
        component: Detail,
        meta: {
          index: 2,
        }
      },
      {
        name: 'product-list',
        path: '/product-list',
        component: ProductList,
        meta: {
          index: 2,
        }
      },
      {
        name: '/product/:id',
        path: '/product',
        component: Product,
        meta: {
          index: 2,
        }
      },
      {
        path: '/create-order',
        name: 'create-order',
        component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue'),
        meta: {
          index: 2
        }
      },
      {
        path: '/address',
        name: 'address',
        meta: {
          index: 2
        },
        component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue')
      },
      {
        path: '/address-edit',
        name: 'address-edit',
        meta: {
          index: 2
        },
        component: () => import(/* webpackChunkName: "address-edit" */ '../views/AddressEdit.vue')
      },
      {
        path: '/order',
        name: 'order',
        meta: {
          index: 2
        },
        component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue'),
      },
      {
        path: '/setting',
        name: 'setting',
        meta: {
          index: 2
        },
        component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
      },
    ]
})
export default router
