<template>
    <div class="register">
        <form>
        <input type="text" id ="username" name="username" v-model="username">
        <input type="text" id ="userid" name="userid" v-model="userid">
        <input type="text" id ="password" name="password" v-model="password">
        <input type="text" id ="studentid" name="studentid" v-model="studentid">

        <button name="button" @submit.prevent>submit</button>
      </form>
    </div>
</template>
<script>
    export default{
      data(){
        return{
          username: '',
          userid : '',
          password: '',
          studentid: ''
        }
      },
      methods:{
        onSubmit: function(){
          this.$http.post('./api/users/signup',{
            username : this.username,
            userid: this.userid,
            password: this.password,
            studentid: this.studentid
          })
          }
        },
      }
</script>
<style scoped>

</style>
