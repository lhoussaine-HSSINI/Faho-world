<template>
      <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="false"
      :slidesPerView="'auto'"
      :coverflowEffect="{
      rotate: 50,
      stretch: 1,
      depth:50,
      modifier: 0,
      slideShadows: true,
    }"
      :pagination="false"
      :modules="modules"
      class="mySwiper parallax-slider">
    <SwiperSlide v-for="image in imagess" :key="image.id">
          <div class="rounded-1 div_img d-flex justify-content-center align-items-center" >
            <i class="i_content_img " :style="{'background-image': 'url(' + image.imageUrl + ')'}"></i>
            <div class="show_shop d-flex justify-content-center align-items-center">
              <strong><a :href="image.lien_store">show shop</a></strong>
            </div>
          </div>
          <div class="after_div_img d-flex justify-content-between align-items-center py-3">
              <div class="d-flex  align-items-center">
                <div class="logo_store"><img :src="image.logo_store" width="20" height="20" alt="Puppy with balloons"></div>
                <div class="d-flex flex-column align-items-start">
                  <i  class="i_store_tojar">{{image.name}}</i>
                  <i  class="i_store_tojar_type">{{image.type_store}}</i>
                </div>
              </div>
              <div class="d-flex  align-items-center">
                <div><i class="i_store_tojar">Extra {{ image.al3ard }}% Off</i></div>
              </div>
          </div>
    </SwiperSlide>
  </swiper>
<!--  </section>-->
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
  name: `slider_home`,
  components: {Swiper, SwiperSlide},
  data() {
    return {
      parallaxSwiperWith:0,
      images:[
        {id:1,name:"Alsaif Gallery",type_store:"Home & Kitchen",imageUrl:require("../assets/images/alsayf.png"),
          al3ard:20 ,logo_store:require("../assets/images/alsyf_logo.png"), lien_store:"https://bit.ly/3CGe1ep"},
        {id:2,name:"Styli",type_store:"Apparel",imageUrl:require("../assets/images/styli.jpg"),
          al3ard:10 ,logo_store:require("../assets/images/styli_logo.jpg"), lien_store:"https://bit.ly/3pRP1eT"},
        {id:3,name:"SHEIN",type_store:"Apparel",imageUrl:require("../assets/images/SHEIN.jpg"),
          al3ard:25 ,logo_store:require("../assets/images/SHEIN_logo.png"), lien_store:"https://bit.ly/3oBSXQA"},
        {id:4,name:"Namshi",type_store:"Apparel",imageUrl:require("../assets/images/Namshi_logo.jpg"),
          al3ard:15 ,logo_store:require("../assets/images/Namshi.png"), lien_store:"https://bit.ly/3oBzGyD"},
        {id:5,name:"Hibobi",type_store:"Baby & Child",imageUrl:require("../assets/images/Hibobi_logo.jpg"),
          al3ard:30 ,logo_store:require("../assets/images/Hibobi.jpg"), lien_store:"https://hibobi.app.link/pCXzCMvB2nb"},
        {id:6,name:"PatPat",type_store:"Baby & Child",imageUrl:require("../assets/images/PatPat_logo.jpg"),
          al3ard:50 ,logo_store:require("../assets/images/PatPat.png"), lien_store:"https://bit.ly/37Da9zC"},],
    }
  },
  computed: {
    imagess: function () {
      return this.images.filter((ele)=> ele.al3ard>0);
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
.i_store_tojar{
  font-size: smaller;
  font-weight: bold;
}
.i_store_tojar_type{
  font-weight: bolder;
  font-size: x-small;
}
.logo_store{
  /*margin-left: -10px;*/
}
.swiper {
  width: 100%;
  margin-top: 30px;
  /*padding-top: 50px;*/
  padding-bottom: 50px;
  padding-left: 15px;

}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 13em;
  margin: 12px 12px 0 10px;
  border-radius: 68px;
}

/*.swiper-slide img {*/
/*  display: block;*/
/*  width: 100%;*/
/*  height: auto;*/
/*  border-radius: 68px;*/
/*}*/
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
  border-top-left-radius: 0.9rem !important;
  border-top-right-radius: 0.9rem !important;
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
.after_div_img{
  background: #fff;
  height: calc(100% - 13.8125em);
  padding: 0 0.5em;
  border-bottom-left-radius: 0.9rem !important;
  border-bottom-right-radius: 0.9rem !important;
}
i, .show_shop strong{
  font-size: xx-small;
}

</style>