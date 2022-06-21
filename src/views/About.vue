<template>
  <AppHeader></AppHeader>
  {{$router.currentRoute.value.name}}
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: `About`,
   components: {
    AppHeader,
     AppFooter
  },
  created(){
    console.log(this.$route.path);
  }
}
</script>

<style scoped>

</style>