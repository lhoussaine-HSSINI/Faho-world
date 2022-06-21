<template>
  <AppHeader></AppHeader>

  <section class="mx-0 mx-sm-4  bg-white py-3">
    <hr class="mx-3">
    <div class="mx-0 mx-sm-1 row">
      <div class="col-12 col-sm-8">
        <h5 class="text-start mx-3">Shopping Cart ( 2 Items )</h5>
        <div class="card shadow_card my-3 my-sm-5 text-start">
          <div class="card-header">
            Products
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
              <div class="d-flex flex-row align-items-start">
                  <img src="../assets/images/product/a.jpeg" class="img-fluid rounded-3" alt="Shopping item" style="width: 120px;">
                <div class="mx-4">
                  <h5 class="mb-0">nike</h5>
                  <p class="small mt-2">Apparel</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class=" mb-0">25dh</h5>
                <div class="row my-3 mx-4">
                  <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
                  <div class="text-center quantity col-4">{{ quantity }}</div>
                  <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
                </div>
                <h5 class="mb-0 text-danger">{{ quantity*25 }} dh</h5>
                <button class=" btn" style="color: #cecece;"><FAIHoussain :icon="['fas', 'trash']" class="icon alt text-danger"/></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow_card my-3 my-sm-5 text-start">
          <div class="card-header">
            Products
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
              <div class="d-flex flex-row align-items-start">
                <img src="../assets/images/product/a.jpeg" class="img-fluid rounded-3" alt="Shopping item" style="width: 120px;">
                <div class="mx-4">
                  <h5 class="mb-0">nike</h5>
                  <p class="small mt-2">Apparel</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class=" mb-0">25dh</h5>
                <div class="row my-3 mx-4">
                  <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
                  <div class="text-center quantity col-4">{{ quantity }}</div>
                  <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
                </div>
                <h5 class="mb-0 text-danger">{{ quantity*25 }} dh</h5>
                <button class=" btn" style="color: #cecece;"><FAIHoussain :icon="['fas', 'trash']" class="icon alt text-danger"/></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow_card my-3 my-sm-5 text-start">
          <div class="card-header">
            Products
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
              <div class="d-flex flex-row align-items-start">
                <img src="../assets/images/product/a.jpeg" class="img-fluid rounded-3" alt="Shopping item" style="width: 120px;">
                <div class="mx-4">
                  <h5 class="mb-0">nike</h5>
                  <p class="small mt-2">Apparel</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class=" mb-0">25dh</h5>
                <div class="row my-3 mx-4">
                  <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
                  <div class="text-center quantity col-4">{{ quantity }}</div>
                  <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
                </div>
                <h5 class="mb-0 text-danger">{{ quantity*25 }} dh</h5>
                <button class=" btn" style="color: #cecece;"><FAIHoussain :icon="['fas', 'trash']" class="icon alt text-danger"/></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow_card my-3 my-sm-5 text-start">
          <div class="card-header">
            Products
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
              <div class="d-flex flex-row align-items-start">
                <img src="../assets/images/product/a.jpeg" class="img-fluid rounded-3" alt="Shopping item" style="width: 120px;">
                <div class="mx-4">
                  <h5 class="mb-0">nike</h5>
                  <p class="small mt-2">Apparel</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class=" mb-0">25dh</h5>
                <div class="row my-3 mx-4">
                  <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
                  <div class="text-center quantity col-4">{{ quantity }}</div>
                  <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
                </div>
                <h5 class="mb-0 text-danger">{{ quantity*25 }} dh</h5>
                <button class=" btn" style="color: #cecece;"><FAIHoussain :icon="['fas', 'trash']" class="icon alt text-danger"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <h5 class="text-start mx-3">CHECKOUT</h5>
        <div class="card-body">
          <p><strong>We accept</strong></p>
          <img class="me-2" width="45px"
               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
               alt="Visa" />
          <img class="me-2" width="45px"
               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
               alt="Mastercard" />
          <img class="me-2" width="70px"
               src="../assets/images/PayPal.svg"
               alt="PayPal acceptance mark"/>
        </div>
        <div class="card my-3 my-sm-5">
          <div class="card-body px-0 px-sm-1">
            <div class="d-flex justify-content-around align-items-center flex-row flex-sm-column flex-md-row">
              <h5 class="my-0">Product Total</h5>
              <div class="text-danger">173DH</div>
            </div>
            <div class="d-flex justify-content-around align-items-center flex-row flex-sm-column flex-md-row my-3">
              <h5 class="my-0">Estimated Shipping</h5>
              <div>30DH</div>
            </div>
          </div>
          <div @click="go_login()" class="btn btn-danger" >
            CHECKOUT
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "card_pay",
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return {
      quantity:1,}
  }
  ,
  methods: {
    minus_quantity(){
      if(this.quantity>=2){
        this.quantity--;
      }else{
        this.quantity=1;}
    },
    go_login(){
      this.$router.push({path:'/login'});
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
.quantity{
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}
.quantity-btn{
  border: 1px solid red;
  cursor: pointer;
}
h5{
  font-size: 13px;
  font-weight:500;
}
.shadow_card{
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
}
</style>