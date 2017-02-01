<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate'
    }
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100vh;
  }
  *{
    margin:0;
    padding:0;
  }
</style>
