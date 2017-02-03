<template>
  <div id="app">
    <div id="menu">
      <ul>
        <li v-on:click="goSign">SIGN</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate'
    }
  },
  methods:{
    goSign: function(){
      this.$route.router.go('/users')
    }
  }
}
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  #app{
    width: 100%;
    height: 100vh;
  }
  #menu{
    position:absolute;
    width:100%;
    top:0px;
    z-index: 5;
    background-color: blue;
  }
  li{
    color: white;
    cursor: pointer;
  }
</style>
