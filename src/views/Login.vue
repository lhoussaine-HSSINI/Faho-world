<template>
<main class="container ">
  <section class="row mt-0 mt-sm-5">
    <div class="col-12  col-sm-6 col-md-7 image_faho pt-4">
      <img class="mt-5" src='~@/assets/images/logo_v2.svg' width="250" height="250" alt="logo faho world">
    </div>
    <div class="col-12 col-sm-6 col-md-5 bg-white d-flex flex-column align-items-center">
      <div class="title_login mt-3">
        Log in to shop now<br/> pay later and earn cash
      </div>

      <form class="text-start " method="post" @submit.prevent="login">
        <span class="error-feedback  text-danger" v-if="status_login">
                     {{login_success_errorMsg}}
        </span>
        <div class="form-group mt-4">
          <label for="email">Email address *</label>
          <input type="email" class="form-control " id="email" aria-describedby="emailHelp"
                 placeholder="Enter email" v-model="email">
          <span class="error-feedback  text-danger" v-if="v$.email.$error">
                     {{v$.email.$errors[0].$message}}
          </span>
        </div>
        <div class="form-group mt-4">
          <label for="password">Password *</label>
          <input type="password" class="form-control " id="password" placeholder="************" v-model="password">
          <span class="error-feedback  text-danger" v-if="v$.password.$error">
                     {{v$.password.$errors[0].$message}}
          </span>
        </div>
        <button type="submit" class="btn btn-dark mt-4">Log in</button>
      </form>
      <div class="d-flex justify-content-center align-items-center mt-3 mb-5">
        <div>Don't have an account?</div>
        <router-link class="ms-2 color_login" to="/registration">Sign up</router-link>
      </div>
    </div>
  </section>
</main>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";
import axios from "axios";

export default {
  name: `Login`,
  data(){
    return {
      v$:useVuelidate(),
      email:null,
      password:null,
      login_success_errorMsg:'',
      status_login:0,
    }
  }
  ,
  validations: {
    email:{required, email},
    password:{required,minLength:minLength(8)},
  },
  methods: {
    async login(){
      this.v$.$validate();
      if(!this.v$.$error){
        let formData = this.toFormData({email:this.email, password:this.password,});
        let res= await axios.post(`http://localhost/faho_world/Login-u`,formData
        );
        const resData=res.data;
        if (res.status === 200)
        {
          if (!resData.error)
          {
            if (resData.user_connecter)
            {
              localStorage.setItem("user_connecter", JSON.stringify(resData.user_connecter));
              localStorage.setItem("user_login", JSON.stringify(true));
              localStorage.setItem("user_id", JSON.stringify(resData.user_information.id));
              localStorage.setItem("type_user", JSON.stringify(resData.user_information.Type_User));
              if (resData.user_information.Type_User)
              {
                this.$router.push({name:'HomeAdmin'});
              }else{
                this.$router.push({name:'HomeUser'});
              }
              this.v$.$reset();
            }else {
              this.login_success_errorMsg=resData.message_user;
              this.status_login=resData.user_information.Status+1;
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
.title_login{
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
}

.image_faho {
  background-image: url('~@/assets/hom_background.webp');
  background-size: cover;
  border-radius: 25px 0 0 25px;
}
/*input{*/
/*  height: 25px;*/
/*  font-size: 12px;}*/
select {
  cursor: pointer;}
button{
  width: 100%;
}
.bg-white{
  border-radius: 0 25px 25px 0 ;
}
label{
  font-size:12px;
}
.color_login{
  text-decoration-line: underline;
  color: #3363c1 !important;
  font-weight: 700;
  cursor: pointer;}
@media screen and (max-width: 570px) {
  .image_faho ,.bg-white{
    border-radius:0;
  }
}
</style>