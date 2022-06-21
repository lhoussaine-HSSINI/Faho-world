<template>
  <div class="py-5 px-0 px-sm-3 mb-2 mt-4">
    <h1>
      <div>
        Your favorite stores...with your
      </div>
      <div>
        favorite payment solution
      </div>
    </h1>
    <p class="p_0">SExplore stores and split your payments</p>
  </div>
  <div class="d-flex justify-content-center ">
    <router-link to="/store" class="sign_up btn-dark btn rounded-pill d-flex justify-content-center align-items-center" replace>
      <span class="mx-1">Store faho world</span>
      <FAIHoussain :icon="['fas' ,'arrow-right']" class="icon alt" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "After_header_router_shop"
}
</script>

<style scoped>
.sign_up{
  color: white !important;
}
</style>