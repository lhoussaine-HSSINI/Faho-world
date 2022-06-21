<template>
 <AppHeader></AppHeader>
  <main>
    <section>
      {{$router.currentRoute.value.name}}
    </section>
    <section class="mx-4 d-flex justify-content-evenly flex-wrap flex-sm-nowrap my-2">
      <div class="card text-center mx-3 my-3 my-sm-5">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
      <div class="card text-center mx-3 my-3 my-sm-5">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
      <div class="card text-center mx-3 my-3 my-sm-5">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </section>
    <slider_home></slider_home>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import slider_home from "@/components/slider_home.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: `help`,
  components: {
    AppHeader,
    slider_home,
    AppFooter
  },
}
</script>

<style scoped>

</style>