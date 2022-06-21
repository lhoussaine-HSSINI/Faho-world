<template>
  <AppHeader></AppHeader>
  <main>
    <section class="bg-white text-center  p-3 px-sm-0 mx-0 mx-sm-4">
      <div class="d-flex justify-content-start my-3">
        <div class="btn btn-dark mx-2 ">Products</div>
      </div>
      <hr>
      <div class="px-2">
        <div class="d-flex justify-content-start align-items-center">
          <h6 class=" mt-2 mx-2">All products</h6>
          <h6 class=" mt-2 mx-2 btn btn-dark " data-bs-toggle="modal" data-bs-target="#addproduct">Add product</h6>
        </div>
        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in table_products" :key="product.id" >
              <th scope="col">{{product.Product_id}}</th>
              <td>{{ product.Product_Name }}</td>
              <td>{{ product.Product_Price }}</td>
              <td>{{ product.Product_Quantity }}</td>
              <td>
                <img  :src="'/images/product/' + product.Product_Image"  alt='product' width='60'>
<!--                '../assets/images/product/a.jpeg'-->
              </td>
              <td>
                <FAIHoussain :icon="['fas' ,'trash']" class="icon alt btn" @click="selectRv(product);"
                             data-bs-toggle="modal" data-bs-target="#deleteproduct"/>
                <FAIHoussain :icon="['fas' ,'edit']" class="icon alt btn " @click="selectRv(product);"
                             data-bs-toggle="modal" data-bs-target="#editproduct"/></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    <!-- Modal add product-->
        <!--    Add product-->
        <div class="modal fade" id="addproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Information of product</h5>
            <button type="button" class="btn-close" id="close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="text-start" method="post" @submit.prevent="Add_Product()" enctype="multipart/form-data">
              <div class="form-group mt-2 mt-sm-3">
                <label for="Product_name">Name *</label>
                <input type="text" class="form-control" id="Product_name" aria-describedby="nameHelp" placeholder="Enter  Name"
                       v-model="Product_name">
                <span class="error-feedback  text-danger" v-if="v$.Product_name.$error">
                     {{v$.Product_name.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-2 mt-sm-3">
                <label for="Product_price">Price *</label>
                <input type="number" class="form-control" id="Product_price" aria-describedby="Product_priceHelp"
                       placeholder="Enter price" v-model="Product_price" min="20">
                <span class="error-feedback  text-danger" v-if="v$.Product_price.$error">
                     {{v$.Product_price.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-2 mt-sm-3">
                <label for="Product_quantity">Quantity *</label>
                <input type="number" class="form-control" id="Product_quantity" aria-describedby="QuantityHelp"
                       placeholder="Enter Quantity" v-model="Product_quantity" min="1">
                <span class="error-feedback  text-danger" v-if="v$.Product_quantity.$error">
                     {{v$.Product_quantity.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-2 mt-sm-3">
                <label for="Product_entership">name of entership *</label>
                <input type="text" class="form-control " id="Product_entership" aria-describedby="Product_entershipHelp"
                       placeholder="Enter date of birth" v-model="Product_entership">
                <span class="error-feedback  text-danger" v-if="v$.Product_entership.$error">
                     {{v$.Product_entership.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-2 mt-sm-3">
                <label for="Product_image">Image *</label>
                <input  type="file" id="Product_image" ref="file_add" accept="image/png,image/jpg, image/jpeg" v-on:change="onChangeFileUploadadd()" class="form-control">
                <span class="error-feedback  text-danger" v-if="v$.file.$error">
                     {{v$.file.$errors[0].$message}}
                </span>
              </div>
              <div class="d-flex justify-content-start mt-3">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn  btn-dark ms-2">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        <!--    Edit product-->
        <div class="modal fade" id="editproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Information of product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="text-start" method="post" @submit.prevent="Add_Product" enctype="multipart/form-data">
              <div class="form-group mt-3">
                <label for="Product_name">Name *</label>
                <input type="text" class="form-control" id="Product_name" aria-describedby="nameHelp" placeholder="Enter  Name"
                       v-model.trim="current_product.Name">
                <span class="error-feedback  text-danger" v-if="v$.Product_name.$error">
                     {{v$.Product_name.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-3">
                <label for="Product_price">Price *</label>
                <input type="number" class="form-control" id="Product_price" aria-describedby="Product_priceHelp"
                       placeholder="Enter price" v-model.trim="current_product.Price" min="20">
                <span class="error-feedback  text-danger" v-if="v$.Product_price.$error">
                     {{v$.Product_price.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-3">
                <label for="Product_quantity">Quantity *</label>
                <input type="number" class="form-control" id="Product_quantity" aria-describedby="QuantityHelp"
                       placeholder="Enter Quantity" v-model.trim="current_product.Quantity" min="1">
                <span class="error-feedback  text-danger" v-if="v$.Product_quantity.$error">
                     {{v$.Product_quantity.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-3">
                <label for="Product_entership">name of entership *</label>
                <input type="text" class="form-control" id="Product_entership" aria-describedby="Product_entershipHelp"
                       placeholder="Enter date of birth" v-model.trim="current_product.Brand">
                <span class="error-feedback  text-danger" v-if="v$.Product_entership.$error">
                     {{v$.Product_entership.$errors[0].$message}}
                </span>
              </div>
              <div class="form-group mt-3">
                <label for="Product_image">Image *</label>
                <input  type="file" id="Product_image" ref="file_update" accept="image/png,image/jpg,image/jpeg" v-on:change="onChangeFileUploadupdate()" class="form-control">
                <span class="error-feedback  text-danger" v-if="v$.file.$error">
                     {{v$.file.$errors[0].$message}}
                </span>
              </div>
              <div class="d-flex justify-content-start mt-3">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn  btn-dark ms-2">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        <!--    Delete product-->
        <div class="modal fade" id="deleteproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Information of product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="text-start" method="post" @submit.prevent="Delete_Product">
              <h6>delete this product</h6>
              <div class="d-flex justify-content-start mt-3">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn  btn-dark ms-2">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {minValue, maxLength, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
export default {
  name: "admin_page",
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return{
      aa:'@/assets/images/product/a.jpeg',
      v$:useVuelidate(),
      Products:true,
      Product_name:null,
      Product_price:null,
      Product_quantity:null,
      Product_entership:null,
      file:'',
      current_product:{},
      table_products:[{id:1, Name:'srwal 9ntri',Brand:'nike',Price:23,Quantity:3,Image:require("../assets/images/product/3.png")}],
    }
  },
  validations: {
    Product_name:{required, minLength:minLength(3), maxLength:maxLength(15)},
    Product_price:{required,minValue:minValue(20)},
    Product_quantity:{required, minValue:minValue(1)},
    Product_entership: {required, minLength:minLength(3), maxLength:maxLength(15)},
    file:{required},
  },
  mounted(){
    this.getRvData();
  }
  ,
  methods: {
    onChangeFileUploadadd(){
      this.file = this.$refs.file_add.files[0];
      console.log(this.file);
    },
    onChangeFileUploadupdate(){
      this.file = this.$refs.file_update.files[0];
      console.log(this.file);
    },
    // start product function
    async getRvData(){
      let res=await axios.get(`http://localhost/faho_world/Read-product`);
      const resData=res.data;
      if (res.status ==200){
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
    async Add_Product(){
      this.v$.$validate();
      if(!this.v$.$error){

        let formData = this.toFormData({Product_name:this.Product_name,Product_price:this.Product_price,
                            Product_quantity:this.Product_quantity,Product_entership:this.Product_entership,
                            file:this.file});
        let res= await axios.post(`http://localhost/faho_world/Addproduct`,formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const resData=res.data;
        if (res.status === 200)
        {
          if (!resData.error)
          {
            const btn = document.querySelector("#close-modal");
            btn.click();
            this.getRvData();
          }
        }
      }else{
        console.log('error');
        console.log(this.v$.$error);
      }
    },
    Edit_Product(){
      this.v$.$validate();
      if(!this.v$.$error){

        let formData = this.toFormData({Product_id:this.Product_name,Product_name:this.Product_name,Product_price:this.Product_price,
          Product_quantity:this.Product_quantity,Product_entership:this.Product_entership,
          Product_image:this.Product_image_update});
        console.log('true');
        console.log(formData);
        // this.axios.post('http://localhost:8000/api.php',
        //     formData,
        //     {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     }
        // ).then(function(data)
        // {
        //   console.log(data.data);
        // })
        //     .catch(function()
        //     {
        //       console.log('FAILURE!!');
        //     });
      }else{
        console.log('error');
        console.log(this.v$.$error);
      }
    },
    selectRv(product){
      this.current_product=product;
    },
    // end product function
    toFormData(obj){
      var fd=new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    }
    ,
  }
}
</script>

<style scoped>
.kkk {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
hr{
  margin: 0;
}

td, th {
  vertical-align: middle;
  font-size: 10px;
}
.modal-content{
  background-image: url('~@/assets/hom_background.webp');
  background-size: cover;
  border-radius: 25px 25px 0 0;
}
input{
  height: 30px;
  font-size: 15px;}
select {
  cursor: pointer;}

@media screen and (max-width: 430px) {
  table{
    width: 145%;
  }
}

</style>