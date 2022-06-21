<template>
  <h4 class="mt-4">Featured Stores</h4>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
      rotate: 50,
      stretch: 1,
      depth:80,
      modifier: 0,
      slideShadows: true,
    }"
      :pagination="false"
      :modules="modules"
      class="mySwiper parallax-slider">
    <SwiperSlide v-for="image in Featured_Stores" :key="image.id">
      <div class="rounded-1 div_img d-flex justify-content-center align-items-center" >
        <!--            <img :src="image.imageUrl" width="1024" height="1024" alt="Puppy with balloons">-->
        <i class="i_content_img " :style="{'background-image': 'url(' + image.imageUrl + ')'}"></i>
        <div class="show_shop d-flex justify-content-center align-items-center">
          <strong><a :href="image.lien_store">show shop</a></strong>
        </div>
      </div>
    </SwiperSlide>
  </swiper>

</template>

<script>
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

// init Swiper:
SwiperCore.use([EffectCoverflow, Pagination]);
export default {
  name: "Featured_Stores_slider",
  components: {Swiper, SwiperSlide},
  data() {
    return {
      Featured_Stores:[
        {id:1,name:"Styli",type_store:"Apparel",imageUrl:require("../assets/images/styli.jpg"),
          al3ard:10 ,logo_store:require("../assets/images/styli_logo.jpg"), lien_store:"https://bit.ly/3pRP1eT"},
        {id:2,name:"SHEIN",type_store:"Apparel",imageUrl:require("../assets/images/SHEIN.jpg"),
          al3ard:25 ,logo_store:require("../assets/images/SHEIN_logo.png"), lien_store:"https://bit.ly/3oBSXQA"},
        {id:3,name:"Namshi",type_store:"Apparel",imageUrl:require("../assets/images/Namshi_logo.jpg"),
          al3ard:15 ,logo_store:require("../assets/images/Namshi.png"), lien_store:"https://bit.ly/3oBzGyD"},
        {id:4,name:"Hibobi",type_store:"Baby & Child",imageUrl:require("../assets/images/Hibobi_logo.jpg"),
          al3ard:30 ,logo_store:require("../assets/images/Hibobi.jpg"), lien_store:"https://hibobi.app.link/pCXzCMvB2nb"},
      ],
    }
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  margin-top: 30px;
  /*padding-top: 50px;*/
  padding-bottom: 30px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  /*width: 40%;*/
  height: 18.5625em;
  width: 21em;
  margin: 12px 20px 0 20px;
  border-radius: 68px;
}


.swiper-wrapper {
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  align-items: center;
}
.i_content_img{
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0.9rem !important;
}
.show_shop{
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  padding: 0.45em 0.8em;
  position: relative;
  z-index: 199;
  opacity: 1;
  transform: translateY(50%);
}
.div_img{
  height: 13.8125em;
  position: relative;
}

i, .show_shop strong{
  font-size: xx-small;
}
/*@media screen and (max-width: 650px){*/
/*  .swiper-slide {*/
/*    height: 26.396em;*/
/*    width: 29.8em;*/
/*  }*/
/*}*/
</style>