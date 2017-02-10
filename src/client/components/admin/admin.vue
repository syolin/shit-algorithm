<template>
    <div id="admin">
        <div class="sigo_container">
            <div class="adminLogin">
                <div class="ui two column centered grid">
                    <div class="container">
            <div class="culnmn">
                <h1 class="ui header">ADMIN LOGIN</h1>
                <div class="formdiv">
                <form class="ui large form">
                    <div class="field">
                        <input type="text" name="email" placeholder="아이디" id="userid">
                    </div>
                    <div class="field">
                        <input type="password" name="password" placeholder="비밀번호" id="userpw">
                    </div>
                    <div class="ui fluid large teal submit button adminLogin" id="adlogin">
                      Login</div>
                </form>
              </div>
              </div>
        </div>
    </div>


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
                        <probleminput v-if="problemState"></probleminput>
                        <list v-if="listState"></list>
                    </div>
                </div>
        </div>
    </div>

        </div>
    </div>
</template>

<script>

    import member from './member.vue'
    import probleminput from './probleminput.vue'
    import list from './list.vue'


    export default {
        name: 'admin',
        components: {
            'member' : member,
            'probleminput' : probleminput,
            'list': list
        },
        data () {
            return {
                memberState : true,
                problemState: false,
                listState: false,
                adminState: false
            }
        },
        created:function(){
            this.openModal();
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
            adminLogin(){

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
                .catch((error) => {
                    if(error.response.data.message == 'account false'){
                        alert("어드민이아닙니다");
                        $('.ui.modal').modal('hide');
                        console.log(this.loginState);
                    }
                });
            }
        }
    }
</script>
<style src="../../assets/css/admin.css"></style>