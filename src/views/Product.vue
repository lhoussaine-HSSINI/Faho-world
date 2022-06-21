<template>
  <AppHeader :q="quantity"></AppHeader>
<!--{{$route.params.id}}-->
<!--  {{image[0]}}-->
  <main>
    <section class="py-5 p-2 px-sm-0 mx-0 mx-sm-4 d-flex justify-content-center align-items-center bg-white">
      <div class="row" v-for="image in product" :key="image.id">
          <div class="col-6">
            <img :src="image.imageUrl_product" class="card-img-top" alt="image product">
          </div>
          <div class="col-6 d-flex flex-column align-items-start">
            <p class="name_product h1">{{image.name}}</p>
            <div class="before_price">
              <div class="price">
                {{ calcul_price }} DH
              </div>
            </div>
            <div class="row my-3 mx-0">
              <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
              <div class="quantity col-4">{{ quantity }}</div>
              <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
            </div>
              <div class="btn btn-danger" @click="Add_to_Cart()">
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
      product_shop:[],
      image:[],
      products:[
        {id:1,name:"nike",category:"Apparel",imageUrl_product:require("../assets/images/product/a.jpeg"),
          price:10},
        {id:2,name:"kalve klayn",category:"Home & Kitchen",imageUrl_product:require("../assets/images/product/b.jpg"),
          price:25},
        {id:3,name:"jiss",category:"Apparel",imageUrl_product:require("../assets/images/product/c.jpeg"),
          price:15},
        {id:4,name:"adidas",category:"Baby & Child",imageUrl_product:require("../assets/images/product/d.jpeg"),
          price:30},
        {id:5,name:"kalve klayn",category:"Home & Kitchen",imageUrl_product:require("../assets/images/product/b.jpg"),
          price:25},
        {id:6,name:"jiss",category:"Apparel",imageUrl_product:require("../assets/images/product/c.jpeg"),
          price:15},
      ],
    }
  },
  mounted(){
    this.image.push(this.products.filter((ele)=> ele.id===this.id)[0]);
    this.image=this.image[0];
  },
  methods: {
    minus_quantity(){
      if(this.quantity>=2){
        this.quantity--;
      }else{
        this.quantity=1;}
    },
    Add_to_Cart(){
      // this.product_shop.push(this.image)
      console.log(this.image.name);
      console.log(this.image.price);
    }
  }
  ,
  computed: {
    product: function(){
      // this.image.push(this.products.filter((ele)=> ele.id===this.id));
      // console.log(this.image[0].id);

    return this.products.filter((ele)=> ele.id===this.id);

    // console.log(this.$route.params.id);
    },
    calcul_price: function(){

      return this.image.price*this.quantity;
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