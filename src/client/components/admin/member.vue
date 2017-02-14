<template>
    <div class="member">
        <ul>

            <li v-for="member in members">
                아이디: <span>{{member.userid}}</span><br>
                이름: <span>{{member.username}}</span><br>
                학번 : <span>{{member.studentcode}}</span><br>
                등급 : <span>{{member.rating}}</span><br>
                승인여부 : <span>{{member.account}}</span><br>

                <br>
            </li>
            <br>

        </ul>

    </div>
</template>
<script>

    export default{
        data(){
            return{
                members: []
            }
        },
        created(){
            this.getMember();
        },
        methods: {
//            문제리스트
            getMember: function () {
                this.$http.get('api/users')
                    .then((res) => {

                        var i = 0;
                        while(i<res.data.users.length) {
                            this.members.push({
                                userid: res.data.users[i].userId,
                                username : res.data.users[i].username,
                                studentcode: res.data.users[i].studentCode,
                                rating: res.data.users[i].rating,
                                account : res.data.users[i].account
                            });
                            i++;
                        }
                    })
            }
        }
    }
</script>
<style scoped>

</style>
