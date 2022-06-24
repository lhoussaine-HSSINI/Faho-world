<template>
  <AppHeader></AppHeader>
  <main>
    <section class="container my-3">
      <h3 class="text-start">Apparel</h3>
      <div class="row text-center">
        <div  class="col-12 col-sm-6 col-md-3 col-l-2 my-3 d-flex justify-content-center" v-for="image in table_products" :key="image.Product_id">
          <div class="card">
            <img :src="'/images/product/' + image.Product_Image" class="card-img-top" alt="Puppy with balloons">
            <div class="btn_show_shop">
              <router-link :to="{name:'product', params:{ id:image.Product_id} }"  class="btn btn-dark">show</router-link>
            </div>
            <div class="p-1 px-3 d-flex flex-column justify-content-center align-items-start">
              <p>{{image.Product_Name}}</p>
              <strong>{{ image.Product_Price }} DH</strong>
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
import axios from "axios";
export default {
  name: `store`,
  components: {
    AppHeader,
    AppFooter
    },
  data() {
    return {
      table_products:[],
      shopping:[],
    }
  },
  mounted(){
    this.getRvData();
  }
  ,
  methods: {
    // start product function
    async getRvData(){
      let res=await axios.get(`http://localhost/faho_world/Read-product`);
      const resData=res.data;
      if (res.status === 200){
        if (resData.error){
          console.log(resData.connction_msg);
        }else {
          // let a="./assets/images/product/";
          this.table_products = resData.table_product;
          // this.table_products = resData.table_product.filter((el)=> el.Product_Image="<img  src='../assets/images/product/"+el.Product_Image+"'  alt='product' width='60'>");

          // this.table_rd=resData.r_v;
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
p{
  font-size: 12px;
  color: #999;
  margin: 0;
}
</style>