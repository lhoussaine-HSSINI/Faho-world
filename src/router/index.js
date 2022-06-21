import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/help.vue";
import Shop from "../views/shop.vue";
import Business from "../views/Business.vue";
import Partner_Registration from "../views/Partner_Registration.vue";
import Store from "../views/store.vue";
import Product from "../views/Product.vue";
import cart_py from "../views/card_pay.vue";
import Login from "../views/Login.vue"
import Registration from "../views/User_registration.vue"
import HomeAdmin from "../views/admin_page.vue"
import  HomeUser from "../views/user_page.vue"
// import NotFound from "@/views/NotFound";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/HomeAdmin",
        name: "HomeAdmin",
        component: HomeAdmin,
    },
    {
        path: "/HomeUser",
        name: "HomeUser",
        component: HomeUser,
    },
    {
        path: "/help",
        name: "help",
        component: Help,
    },
    {
        path:"/product/:id",
        props:route=>({id: parseInt(route.params.id)}),
        name: "product",
        component: Product,
    },
    {
        path: "/store",
        name: "store",
        component: Store,
    },
    {
        path: "/cartpy",
        name: "cartpy",
        component: cart_py,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/registration",
        name: "registration",
        component: Registration,
    },
    {
        path: "/shop",
        name: "shop",
        component: Shop,
    },
    {
        path: "/business",
        name: "business",
        component: Business,
    },
    {
        path: "/about",
        name: "about",
        component: About,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/PartnerR",
        name: "PartnerR",
        component: Partner_Registration,
    },
    {
        path:"/:NotFound(.*)*",
        redirect:"/"
        // component: NotFound
    }
];

// noinspection JSCheckFunctionSignatures
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
