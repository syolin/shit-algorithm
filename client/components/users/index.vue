<template>
    <div id="index">
        <div class="container">
          <login v-if="sign"></login>
          <register v-else="sign"></register>
          <button type="button" name="button" v-on:click="change_sign">{{sign_msg}}</button>
        </div>
    </div>
</template>

<script>
    import login from './login.vue'
    import register from './register.vue'

    export default {
        name: 'index',
        components: {
            'login' : login,
            'register': register
        },
        data () {
            return {
                sign : true,
                sign_msg: "회원가입"
            }
        },
        methods:{
          change_sign : function(){
            this.sign = !this.sign;
            if(this.sign){
              this.sign_msg = "회원가입"
            }else{
              this.sign_msg = "로그인"
            }
          }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100vh;
    }
</style>
