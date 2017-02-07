<template>
    <div id="app">
        <div id="menu">
            <ul>
                <li><a v-link="{path: '/'}">MAIN</a></li>
                <li><a @click="openModal">SIGN</a></li>
                <li><a v-link="{path: '/'}">MENU1</a></li>
                <li><a v-link="{path: '/'}">MENU2</a></li>
            </ul>
        </div>
        <div id="sign">

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
                                                <input type="password" name="password" placeholder="비밀번호"v-model="password">
                                            </div>
                                        </div>
                                        <div v-on:click="submit"class="ui fluid large teal submit button submitButton">로그인</div>                                        
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
                                                <input type="password" name="password" placeholder="비밀번호"v-model="password">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="user icon"></i>
                                                <input type="text" name="username" placeholder="이름"v-model="username">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="ui left icon input">
                                                <i class="student icon"></i>
                                                <input type="number" name="studentcode" placeholder="학번"v-model="studentcode">
                                            </div>
                                        </div>
                                            <div v-on:click="submit" class="ui fluid large teal submit button submitButton">회원가입</div>
                                    </form>
                                        <button v-on:click="signLogin = true" class="ui button black signButton">
                                         로그인하기
                                        </button>
                                </div>
                            </div>
                        </div>
                        <!--<div class="register">-->
                        <!--<input type="text" id="username" name="username" v-model="username">-->
                        <!--<input type="text" id="userid" name="userid" v-model="userid">-->
                        <!--<input type="text" id="password" name="password" v-model="password">-->
                        <!--<input type="text" id="studentcode" name="studentCode" v-model="studentcode">-->
                        <!--</div>-->

                    </div>

                </div>

            </div>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                signLogin: true,
                username: '',
                userid: '',
                password: '',
                studentcode: ''
            }
        },
        methods: {
            openModal: function () {
                $('.ui.modal').modal('show');
            },
            closeModal: function () {
                $('.ui.modal').modal('hide')
            },
            submit(){
                alert(this.signLogin);
                if (this.signLogin === true) {
                    //로그인
                    this.$http.post('api/users/signin', {
                    userid: this.userid,
                    password: this.password,
                    })
                }
                else {
                    //회원가입
                    this.$http.post('api/users/signup', {
                        username: this.username,
                        userid: this.userid,
                        password: this.password,
                        studentcode: this.studentcode
                    })
                }

            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .ui.grey.header{
        margin-top: 0px;
        margin-bottom: 50px;
        font-size:2.5rem
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
    }
    .submitButton{
        margin-top: 40px;
    }

    a {
        color: white;
        float: left;
        list-style: none;
        margin-left: 50px;
        cursor: pointer;
    }
    .signButton{
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
    .container{
        height: auto;
        padding:50px 170px 110px;
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
