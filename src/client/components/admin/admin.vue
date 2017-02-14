<template>
    <div id="admin">
        <div class="sigo_container">
            <!--<div class="adminLogin">-->
                <!--<div class="description">-->

                <!--<div class="ui two column centered grid">-->
                    <!--<div class="sigo_container">-->
            <!--<div v-if="userRating != 3"class="culnmn">-->
                <!--<h1 class="ui header">ADMIN LOGIN</h1>-->
                <!--<div class="formdiv">-->
                <!--<form class="ui large form">-->
                    <!--<div class="field">-->
                        <!--<input type="text" name="email" placeholder="아이디" id="adminid" v-model="adminid">-->
                    <!--</div>-->
                    <!--<div class="field">-->
                        <!--<input type="password" name="password" placeholder="비밀번호" id="adminpw" v-model="adminpw">-->
                    <!--</div>-->
                    <!--<div class="ui fluid large teal submit button adminLogin" id="adlogin" v-on:click="adminLogin">-->
                      <!--Login</div>-->
                <!--</form>-->
              <!--</div>-->
              <!--</div>-->
                    <!--</div>-->


            </div>
            <div class="adminPage" v-if="adminState">
            <div class="ui">
                <h1 class="ui header">ADMINPAGE</h1>
                <div class="ui secondary pointing menu">
                    <a class="item" v-on:click="click_member">회원관리</a>
                    <a class="item" v-on:click="click_list">개시판관리</a>
                    <a class="item" v-on:click="click_problem">문제관리</a>
                </div>
                    <div class="twelve wide stretched column">
                        <member v-if="memberState"></member>
                        <problemmanage v-if="problemState"></problemmanage>
                        <notice v-if="listState"></notice>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>

    import member from './member.vue'
    import problemmanage from './problemmange.vue'
    import notice from './notice.vue'


    export default {
        name: 'admin',
        components: {
            'member' : member,
            'problemmanage' : problemmanage,
            'notice': notice
        },
        data () {
            return {
                adminid: '',
                adminpw: '',
                memberState : true,
                problemState: false,
                listState: false,
                adminState: false,
                userRating: '',
                members: [],
                problems: [],
                notice: [],
                userToken: ''
            }
        },
        created:function(){

            this.userRating = this.$cookie.get('userRating');
            this.userToken = this.$cookie.get('userToken');
            if(this.userToken == null){
                alert("로그인 해주세요");
                    this.$router.go({
                        name: 'index'
                    })
//                $('.ui.modal').modal({
//                    blurring: true
//                }).modal('show')
            }
            else if(this.userRating != 3){
                alert('어드민이 아닙니다');
                this.$router.go({
                    name: 'index'
                })
            }else{
                this.adminState = true;
            }

        },
        methods:{
            openModal() {
                $('.adminLogin').modal({
                    blurring: true
                }).modal('show')
            },
            closeModal() {
                $('.adminLogin').modal('hide')
            },
            click_problem(){
                this.memberState = false;
                this.problemState = true;
                this.listState = false;
            },
            click_member(){
                this.memberState = true;
                this.problemState = false;
                this.listState = false;
            },
            click_list(){
                this.memberState = false;
                this.problemState = false;
                this.listState = true;
            },
            // 어드민이 아닐경우
            adminLogin(){
             this.$http.post('api/users/signin', {
                        userid: this.adminid,
                        password: this.adminpw,
                    })
                .then((res)=> {
                    this.userToken = res.data.token;
                    this.userName = res.data.user.username;
                    this.userRating = res.data.user.rating;

                    this.$cookie.set('userName;', this.userName, 1);
                    this.$cookie.set('userToken',this.userToken, 1);
                    this.$cookie.set('userRating',this.userRating, 1);

                    this.closeModal();
                    this.adminState = true;
//                    // 헤더 토큰 등록
//                    this.$http.defaults.headers.common["Authorization"] = this.userToken;
//                    this.$http.get('api/users/tokentest')
//                        .then((res)=>{
//                            if(res.status == 200){
//                                this.username = res.data.user.username;
//
//                                this.userRating = res.data.user.rating;
//
//                                this.$cookie.set('userToken',this.userToken, 1);
//                                this.$cookie.set('userRating',this.userRating, 1);
//
//                                this.closeModal();
//                                this.adminState = true;
//                                this.getMember();
//                            }
//                        })
//                        .catch((err)=>{
//                            alert(err);
//                        })
                })
                .catch((err) => {
                 alert(err);
                });
            },
        }
    }
</script>
<style src="../../assets/css/admin.css"></style>