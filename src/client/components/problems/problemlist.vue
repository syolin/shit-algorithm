<template>
    <div class="problemlist">
        <!--example-->
        <!--<ul>-->
        <!--<li v-for="item in items">-->
        <!-- - <span class="message">{{item.commit.message}}</span><br>-->
        <!--by <span class="author">{{item.commit.author.name}}</span><br>-->
        <!--at <span class="date">{{item.commit.author.date}}</span><br>-->
        <!--<hr>-->
        <!--</li>-->
        <!--</ul>-->


        <!--문제리스트-->
        <ul>

            <li v-for="item in items">
                번호 : <span>{{item.num}}</span><br>
                이름 : <span>{{item.name}}</span><br>
                소스 : <span>{{item.source}}</span><br>
                <br>
            </li>
            <br>

        </ul>



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
                items:[],
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            //example
//            fetchData: function () {
//                this.$http.get('https://api.github.com/repositories/11730342/commits?per_page=5&sha=')
//                    .then((res) => {
//                        this.items = res.data;
//                        console.log(res.data);
//                    })
//                this.$http.get('api/problems')
//                    .then((res) => {
//                        this.items = res.data;
//                        console.log(res.data);
//                    })

//            }
//            문제리스트
            fetchData: function () {
                this.$http.get('api/problems')
                    .then((res) => {
//                        console.log(res.data.result);
//                        console.log(res.data.problems[0]);

                        var i = 0;
                        while(i<res.data.problems.length) {
                            this.items.push({
                                num: res.data.problems[i].num,
                                name: res.data.problems[i].problemName,
                                source: res.data.problems[i].source,
                            });
                            i++;
                        }
                    })
            }

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
