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
    <SwiperSlide v-for="image in stores" :key="image.id">
          <div class="rounded-1 div_img d-flex justify-content-center align-items-center" >
            <i class="i_content_img " :style="{'background-image': 'url(/images/store/'+ image.Store_Image +')'}"></i>
            <div class="show_shop d-flex justify-content-center align-items-center">
              <strong><a :href="image.Store_Url">show shop</a></strong>
            </div>
          </div>
          <div class="after_div_img d-flex justify-content-between align-items-center py-3">
              <div class="d-flex  align-items-center">
                <div class="logo_store"><img :src="'/images/store/'+image.Store_Logo" width="20" height="20" alt="Puppy with balloons"></div>
                <div class="d-flex flex-column align-items-start">
                  <i  class="i_store_tojar">{{image.Store_Name}}</i>
                  <i  class="i_store_tojar_type">{{image.Store_Category}}</i>


                </div>
              </div>
              <div class="d-flex  align-items-center">
                <div><i class="i_store_tojar">Extra 10% Off</i></div>
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
import axios from "axios";

// init Swiper:
SwiperCore.use([EffectCoverflow, Pagination]);
export default {
  name: `slider_home`,
  components: {Swiper, SwiperSlide},
  data() {
    return {
      parallaxSwiperWith:0,
      stores:[],
    }
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };

  },
  mounted() {
    this.getRvData();
  },
  methods: {
    // start product function
    async getRvData(){
      let res=await axios.get(`http://localhost/faho_world/Read-Store`);
      const resData=res.data;
      if (res.status == 200){
        if (!resData.error){
          this.stores= resData.table_store.filter((el)=> el.id>4);
        }
      }
    },
  }
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