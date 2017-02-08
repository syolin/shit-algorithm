<!--
#a5dff9
#ef5285
#60c5ba
#feee7d
-->
<template>
    <div id="app">
        <div id="menu">
            <ul>
                <li><a v-link="{path: '/'}">MAIN</a></li>
                <li v-if="loginState">
                    <a @click="logout">{{username}}</a>
                    <a v-link="{path: '/mypage'}">마이페이지</a>
                </li>                
                <li v-else><a @click="openModal">SIGN</a></li>
                <li><a v-link="{path: '/problems'}">문제 풀기</a></li>
                <li><a v-link="{path: '/'}">MENU2</a></li>
            </ul>
        </div>
        <div v-if="loginState == false" id="sign">

            <div class="ui modal">

                <i class="close icon" v-on:click="closeModal"></i>
                <div class="login_form" v-if="signLogin">
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
                                        <div v-on:click="submit" class="ui fluid large teal submit button submitButton">
                                            로그인
                                        </div>
                                    </form>
                                    <button v-on:click="signLogin = false" class="ui button black signButton">
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
                                                <input type="number" name="studentcode" placeholder="학번"
                                                       v-model="studentcode">
                                            </div>
                                        </div>
                                        <div v-on:click="submit" class="ui fluid large teal submit button submitButton">
                                            회원가입
                                        </div>
                                    </form>
                                    <button v-on:click="signLogin = true" class="ui button black signButton">
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
                signLogin: true,
                username: '',
                userid: '',
                password: '',
                studentcode: '',
                loginResult: ''
            }
        },
        methods: {
            logout(){
                this.loginState = false;
            },
            openModal() {
                $('.ui.modal').modal('show');
            },
            closeModal() {
                $('.ui.modal').modal('hide')
            },
            submit(){
                if (this.signLogin === true) {
                    //로그인
                    this.$http.post('api/users/signin', {
                        userid: this.userid,
                        password: this.password,
                    })
                    .then(function (response) {
                        alert('success')
                        this.loginState = true;
                        alert(response.data.result + ' ' + response.data.token);
                        $('.ui.modal').modal('hide');                        
                    })
                    .catch(function (error) {
                        if(error.response.data.message == 'account false'){
                            alert("승인중입니다");
                           $('.ui.modal').modal('hide');    
                           console.log(this.data());
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
                        $('.ui.modal').modal('hide')
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                }

            }
        }
    }
</script>

<style scoped>
    .ui.grey.header {
        margin-top: 0px;
        margin-bottom: 50px;
        font-size: 2.5rem
    }
    #app {
        width: 100%;
        height: calc(100vh - 100px);
    }
    #menu {
        position: absolute;
        height: 100px;
        width: 100%;
        top: 0px;
        z-index: 5;
    }
    li {
        float: left;
        list-style: none;
        cursor: pointer;
        list-style: none;
        cursor: pointer;
    }
    .submitButton {
        margin-top: 40px;
    }
    a {
        color: white;
        font-size: 30px;
        margin-left: 50px;
    }
    .signButton {
        margin-top: 15px;
        width: 100%;
    }
    #subdiv {
        margin-top: 30px;
    }
    #subh {
        margin-bottom: 30px;
    }
    #loginbtn {
        margin-bottom: 20px;
        background-color: rgb(134, 82, 33);
        color: white;
    }
    #formgrid {
        padding: 0;
    }
    .container {
        height: auto;
        padding: 50px 170px 110px;
    }
    #topbtn {
        width: 200px;
        margin: 20px 0px 30px 0px;
    }
    .subtile {
        margin-top: 10px
    }
    #subpass {
        margin: 0;
    }
    .ui.grey.header {
        margin-top: 10px;
    }
</style>
