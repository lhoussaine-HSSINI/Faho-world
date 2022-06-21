<template>
  <footer  class="section_1 bg-dark py-5 px-1 px-sm-5 mb-sm-3 px-sm-0 mx-0 mx-sm-4 row  text-light">
    <!--      <img src='~@/assets/images/logo_v1.svg' width="185" height="27">-->
    <!--      <div class="col-12 col-sm-4 d-flex flex-column justify-content-center">-->
    <!--        <h2>Split your payments</h2>-->
    <!--        <p class="card_after_header">Shop your favorite stores, including Shein, Namshi and Faces, and split your payments over time.</p>-->
    <!--      </div>-->
    <div class="col-10 col-sm-11 d-flex flex-column justify-content-center">
      <div class="d-flex justify-content-between align-items-end  px-sm-5 flex-wrap">
        <div class="d-flex flex-column align-items-start justify-content-between">
          <img src='~@/assets/images/logo_v1.svg' width="150" height="50" alt="logo faho world">
          <span class="mt-2">190 Hay Mohammadi, Ouarzazate 45 000, Morocco</span>
        </div>
<!--          <img src='~@/assets/images/Flag_of_Morocco.svg.png' width="15" height="15">-->
          <p class="mt-2 mt-sm-0">The Kingdom of Morocco </p>
      </div>
      <div class="d-flex flex-wrap  justify-content-between align-items-start px-sm-5 my-3">
        <div class="d-flex flex-column justify-content-center">
          <p class="p_befor_a">Faho world</p>
          <router-link to="/">Home</router-link>
          <router-link to="/about" replace>About us</router-link>
          <router-link to="/shop" replace>shop</router-link>
          <router-link to="/store" replace>store</router-link>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p class="p_befor_a">For Business</p>
          <router-link to="/">Partners</router-link>
          <router-link to="/about">Merchant login</router-link>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p class="p_befor_a">Support</p>
          <router-link to="/about">Help center</router-link>
        </div>
      </div>
      <div class="d-flex justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap p px-sm-5 mt-3 align-items-center">
        <p>© 2022 Faho world . All Rights Reserved</p>
        <div class="d-flex align-items-center justify-content-around">
          <p>Follow us</p>
          <div class="mx-2 d-flex align-items-center justify-content-center">
              <router-link to="/" class="btn-dark btn" >
                <FAIHoussain :icon="['fab','facebook']"/></router-link>
              <router-link to="/about" class="btn-dark btn">
                <FAIHoussain :icon="['fab','instagram']"/></router-link>
              <router-link to="/shop" class="btn-dark btn">
                <FAIHoussain :icon="['fab','twitter']"/></router-link>
              <router-link to="/store" class="btn-dark btn">
                <FAIHoussain :icon="['fab','linkedin']"/></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2 col-sm-1">
      <router-link to="/" class="btn-dark btn" id="lfog_A">
        <FAIHoussain :icon="['fas','arrow-up']"/></router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
#lfog_A{
  color: #ffffff !important;
  background: #a68dbc!important
}
.section_1{
  border-radius:0 0 25px 25px ;
}
span{
  color: hsla(0,0%,100%,.7);
  font-size:0.8em;}
p{
  margin-bottom: 0;
  font-size:0.8em;
}
.p_befor_a{
  margin-top:10px;
  font-size:17px;
  font-family: Helvetica-Medium , system-ui;
}
a{
  color: hsla(0,0%,100%,.7) !important;
  margin: 0 !important;
  font-weight: 200 !important;
  font-size:17px !important;
  font-family: Helvetica-Medium , system-ui;
}
.router-link-exact-active {
  color: hsla(0,0%,100%,.7) !important;
  border-top: 0 #0e0e0e !important;
  margin: 0 !important;
  font-weight: 200 !important;
  font-size:17px;
}
</style>