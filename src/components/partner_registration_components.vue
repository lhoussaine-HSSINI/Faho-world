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
        <option value="Accessories">Accessories</option>
        <option value="Auto">Auto</option>
        <option value="Baby & Child">Baby & Child</option>
        <option value="Beauty & Health">Beauty & Health</option>
        <option value="Books">Books</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
        <option value="Travel">Travel</option>
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
    <button type="submit" class="btn btn-dark mt-4" >Register</button>
  </form>
</div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, minLength , maxLength, email, url} from "@vuelidate/validators"

export default {
  name: "partner_registration_components",
  data () {
    return {
      v$:useVuelidate(),
      first_name:null,
      last_name:null,
      store_url:null,
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
    },
  methods: {
    onRegister(){
        this.v$.$validate();
        if(!this.v$.$error){
          console.log('success');
          console.log(this.v$.$error);
        }else{
          console.log('error');
          console.log(this.v$.$error);
        }

    }
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