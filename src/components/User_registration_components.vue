<template>
  <div class=" my-3">
    <div class="title_registration ">
      Sign up
    </div>
    <div class="sub_title_registration mt-2">
      Enter your phone number and we'll send you a <br/> password to sign in via SMS
    </div>
    <form class="text-start" method="post" @submit.prevent="onRegister">
      <span class="error-feedback  text-danger" v-if="status_register">
                     {{register_success_errorMsg}}
      </span>
      <span class="error-feedback  text-danger" v-if="!status_register">
                     {{register_success_errorMsg}}
      </span>
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
        <label for="Cin">CIN *</label>
        <input type="text" class="form-control " id="Cin" aria-describedby="CinHelp"
               placeholder="Enter Cin" v-model="Cin">
        <span class="error-feedback  text-danger" v-if="v$.Cin.$error">
                     {{v$.Cin.$errors[0].$message}}
      </span>
      </div>
      <div class="form-group mt-4">
        <label for="date_birth">date of birth *</label>
        <input type="date" class="form-control " id="date_birth" aria-describedby="date_birthHelp"
               placeholder="Enter date of birth" v-model="date_birth" :max="date_birth_min">
        <span class="error-feedback  text-danger" v-if="v$.date_birth.$error">
                     {{v$.date_birth.$errors[0].$message}}
      </span>
      </div>
      <div class="form-group mt-4">
        <label for="country">Country/Region *</label>
        <select class="form-control form-control-sm" v-model="country" id="country">
          <option value="Morocco">Morocco</option>
        </select>
        <span class="error-feedback  text-danger" v-if="v$.country.$error">
                     {{v$.country.$errors[0].$message}}
      </span>
      </div>
      <div class="form-group mt-4">
        <label for="City">City *</label>
        <select class="form-control form-control-sm" v-model="City" id="City">
          <option value="Tanger">Tanger</option>
          <option value="Ouarzazate">Ouarzazate</option>
          <option value="Zagora">Zagora</option>
        </select>
        <span class="error-feedback  text-danger" v-if="v$.City.$error">
                     {{v$.City.$errors[0].$message}}
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
        <label for="email">Email address *</label>
        <input type="email" class="form-control " id="email" aria-describedby="emailHelp"
               placeholder="Enter email" v-model="email">
        <span class="error-feedback  text-danger" v-if="v$.email.$error">
                     {{v$.email.$errors[0].$message}}
      </span>
      </div>
      <button type="submit" class="btn btn-dark mt-4">Send code</button>
    </form>
    <div class="d-flex justify-content-center align-items-center mt-3">
      <div>Already have an account?</div>
      <router-link class="ms-2 color_login" to="/login">Log in</router-link>
    </div>
  </div>
</template>

<script>
import {email, maxLength, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";

export default {
  name: "User_registration_components",
  data(){
    return {
      v$:useVuelidate(),
      date_birth_min:new Date().toISOString().slice(0,10),
      first_name:null,
      last_name:null,
      Cin:null,
      date_birth:null,
      email:null,
      tel:null,
      country:null,
      City:null,
      register_success_errorMsg:'',
      status_register:0
    }
  },
  validations: {
    email:{required, email},
    tel:{required,minLength:minLength(13), maxLength:maxLength(13)},
    country:{required},
    City:{required},
    first_name: {required, minLength:minLength(3), maxLength:maxLength(15)},
    last_name:{required, minLength:minLength(3), maxLength:maxLength(15)},
    Cin:{required},
    date_birth:{required},
  },
  methods: {
    async onRegister(){
      this.v$.$validate();
      if(!this.v$.$error){
        let formData = this.toFormData({
          first_name:this.first_name,
          last_name:this.last_name,
          Cin:this.Cin,
          date_birth:this.date_birth,
          email:this.email,
          tel:this.tel,
          country:this.country,
          City:this.City,
        });
        let res= await axios.post(`http://localhost/faho_world/Inscription-u`,formData
        );
        const resData=res.data;
        if (res.status === 200)
        {
          if (!resData.error)
          {
            this.register_success_errorMsg=resData.message_user;
            this.status_register=resData.user_daz;
            if(this.status_register)
            {
              alert(this.register_success_errorMsg);
              this.$router.push({name:'home'});
            }
          }
        }
      }
      else{
        console.log('error');
      }
    },
    toFormData(obj){
      var fd=new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
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
  font-size: 16px;
  line-height: 22px;
  color: #484c51;
}
input{
  height: 30px;
  font-size: 15px;}
select {
  cursor: pointer;}
button{
  width: 100%;
}
.color_login{
  text-decoration-line: underline;
  color: #3363c1 !important;
  font-weight: 700;
  cursor: pointer;}
</style>