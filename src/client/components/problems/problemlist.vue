<template>
    <div class="problemlist">
        <!--example-->
        <ul>
            <li v-for="item in items">
                - <span class="message">{{item.commit.message}}</span><br>
                by <span class="author">{{item.commit.author.name}}</span><br>
                at <span class="date">{{item.commit.author.date}}</span><br>
                <hr>
            </li>
        </ul>

        <!--문제리스트-->
        <!--<ul>-->
            <!--{ list:-->
               <!--[-->
                   <!--{-->
                        <!--num:'1234', problemname:'테스트문제01', source:'check', submission:-->
                        <!--{success: '22', fail: '11', average: '50'}-->
                   <!--}-->
               <!--]-->
            <!--}-->
            <!--<li v-for="item in items">-->
                <!--번호 : <span>{{item.list.num}}</span><br>-->
                <!--이름 : <span>{{item.list.problemname}}</span><br>-->
                <!--소스 : <span>{{item.list.check}}</span><br>-->
                <!--성공 : <span>{{item.list.submission.success}}</span><br>-->
                <!--실패 : <span>{{item.list.submission.fail}}</span><br>-->
                <!--평균 : <span>{{item.list.submission.average}}</span><br>-->
            <!--</li>-->
        <!--</ul>-->


        <!--해당문제만-->
        <!--<ul>-->
        <!--<li v-for="item in items">-->
        <!--번호 : <span>{{item.num}}</span><br>-->
        <!--이름 : <span>{{item.problemname}}</span><br>-->
        <!--소스 : <span>{{item.source}}</span><br>-->
        <!--설명 : <span>{{item.explanation}}</span><br>-->
        <!--입력 : <span>{{item.probleminfo.inputexample}}</span><br>-->
        <!--출력 : <span>{{item.probleminfo.output.example}}</span><br>-->
        <!--시간 : <span>{{item.probleminfo.timelimit}}</span><br>-->
        <!--메모리 : <span>{{item.probleminfo.memorylimit}}</span><br>-->
        <!--성공 : <span>{{item.submission.success}}</span><br>-->
        <!--실패 : <span>{{item.submission.fail}}</span><br>-->
        <!--평균 : <span>{{item.submission.average}}</span><br>-->
        <!--</li>-->
        <!--</ul>-->
    </div>
</template>
<script>

    export default{
        data(){
            return {
                currentBranch: 'dev',
                items: null,
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            //example
            fetchData: function () {
                this.$http.get('https://api.github.com/repositories/11730342/commits?per_page=5&sha=')
                    .then((response) => {
                        this.items = response.data;
                        console.log(response);
                    })
            }
//            문제리스트
//            fetchData: function () {
//                this.$http.get('http://121.186.23.245:9999/api/problems')
//                    .then((response)=> {
//                        this.items = response.data;
//                        console.log(response);
//                    })
//            }

            //해당문제만
//            fetchData: function () {
//                this.$http.get('http://121.186.23.245:9999/api/problems/:num')
//                    .then((response)=> {
//                        this.items = response.data;
//                        console.log(response);
//                    })
//            }



        }
    }
</script>
<style scoped>

</style>
