<template>
  <AppHeader></AppHeader>
<!--{{$route.params.id}}-->
<!--  {{image[0]}}-->
  <main>
    <section class="py-5 p-2 px-sm-0 mx-0 mx-sm-4 d-flex justify-content-center align-items-center bg-white">
      <div class="row" v-for="image in product_shop" :key="image.Product_id">
          <div class="col-6">
            <img :src="'/images/product/'+image.Product_Image" class="card-img-top" alt="image product">
          </div>
          <div class="col-6 d-flex flex-column align-items-start">
            <p class="name_product h1">{{image.Product_Name}}</p>
            <div class="before_price">
              <div class="price">
                {{ image.Product_Price }} DH
              </div>
            </div>
            <div class="row my-3 mx-0">
              <div class="quantity col-12">quantity :: {{ image.Product_Quantity }} in store</div>
            </div>
              <div class="btn btn-danger" @click="Add_to_Cart(image)">
                Add to Cart
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
  name: `Product`,
  props: {
    id:Number,
  },
     components: {
    AppHeader,
     AppFooter
  },
  data() {
    return {
      quantity:1,
      new_price:1,
      image:[],
      product_shop:[],
    }
  },
  mounted(){
    this.getRvData();
  },
  methods: {
    minus_quantity(){
      if(this.quantity>=2){
        this.quantity--;
      }else{
        this.quantity=1;}
    },
    Add_to_Cart(a){
      // this.product_shop.push(this.image)
      let mystore=[];
      mystore=JSON.parse(localStorage.getItem('mystore'))
      mystore.push(a);
      localStorage.setItem("mystore", JSON.stringify(mystore));
      this.$router.push({ name: 'cartpy', path:'/cartpy'});
      console.log(mystore);
      console.log(JSON.parse(localStorage.getItem('mystore')).length);

    },
    // start product function
    async getRvData(){
      let res=await axios.get(`http://localhost/faho_world/Read-product`);
      const resData=res.data;
      if (res.status === 200){
        if (resData.error){
          console.log(resData.connction_msg);
        }else {
          // let a="./assets/images/product/";
          this.product_shop = resData.table_product.filter((ele)=> ele.Product_id===this.id);
          // this.table_products = resData.table_product.filter((el)=> el.Product_Image="<img  src='../assets/images/product/"+el.Product_Image+"'  alt='product' width='60'>");

          // this.table_rd=resData.r_v;
        }
      }
    },

  }
  ,
  computed: {
    calcul_pricea: function(){
      return this.product_shop.Product_Price*this.quantity;
    },
  }
}
</script>

<style scoped>
.name_product{
  font-size: 20px;
  color: #333;
  font-weight: 400;
  margin-bottom: 30px;
}
.price{
  font-size: 30px;
  font-weight: 700;
  color: #c94343;
}
.before_price{
  background: #fafafa;
  padding: 23px 26px;
}
.quantity{
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}
.quantity-btn{
  border: 1px solid red;
  cursor: pointer;
}
</style>