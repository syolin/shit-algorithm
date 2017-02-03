<template>
  <div id="app">
    <div id="menu">
      <ul>
        <li v-on:click="goMain">LOGO</li>
        <li v-on:click="goSign">SIGN</li>
        <li v-on:click="">menu1</li>
        <li v-on:click="">menu2</li>

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
    },
    goMain: function(){
      this.$route.router.go('/')
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
    height: calc(100vh - 100px);
    margin-top: 100px;
  }
  #menu{
    position:absolute;
    height:100px;
    width:100%;
    top:0px;
    z-index: 5;
    background-color: blue;
  }
  li{
    color: white;
    cursor: pointer;
    float:left;
    list-style:none;
    margin-left: 50px;

  }
</style>
