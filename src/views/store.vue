<template>
  <AppHeader></AppHeader>
  <main>
    <section class="container my-3">
      <h3 class="text-start">Apparel</h3>
      <div class="row text-center">
        <div  class="col-12 col-sm-6 col-md-3 col-l-2 my-3 d-flex justify-content-center" v-for="image in shopping" :key="image.id">
          <div class="card">
            <img :src="image.imageUrl_product" class="card-img-top" alt="Puppy with balloons">
            <div class="btn_show_shop">
              <router-link :to="{name:'product', params:{ id:image.id } }"  class="btn btn-dark">show</router-link>
            </div>
            <div class="p-1 px-3 d-flex flex-column justify-content-center align-items-start">
              <p>{{image.name}}</p>
              <strong>{{ image.price }} DH</strong>
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
  name: `store`,
  components: {
    AppHeader,
    AppFooter
    },
  data() {
    return {
      shopping:[
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
}
</script>

<style scoped>

.card{
  width: 300px;
  border-radius: 0.8rem !important;
}
.card-img-top{
  border-top-right-radius: 0.8rem !important;
  border-top-left-radius: 0.8rem !important;
}
.card:hover{
  transform: scale(1.1);
  transition: all linear 200ms;
  z-index: 1;
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
  cursor: pointer;
}

.btn-dark {
  color: #212529 !important;
  background-color: #fff;
  border-color:#fff;
}
.btn_show_shop{
  display: none;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 40%;
}
.card:hover  .btn_show_shop{
  display: block;
}
p{
  font-size: 12px;
  color: #999;
  margin: 0;
}
</style>