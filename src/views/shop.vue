<template>
  <AppHeader></AppHeader>
  <main>
<!--    <section>-->
<!--      {{$router.currentRoute.value.name}}-->
<!--    </section>-->
    <Featured_Stores_slider></Featured_Stores_slider>
<!--    Apparel-->
    <section class="container">
    <h3 class="text-start">Apparel</h3>
      <div class="row text-center">
        <div  class="col-12 col-sm-6 col-md-3 my-3 d-flex justify-content-center" v-for="image in Apparel" :key="image.id">
          <div class="card">
            <img :src="'/images/store/'+image.Store_Image" class="card-img-top" alt="Puppy with balloons">
            <div class="btn_show_shop">
              <a :href="image.Store_Url" class="btn btn-dark">show shop</a>
            </div>
            <div class="p-1 d-flex justify-content-start align-items-center">
              <img :src="'/images/store/'+image.Store_Logo" width="40" height="40" alt="aaaa" class="rounded-circle">
              <strong class="mx-1">{{ image.Store_Name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    Home & Kitchen-->
    <section class="container">
    <h3 class="text-start">Home & Kitchen</h3>
      <div class="row text-center" >
        <div  class="col-12 col-sm-6 col-md-3 my-3 d-flex justify-content-center" v-for="image in Home_Kitchen" :key="image.id">
          <div class="card">
            <img :src="'/images/store/'+image.Store_Image" class="card-img-top" alt="Puppy with balloons">
            <div class="btn_show_shop">
              <a :href="image.Store_Url" class="btn btn-dark">show shop</a>
            </div>
            <div class="p-1 d-flex justify-content-start align-items-center">
              <img :src="'/images/store/'+image.Store_Logo" width="40" height="40" alt="aaaa" class="rounded-circle">
              <strong class="mx-1">{{ image.Store_Name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    Baby & Child-->
    <section class="container">
    <h3 class="text-start">Baby & Child</h3>
      <div class="row text-center" >
        <div  class="col-12 col-sm-6 col-md-3 my-3 d-flex justify-content-center" v-for="image in Baby_Child" :key="image.id">
          <div class="card">
            <img :src="'/images/store/'+image.Store_Image" class="card-img-top" alt="Puppy with balloons">
            <div class="btn_show_shop">
              <a :href="image.Store_Url" class="btn btn-dark">show shop</a>
            </div>
            <div class="p-1 d-flex justify-content-start align-items-center">
              <img :src="'/images/store/'+image.Store_Logo" width="40" height="40" alt="aaaa" class="rounded-circle">
              <strong class="mx-1">{{ image.Store_Name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Featured_Stores_slider from "@/components/Featured_Stores_slider.vue";
import axios from "axios";
export default {
  name: `shop`,
  components: {
    AppHeader,
    AppFooter,
    Featured_Stores_slider,
  },
  data() {
    return {
      shopping:[],
    }
  },
  computed: {
    Apparel: function () {
      return this.shopping.filter((ele)=> ele.Store_Category==='Apparel');
    },
    Home_Kitchen: function () {
      return this.shopping.filter((ele)=> ele.Store_Category==='Home & Kitchen');
    },
    Baby_Child: function () {
      return this.shopping.filter((ele)=> ele.Store_Category==='Baby & Child');
    }
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
          this.shopping= resData.table_store;
        }
      }
    },
  }

}
</script>

<style scoped>

.card{
  width: 300px;
  border-radius: 0.8rem !important;
}
.card-img-top{
  border-top-right-radius: 0.8rem !important;
  border-top-left-radius: 0.8rem !important;
}
.card:hover{
  transform: scale(1.1);
  transition: all linear 200ms;
  z-index: 1;
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
  cursor: pointer;
}

.btn-dark {
  color: #212529 !important;
  background-color: #fff;
  border-color:#fff;
}
.btn_show_shop{
  display: none;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 40%;
}
.card:hover  .btn_show_shop{
  display: block;
}
</style>