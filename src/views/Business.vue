<template>
  <AppHeader></AppHeader>
  <main>
    <section class="py-5 px-4 px-sm-0 mx-0 mx-sm-4 text-center bg-white">
      <h6>Leading brands trust faho world</h6>
      <div class="row  justify-content-evenly align-items-center flex-wrap">
        <div class="col-6 col-sm-4 col-md-2" v-for="image in images" :key="image.id"> <img class="rounded-circle" :src="image.logo_store" width="90" height="90" alt="Puppy with balloons"> </div>
      </div>
    </section>
    <section class="section_5 py-5 px-5 px-sm-0 mx-0 mx-sm-4 row justify-content-center align-items-center flex-column ">
      <div class="d-flex flex-column justify-content-center p-5 my-5">
        <h2>Thinking about becoming one of our partners? </h2>
        <div class="col d-flex justify-content-center align-items-center">
          <router-link to="/PartnerR" class=" btn-dark btn rounded-pill d-flex justify-content-center align-items-center" replace>
            <span class="mx-1">Sign up</span>
            <FAIHoussain :icon="['fas' ,'arrow-right']" class="icon alt"/>
          </router-link>
        </div>
      </div>
    </section>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: `Business`,
  components: {
    AppHeader,
    AppFooter
    },
  data() {
    return {
      images:[
        {id:1,logo_store:require("../assets/images/alsyf_logo.png")},
        {id:2,logo_store:require("../assets/images/styli_logo.jpg")},
        {id:3,logo_store:require("../assets/images/SHEIN_logo.png")},
        {id:4,logo_store:require("../assets/images/Namshi.png")},
        {id:5,logo_store:require("../assets/images/Hibobi.jpg")},
        {id:6,logo_store:require("../assets/images/PatPat.png")},],
    }
  }
}
</script>

<style scoped>
h6 {
  font-weight: 600;
  line-height: 115%;
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
</style>