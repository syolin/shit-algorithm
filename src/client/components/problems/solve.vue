<template>
    <div id="solve">
        <div class="sigo_container" v-for="item in items">
            <div class="solve_title">
                <div class="solve_num">
                    {{item.num}}
                </div>
                <div class="solve_name">
                    {{item.name}}
                </div>
            </div>
            <div class="solve_sidebar">
                <div class="solve_explain">
                    {{item.explanation}}
                </div>
            </div>
            <div class="solve_main">
                <div class="solve_inpiut">
                    {{item.inputex}}
                </div>
                <div class="solve_output">
                    {{item.outputex}}
                </div>
            </div>
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
            if(this.$cookie.get('userToken') == null){
                alert('로그인 해주세요');
                location.href="/";
            }
            this.url = this.$route.params.num;
            this.problemData();
            console.log(this.items);
        },
        methods:{
            problemData: function () {
                this.$http.get('../api/problems/'+this.url)
                    .then((res) => {
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
<style src="../../assets/css/solve.css" scoped></style>
<style>
    #menu{
        background-color: #373737 !important;
        border-bottom: 3px solid #2d2d2d
    }
</style>
