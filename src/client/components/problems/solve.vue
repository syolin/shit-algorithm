<template>
    <div id="index">
        <div class="sigo_container">
            <ul>
                <li v-for="item in items">
                    번호: <span>{{item.num}}</span><br>
                    이름: <span>{{item.name}}</span><br>
                    소스: <span>{{item.source}}</span><br>
                    설명: <span>{{item.explanation}}</span><br>
                    입력예제: <span>{{item.inputex}}</span><br>
                    출력예제: <span>{{item.outputex}}</span><br>
                    시간: <span>{{item.time}}</span><br>
                    메모리: <span>{{item.memorylimit}}</span><br>

                    <br>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'index',
        data () {
            return {
                url: '',
                items: []
            }
        },
        created(){
            this.url = this.$route.params.num;
            this.problemData();
        },
        methods:{
            problemData: function () {
                this.$http.get('../api/problems/'+this.url)
                    .then((res) => {
                        console.log(res);
                        this.items.push({
                            num : res.data.problem.num,
                            name : res.data.problem.problemName,
                            source : res.data.problem.source,
                            explanation : res.data.problem.explanation,
                            inputex : res.data.problem.problemData.inputExample,
                            outputex : res.data.problem.problemData.outputExample,
                            time : res.data.problem.problemData.timeLimit,
                            memorylimit : res.data.problem.problemData.memoryLimit
                        });
                    })
            }
        }


    }

</script>
