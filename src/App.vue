<template>
  <div class=" px-0 container-fluid ">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Helvetica-Medium,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 30px;*/
}
body{
  font-size: .833vw;
  line-height: 140%;
  background-color: #f2f2f2 !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>