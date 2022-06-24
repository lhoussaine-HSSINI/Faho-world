<template>
<div class="mt-5">
  <div class="title_registration ">
    Partner Registration
  </div>
  <div class="sub_title_registration">
    Your Information
  </div>
  <form class="text-start" method="post" @submit.prevent="onRegister">
    <div class="form-group mt-4">
      <label for="first_name">First Name *</label>
      <input type="text" class="form-control" id="first_name" aria-describedby="firstnameHelp" placeholder="Enter First Name"
             v-model="first_name">
      <span class="error-feedback  text-danger" v-if="v$.first_name.$error">
                     {{v$.first_name.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="last_name">Last Name *</label>
      <input type="text" class="form-control" id="last_name" aria-describedby="lastnameHelp"
             placeholder="Enter Last Name" v-model="last_name">
      <span class="error-feedback  text-danger" v-if="v$.last_name.$error">
                     {{v$.last_name.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="store_name">Store Name *</label>
      <input type="text" class="form-control" id="store_name" aria-describedby="lastnameHelp"
             placeholder="Enter Last Name" v-model="store_name">
      <span class="error-feedback  text-danger" v-if="v$.store_name.$error">
                     {{v$.store_name.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="store_url">Store URL *</label>
      <input type="url" class="form-control " id="store_url" aria-describedby="Store urlHelp"
             placeholder="Enter Store url" v-model="store_url">
      <span class="error-feedback  text-danger" v-if="v$.store_url.$error">
                     {{v$.store_url.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="email">Email address *</label>
      <input type="email" class="form-control " id="email" aria-describedby="emailHelp"
             placeholder="Enter email" v-model="email">
      <span class="error-feedback  text-danger" v-if="v$.email.$error">
                     {{v$.email.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="tel">Mobile Number *</label>
      <input type="tel" class="form-control " id="tel" placeholder="+212000000000" v-model="tel">
      <span class="error-feedback  text-danger" v-if="v$.tel.$error">
                     {{v$.tel.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="country">Country *</label>
      <select class="form-control  form-control-sm" v-model="country" id="country">
        <option value="Morocco">Morocco</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="Qatar">Qatar</option>
        <option value="USA">USA</option>
        <option value="Other">Other</option>
      </select>
      <span class="error-feedback  text-danger" v-if="v$.country.$error">
                     {{v$.country.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="category">Category *</label>
      <select class="form-control  form-control-sm" v-model="category" id="category" >
        <option value="Apparel">Apparel</option>
        <option value="Baby & Child">Baby & Child</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
      </select>
      <span class="error-feedback  text-danger" v-if="v$.category.$error">
                     {{v$.category.$errors[0].$message}}
      </span>
    </div>
    <div class="form-group mt-4">
      <label for="annual_Sales">Annual Sales *</label>
      <select class="form-control  form-control-sm" v-model="annual_Sales" id="annual_Sales" >
        <option value="More than 20DH million">More than 20DH million</option>
        <option value="15DH million to 20DH million">15DH million to 20DH million</option>
        <option value="10DH million to 15DH million">10DH million to 15DH million</option>
        <option value="5DH million to 10DH million">5DH million to 10DH million</option>
        <option value="Less than 5DH million">Less than 5DH million</option>
        <option value="Other">Other</option>
      </select>
      <span class="error-feedback  text-danger" v-if="v$.annual_Sales.$error">
                     {{v$.annual_Sales.$errors[0].$message}}
      </span>

    </div>
    <div class="form-group mt-3">
      <label for="store_image">Store Image *</label>
      <input  type="file" id="store_image" ref="file_image" accept="image/png,image/jpg,image/jpeg" v-on:change="onChangeFileUploadimage()" class="form-control">
      <span class="error-feedback  text-danger" v-if="v$.store_image.$error">
                     {{v$.store_image.$errors[0].$message}}
                </span>
    </div>
    <div class="form-group mt-3">
      <label for="store_logo">Store Logo *</label>
      <input  type="file" id="store_logo" ref="file_logo" accept="image/png,image/jpg,image/jpeg" v-on:change="onChangeFileUploadlogo()" class="form-control">
      <span class="error-feedback  text-danger" v-if="v$.store_logo.$error">
                     {{v$.store_logo.$errors[0].$message}}
                </span>
    </div>
    <button type="submit" class="btn btn-dark mt-4" >Register</button>
  </form>
</div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, minLength , maxLength, email, url} from "@vuelidate/validators"
import axios from "axios";

export default {
  name: "partner_registration_components",
  data () {
    return {
      v$:useVuelidate(),
      first_name:null,
      last_name:null,
      store_url:null,
      store_name:null,
      store_image:null,
      store_logo:null,
      email:null,
      tel:null,
      country:null,
      category:null,
      annual_Sales:null,
    }
  },
  validations: {
      first_name: {required, minLength:minLength(3), maxLength:maxLength(15)},
      last_name:{required, minLength:minLength(3), maxLength:maxLength(15)},
      store_url:{required, minLength:minLength(13), url},
      email:{required, email},
      tel:{required,minLength:minLength(13), maxLength:maxLength(13)},
      country:{required},
      category:{required},
      annual_Sales:{required},
      store_name:{required},
      store_image:{required},
      store_logo:{required},
    },
  methods: {
    async onRegister() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let formData = this.toFormData({Partner_first_name:this.first_name,Partner_last_name:this.last_name,
          store_url:this.store_url,Partner_email:this.email,Partner_tel:this.tel,Partner_country:this.country,
          store_category:this.category,store_annual_Sales:this.annual_Sales,store_name:this.store_name,
          store_file_image:this.store_image,store_file_logo:this.store_logo});
        let res= await axios.post(`http://localhost/faho_world/Partner`,formData,
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
            if (resData.parner_daz) {
              console.log('parner_daz')
              this.v$.$reset();
              this.$router.push({name: 'home'});
            }
          }
        }
      } else {
        console.log('lkhata2');
        console.log(this.v$.$error);
      }
    },
    onChangeFileUploadimage() {
      this.store_image = this.$refs.file_image.files[0];
      console.log(this.store_image);
    },
    onChangeFileUploadlogo() {
      this.store_logo = this.$refs.file_logo.files[0];
      console.log(this.store_logo);
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
.title_registration{
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
}
.sub_title_registration{
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin: 24px 0;
}
input{
  height: 30px;
  font-size: 15px;}
select {
  cursor: pointer;}
button{
  width: 100%;
}
</style>