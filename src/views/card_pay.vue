<template>
  <AppHeader></AppHeader>

  <section class="mx-0 mx-sm-4  bg-white py-3">
    <hr class="mx-3">
    <div class="mx-0 mx-sm-1 row">
      <div class="col-12 col-sm-8">
        <h5 class="text-start mx-3">Shopping Cart ( {{store_item}} Items )</h5>
        <div class="card shadow_card my-3 my-sm-5 text-start" v-for="image in mystore" :key="image.Product_id">
          <div class="card-header">
            Product
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
              <div class="d-flex flex-row align-items-start">
                  <img :src="'/images/product/'+image.Product_Image" class="img-fluid rounded-3" alt="Shopping item" style="width: 120px;">
                <div class="mx-4">
                  <h5 class="mb-0">{{image.Product_Name}}</h5>
                  <p class="small mt-2">{{image.Product_Brand}}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="row my-3 mx-4">
                  <div @click="minus_quantity()" class="quantity-btn col-4"><FAIHoussain :icon="['fas','minus']"/></div>
                  <div class="text-center quantity col-4">1</div>
                  <div @click="quantity++" class="quantity-btn col-4"><FAIHoussain :icon="['fas','plus']"/></div>
                </div>
                <h5 class="mb-0 text-danger">{{image.Product_Price}}dh</h5>
                <button class="btn" style="color: #cecece;" @click="remove_product(image); reloadPage();"><FAIHoussain :icon="['fas', 'trash']" class="icon alt text-danger"/></button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-12 col-sm-4" v-if="tootal_price">
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
              <div class="text-danger">{{tootal_price}}DH</div>
            </div>
            <div class="d-flex justify-content-around align-items-center flex-row flex-sm-column flex-md-row my-3">
              <h5 class="my-0">Estimated Shipping</h5>
              <div>30DH</div>
            </div>
          </div>
          <div @click="go_pay()" data-bs-toggle="modal" data-bs-target="#lkhlasmodal" class="btn btn-danger" >
            CHECKOUT
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--     modal lkhlas-->
  <div  class="modal fade" id="lkhlasmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
          <button type="button" class="btn-close" id="close-modal_delete" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body" v-if="!lkhlas">
            <h6>Please login. If you are a new user,<br> please create a new account</h6>
            <div class="d-flex justify-content-start mt-3">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn  btn-dark ms-2" @click="go_login()">Login</button>
            </div>
        </div>
        <div class="modal-body" v-if="lkhlas">
            <h6>Payment completed successfully,<br> first month paid : {{tootal_price/3}}DH ,<br> wait for other payments</h6>
            <div class="d-flex justify-content-start mt-3">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn  btn-dark ms-2" @click="Confirm_Order()"> Confirm and Show Order</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios from "axios";
export default {
  name: "card_pay",
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return {
      lkhlas:false,
      quantity:1,
      store_item:null,
      user_id:null,
    mystore:[],
    tootal_price:0,}
  }
  ,
  mounted(){
    this.store_item=JSON.parse(localStorage.getItem('mystore')).length;
    this.user_id=JSON.parse(localStorage.getItem("user_id"));
    this.mystore=JSON.parse(localStorage.getItem('mystore'))
    this.mystore.filter((el)=>this.tootal_price+=el.Product_Price);
  }
  ,
  methods: {
    minus_quantity(){
      if(this.quantity>=2){
        this.quantity--;
      }else{
        this.quantity=1;}
    },
    reloadPage() {
      window.location.reload();
    },
    go_pay(){
      if(JSON.parse(localStorage.getItem('user_connecter'))===true && JSON.parse(localStorage.getItem("user_login"))=== true) {
        this.lkhlas=true;
        // this.$router.push({path: '/login'});
      }
    },

    go_login(){
      const btn = document.querySelector("#close-modal_delete");
      btn.click();
        this.$router.push({path: '/login'});
      },

    async Confirm_Order(){
      let resData=null;
      let res=null;
        for(let i=0; i<this.mystore.length;i++){
          let Order_rest=this.mystore[i].Product_Price-this.mystore[i].Product_Price/3;
          let formData = this.toFormData({Product_id:this.mystore[i].Product_id, User_id:this.user_id,
            Order_Payment:this.mystore[i].Product_Price/3 ,Order_rest_amount:Order_rest});
          res= await axios.post(`http://localhost/faho_world/AddOrder`,formData);
          resData=res.data;
          if (res.status === 200)
          {
            if (!resData.error)
            {
              const btn = document.querySelector("#close-modal_delete");
              btn.click();
              localStorage.setItem("mystore", JSON.stringify([]));

            }
          }
        }
      this.$router.push({path: '/HomeUser'});

    },
    toFormData(obj){
      var fd=new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    }
    ,
    remove_product(image){
      console.log(image);
      // let indexx=this.mystore.indexOf(image);
      let Mystore=[];
      Mystore=JSON.parse(localStorage.getItem('mystore')).filter((el)=>el.Product_id!=image.Product_id)
      localStorage.setItem("mystore", JSON.stringify(Mystore));
      this.$router.push({ name: 'cartpy', path:'/cartpy'});
    }
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