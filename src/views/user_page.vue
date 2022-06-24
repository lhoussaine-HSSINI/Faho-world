<template>
  <AppHeader></AppHeader>
  <main>
    <section class="text-center  p-3 px-sm-0 mx-0 mx-sm-4 my-2">
      <div class="d-flex justify-content-start my-3">
        <div class="btn btn-outline-dark mx-2" @click="Payments_click" :class= "{ btnsuccess : Payments }">Payments</div>
        <div class="btn btn-outline-dark mx-2" @click="Orders_click()" :class= "{btnsuccess : Orders }">Orders</div>
      </div>
      <hr>
      <div class="row" v-if="Orders===true" >
        <div class="col-12 col-md-6 col-lg-4 mt-3" v-for="order in table_order" :key="order.Order_id">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in {{order.dof_3_a+1}}installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due {{order.Order_Date}}</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:{{order.Product_Name}}</div>
                    <div class="dof3a_tarikh dof3a_color">{{order.Order_Delivery_date}}</div>
                  </div>
                  <div>
                    <img class="m-3" :src="'/images/product/' + order.Product_Image" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row" v-if="Payments===true">
        <h6 class="text-start mt-2 mx-2">All payments coming</h6>
        <div class="col-12 col-md-6 col-lg-4 mt-3" v-for="order in order_payment" :key="order.Order_id">
          <div class="card">
              <div class="d-flex justify-content-around my-1 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> The {{order.dof_3_a+1}} batch </div>
                <div class="bg-gradient py-1 px-2 rounded-pill flos btn">{{order.Order_rest_amount}}</div>
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
  name: "user_page",
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return{
      Payments:false,
      Orders:true,
      table_order:[],
      table_order_payment:[]
    }
  },
  computed: {
    order_payment: function(){
      return this.table_order_payment.filter((el)=>el.dof_3_a<3 && el.Order_rest_amount>0)
    }
  }
  ,
mounted(){
  if(JSON.parse(localStorage.getItem('type_user'))!=0){
    this.$router.push({path:'/'});
  }
  this.getRvData();
},
  methods: {
    Payments_click(){
      this.Payments=true;
      this.Orders=false;
    },
    Orders_click(){
      this.Orders=true;
      this.Payments=false;
    },
    // start product function
    async getRvData(){
      let res=await axios.get(`http://localhost/faho_world/Read-Order`);
      const resData=res.data;
      if (res.status ==200){
        if (resData.error){
          console.log(resData.connction_msg);
        }else {
          // let a="./assets/images/product/";
          this.table_order = resData.table_order.filter((el)=>el.id===JSON.parse(localStorage.getItem('user_id')));
          this.table_order_payment = resData.table_order.filter((el)=>el.id===JSON.parse(localStorage.getItem('user_id')));
          // this.table_products = resData.table_product.filter((el)=> el.Product_Image="<img  src='../assets/images/product/"+el.Product_Image+"'  alt='product' width='60'>");
          // this.table_rd=resData.r_v;
        }
      }
    },
  }
}
</script>

<style scoped>
hr{
  margin: 0;
}
.dof3a_tarikh{
  font-size: 12px;
}
.flos{
  font-size: 15px;
  font-weight: 700;
}
.bg-gradient{
  background-color: darkgrey;
}
.dof3a_color{
  color:#68311d;
}
.name_product{
  font-size: 15px;
  font-family: monospace,sans-serif;
  font-weight: bold;
}
.view_details{
  font-size: smaller;
}
.btnsuccess{
  background-color:black;
  color: white;
}
</style>