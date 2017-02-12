<template>
    <div id="app">
        <div id="menu" class="ui secondary menu">
            <ul id="mainmn">
                <li><a v-link="{path: '/'}">MAIN</a></li>
            </ul>
            <ul id="submn">

                <li><a v-link="{path: '/notice'}">공지사항</a></li>
                <li><a v-link="{path: '/problems'}">문제 풀기</a></li>
                <li><a v-link="{path: '/'}">랭킹</a></li>
                <li v-if="loginState">
                    <a v-link="{path: '/mypage'}">{{username}}님</a>
                    <a @click="logout">로그아웃</a>
                </li>
                <li v-if="loginState == false"><a @click="openModal">SIGN</a></li>
            </ul>
        </div>
        <div class="main">
            <h3 class="ui center aligned header"> 문제풀기
                <div class="sub header">Manage your account settings and set e-mail preferences.</div>
            </h3>
        </div>
        <div v-if="loginState == false" id="sign">
            <div class="ui modal">
                <i class="close icon" v-on:click="closeModal"></i>
                <div class="login_form" v-if="signState">
                    <div class="description">
                        <div class="ui two column centered grid">
                            <div class="container">
                                <div class="culnmn">
                                    <h1 class="ui grey header">로그인</h1>

                                    <form class="ui large form">
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="user icon"></i>
                                                <input type="text" name="userid" placeholder="아이디" v-model="userid">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="lock icon"></i>
                                                <input type="password" name="password" placeholder="비밀번호"
                                                       v-model="password">
                                            </div>
                                        </div>
                                        <div v-on:click="submit" v-on:keyup.enter="submit" class="ui fluid large teal submit button submitButton">
                                            로그인
                                        </div>
                                    </form>
                                    <button v-on:click="signState = false" class="ui button black signButton">
                                        회원가입하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="register_form" v-else>
                    <div class="description">
                        <div class="ui two column centered grid">
                            <div class="container">
                                <div class="culnmn">
                                    <h1 class="ui grey header">회원가입</h1>

                                    <form class="ui large form">
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="user icon"></i>
                                                <input type="text" name="userid" placeholder="아이디" v-model="userid">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="lock icon"></i>
                                                <input type="password" name="password" placeholder="비밀번호"
                                                       v-model="password">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="user icon"></i>
                                                <input type="text" name="username" placeholder="이름" v-model="username">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="student icon"></i>
                                                <input type="text" name="studentcode" placeholder="학번"
                                                       v-model="studentcode" v-on:keypress="isNumber(event)">

                                            </div>
                                        </div>
                                        <div v-on:click="submit" v-on:keyup.enter="submit" class="ui fluid large teal submit button submitButton">
                                            회원가입
                                        </div>
                                    </form>
                                    <button v-on:click="signState = true" class="ui button black signButton">
                                        로그인하기
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'vm',
        data () {
            return {
                loginState: false,
                signState: true,
                userid: '',
                password: '',
                username: '',
                studentcode: '',
                loginResult: '',
                token: '',
                
            }
        },
        methods: {
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            logout(){
                this.loginState = false;
            },
            openModal() {
                $('.ui.modal').modal({
                    blurring: true
                }).modal('show')
            },
            closeModal() {
                $('.ui.modal').modal('hide')
            },
            submit(){
                if (this.signState === true) {
                    //로그인
                    this.$http.post('api/users/signin', {
                        userid: this.userid,
                        password: this.password,
                    })
                        .then((res)=> {
                            this.loginState = true;
                            this.token = res.data.token;
                            this.$http.defaults.headers.common["Authorization"] = this.token;
                            console.log(this.$http.defaults.headers);

                            //Token
                            this.$http.get('api/users/tokentest')
                                .then((res) => {
                                    if(res.status == 200){
                                        this.username = res.data.user.username;
                                        this.closeModal();
                                        this.loginState = true;
                                    }
                                })
                                .catch((err) => {
                                    alert(err);
                                })
                        })
                        .catch((err) => {
                            alert(err);
                            if(err.response.data.message == 'account false'){
                                alert("승인중입니다");
                                this.closeModal();
                                console.log(this.loginState);
                            }
                        });
                }
                else {
                    //회원가입
                    this.$http.post('api/users/signup', {
                        username: this.username,
                        userid: this.userid,
                        password: this.password,
                        studentcode: this.studentcode
                    })
                        .then(function (response) {
                            alert(response.data.result + ' ' + response.data.username);
                            this.closeModal();
                        })
                        .catch(function (error) {
                            alert(error);
                        });
                }
            }
        }
    }
</script>


<style src="./assets/css/app.css"></style>
<style scoped>
    body{
    }
    .ui.modal{
        height:auto !important;
    }
    .container{
        height: auto;
    }
    .culnmn{
        padding: 5% 17% 1%;
    }
    .ui.secondary.menu{
        margin: 15px 0px 0px 0px;
    }
    #menu{
        margin-top: 10px;
        position: fixed;
    }
    #mainmn{
        margin-right: 50%;
        margin-left: 70px;
    }
    a{
        font-size: 16px;
        color: rgb(224, 224, 224);
    }
    .ui.center.aligned.header{
        margin: 70px;
    }
    .ui.grid{
        justify-content: center;
    }
</style>