<template>
  <AppHeader></AppHeader>
  <main>
    <section class="text-center  p-3 px-sm-0 mx-0 mx-sm-4 my-2">
      <div class="d-flex justify-content-start my-3">
        <div class="btn btn-outline-dark mx-2" @click="Payments_click" :class= "{ btnsuccess : Payments }">Payments</div>
        <div class="btn btn-outline-dark mx-2" @click="Orders_click()" :class= "{btnsuccess : Orders }">Orders</div>
      </div>
      <hr>
      <div class="row" v-if="Orders===true">
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-fle flex-column justify-content-center">
              <div class="d-flex justify-content-around mt-2 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> <FAIHoussain :icon="['fas' ,'play']" class="icon alt" /> in 3 installments</div>
                <div class="bg-gradient py-1 px-2 rounded-pill dof3a_tarikh">Due May 02 2022</div>
              </div>
              <hr class="mx-3 my-1">
              <div class="d-flex justify-content-around align-items-center">
                <div class="btn view_details">View details</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="name_product">name:srwal triko</div>
                    <div class="dof3a_tarikh dof3a_color">May 02 2022</div>
                  </div>
                  <div>
                    <img  src="../assets/images/alsyf_logo.png" width="50" height="50" alt="Puppy with balloons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="Payments===true">
        <h6 class="text-start mt-2 mx-2">All payments coming</h6>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
              <div class="d-flex justify-content-around my-1 align-items-center">
                <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
                <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
              </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <div class="card">
            <div class="d-flex justify-content-around my-1 align-items-center">
              <div class="px-1 dof3a_tarikh dof3a_color"> The first batch </div>
              <div class="bg-gradient py-1 px-2 rounded-pill flos btn">150dh</div>
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
    }
  },
  methods: {
    Payments_click(){
      this.Payments=true;
      this.Orders=false;
    },
    Orders_click(){
      this.Orders=true;
      this.Payments=false;
    }
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