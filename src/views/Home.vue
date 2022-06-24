<template>
  <AppHeader></AppHeader>
  <main>
    <section  class="section_1 bg-light py-5 px-5 px-sm-0 mx-0 mx-sm-4 row align-items-start flex-column flex-sm-row">
    <div class="col-12 col-sm-4 d-flex flex-column justify-content-center">
      <h2>Split your payments</h2>
      <p class="card_after_header">Shop your favorite stores, including Shein, Namshi and Faces, and split your payments over time.</p>
    </div>
    <div class="col-12 col-sm-4 d-flex flex-column justify-content-center">
      <h2>No hassle, no stress</h2>
      <p class="card_after_header">No more tedious approval processes. Sign up in less than 2 minutes with your ID and mobile number.</p>
    </div>
    <div class="col-12 col-sm-4 d-flex flex-column justify-content-center">
      <h2>No hidden fees, no interest</h2>
      <p class="card_after_header">That’s right – there’s no catch. No hidden fees or interest added to your total.</p>
    </div>
  </section>
    <slider_home></slider_home>
    <Featured_Stores_slider></Featured_Stores_slider>
    <section class="text-center  p-2 px-sm-0 mx-0 mx-sm-4 d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center   flex-column text_shopping">
        <p>We’d never let you run short of shopping options. Check these out before you check out.</p>
        <router-link class="col" to="/shop" replace>Explore Stores
          <FAIHoussain :icon="['fas', 'arrow-right']" class="icon alt"/></router-link>
      </div>
    </section>
    <section class="section_5 py-5 px-5 px-sm-0 mx-0 mx-sm-4 mt-4 row justify-content-center align-items-center flex-column ">
      <div class="d-flex flex-column justify-content-center p-5 my-5">
        <h2>Thinking about becoming one of our partners? </h2>
        <div class="col d-flex justify-content-center align-items-center">
          <router-link to="/PartnerR" class=" btn-dark btn rounded-pill d-flex justify-content-center align-items-center" replace>
            <span class="mx-1">Sign up</span>
            <FAIHoussain :icon="['fas' ,'arrow-right']" class="icon alt" />
          </router-link>
        </div>
      </div>
    </section>
</main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import slider_home from "@/components/slider_home.vue";
import Featured_Stores_slider from "@/components/Featured_Stores_slider.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: `Home`,
  components: {
    AppHeader,
    slider_home,
    Featured_Stores_slider,
    AppFooter
  }
}
</script>

<style scoped>
h2{
  font-size: 1.2em;
  line-height: 130%;
  font-weight: revert;
  letter-spacing: -.02em;
}
.card_after_header{
  font-size: small !important;
}
.section_1{
  border-radius:0 0 25px 25px ;
}
.text_shopping{
  width: 22em;
}
.text_shopping P{
  font-size: 2vw;
  font-family: HelveticaNeue, system-ui;
  line-height: 130%;
}
.section_5{
  background: #a68dbc;
}
.section_5 div{
  max-width: 38em;
}
.section_5 h2{
  font-family: Spacegrotesk , system-ui;
  letter-spacing: -.05em;
  font-size: 4.729vw;
  line-height: 100%;
  margin-bottom: 1em;
  font-weight: bold;
}
.btn-dark{
  color: #ffffff !important;
}
@media screen and (max-width: 650px) {
  .card_after_header{
    font-size: 12px !important;
  }
  @media screen and (max-width: 430px) {
    .section_1{
      border-radius:0;
    }
    .text_shopping P{
      font-size: 4.96vw;
      line-height: 140%;
    }
  }
}
</style>