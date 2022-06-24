<template>
  <div class="nav_and_after py-5 mx-0 mx-sm-4" id="fog_a_Z"
       v-if="$router.currentRoute.value.name!=='PartnerR' && $router.currentRoute.value.name!=='registration'">
    <nav class="d-flex flex-column flex-sm-row align-items-center  justify-content-between justify-content-sm-around">
      <img class="mb-3 mb-sm-0" src='~@/assets/images/logo_v2.svg' width="150" height="50" alt="logo faho world">
      <div class="d-flex align-items-center justify-content-between">
        <router-link class=" mx-2 mx-sm-3" to="/">Home</router-link>
        <router-link class=" mx-2 mx-sm-3" to="/shop" replace>Shop</router-link>
        <router-link v-if="!user_connecter && !user_login" class=" mx-2 mx-sm-3" to="/business" replace>business</router-link>
        <router-link v-if="user_connecter && user_login && type_user===0 " class=" mx-2 mx-sm-3" to="/HomeUser" replace>
          Dashboard</router-link>
        <router-link v-if="user_connecter && user_login && type_user===1 " class=" mx-2 mx-sm-3" to="/HomeAdmin" replace>Dashboard</router-link>
<!--        <div class="col-2">-->
<!--          <button class="btn-dark btn rounded-pill">Login</button>-->
<!--        </div>-->
        <router-link v-if="!user_connecter && !user_login" class="mx-2 mx-sm-3 btn-dark btn rounded-pill" to="/login" replace>Login</router-link>
        <router-link v-if="user_connecter && user_login" class="mx-2 mx-sm-3 btn-dark btn rounded-pill" to="/" @click="logout()" replace>Logout</router-link>
        <div class="mx-2 mx-sm-3">
        <router-link :to="{ name: 'cartpy', path:'/cartpy'}" rel="nofollow" class="cart_py" replace>
          {{mystore}}
        </router-link>
        </div>
      </div>
    </nav>
    <After_header_router_home v-if="$router.currentRoute.value.name==='home'"></After_header_router_home>
    <After_header_router_shop v-if="$router.currentRoute.value.name==='shop'"></After_header_router_shop>
    <After_header_router_business v-if="$router.currentRoute.value.name==='business'"></After_header_router_business>
  </div>
  <div class="nav_and_after py-5 mx-0 mx-sm-4 d-flex justify-content-center align-items-center flex-column"
       v-else-if="$router.currentRoute.value.name==='PartnerR'">
    <div class="d-flex justify-content-center align-items-end">
      <img class="mb-3" src='~@/assets/images/logo_v2.svg' width="150" alt="logo faho world">
      <p class="ms-1">Partners</p>
    </div>
    <Partner_registration></Partner_registration>
  </div>
  <div class="nav_and_after pt-5 mx-0 mx-sm-4 d-flex justify-content-center align-items-center flex-column"
       v-else-if="$router.currentRoute.value.name === 'registration'">
      <img class="mb-3" src='~@/assets/images/logo_v2.svg' width="150" alt="logo faho world">
    <User_registration></User_registration>
  </div>
</template>

<script>
import After_header_router_home from "@/components/After_header_router_home";
import After_header_router_shop from "@/components/After_header_router_shop";
import After_header_router_business from "@/components/After_header_router_business";
import Partner_registration from "@/components/partner_registration_components";
import User_registration from "@/components/User_registration_components"
export default {
  name: `AppHeader`,
  components: {
    User_registration,
    Partner_registration,
    After_header_router_home,
    After_header_router_shop,
    After_header_router_business,
  },
  created(){
    console.log(this.$route.path);
    console.log(this.$route.name);
  },
  mounted(){
        if (!JSON.parse(localStorage.getItem('mystore'))){
          localStorage.setItem("mystore", JSON.stringify([]))
          console.log('yalah tkriyat')
        }
        this.mystore=JSON.parse(localStorage.getItem('mystore')).length;
        this.user_connecter=JSON.parse(localStorage.getItem('user_connecter'));
        this.user_login=JSON.parse(localStorage.getItem("user_login"));
        this.type_user=JSON.parse(localStorage.getItem("type_user"));
  }
  ,
  methods: {
    logout(){
      localStorage.setItem("user_connecter", JSON.stringify(false));
      localStorage.setItem("user_login", JSON.stringify(false));
      localStorage.setItem("type_user", JSON.stringify(9));
      console.log(JSON.parse(localStorage.getItem('user_connecter')));
      console.log(JSON.parse(localStorage.getItem("user_login")));
      this.$router.push({path:'/'});
    }
  },
  data(){
    return {
      user_connecter:false,
      user_login:false,
      type_user:null,
      mystore:null,
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-dark:hover{
  color: #ffffff !important;
  background: #a68dbc!important}
.nav_and_after {
  background-image: url('~@/assets/hom_background.webp');
  background-size: cover;
  border-radius: 25px 25px 0 0;
}
.cart_py{
  display: block;
  background-image: url('~@/assets/cart_py.png');
  background-size: cover;
  text-align: center;
  width: 32px;
  height: 30px;
  line-height: 40px;
  font-size: 14px;
  background-size: 100% 100%;
}
a {
  font-size:13px;
  color: #0e0e0e !important;
  text-decoration: none !important;}
.router-link-exact-active {
  color: #673ab7 !important;
  border-top: 2px solid #0e0e0e !important;
  margin-top: -2px !important;
  font-weight: 800;
  text-align:center;
}
.nav_and_after p{
  font-family: HelveticaNeue, cursive;
}
.p_0{
  font-size: 1.3em;
  margin-bottom: 0.5rem;
  font-weight: bold;
  line-height: 130%;
  letter-spacing: -.02em;
  font-family: Helvetica-Medium, sans-serif;

}
.btn-dark{
  color: #ffffff !important;
}
h1{
  font-family: Spacegrotesk, sans-serif !important;
  font-weight: bold !important;
  letter-spacing: -.05em !important;
  font-size: 73px !important;
}

@media screen and (max-width: 670px) {
    h1{
      font-size: 40px !important;
    }
    .p_0{
      font-size: 1.3em;
      font-weight: 100;
    }
    .p_1{
      font-size: 15px;
      margin: 12px 35px 20px 35px;
    }
  @media screen and (max-width: 430px) {
    .nav_and_after{
      border-radius:0;
    }
  }
}

</style>
