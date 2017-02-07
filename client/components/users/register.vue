<template>
    <div class="register">
            <input type="text" id="username" name="username" v-model="username">
            <input type="text" id="userid" name="userid" v-model="userid">
            <input type="text" id="password" name="password" v-model="password">
            <input type="text" id="studentcode" name="studentCode" v-model="studentcode">
            <button name="button" @click="registerSubmit">submit</button>
    </div>
</template>
<script>
    export default{
        data()
        {
            return {
                username: '',
                userid: '',
                password: '',
                studentcode: ''
            }
        }
        ,
        methods: {
            registerSubmit(){
                this.$http.post('api/users/signup', {
                    username: this.username,
                    userid: this.userid,
                    password: this.password,
                    studentcode: this.studentcode
                })
            }
        }
        }
</script>
<style scoped>

</style>
