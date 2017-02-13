<template>
    <div class="problemlist">
        <ul>

            <li v-for="item in items">
                번호 : <span>{{item.num}}</span><br>
                이름 : <span>{{item.name}}</span><br>
                소스 : <span>{{item.source}}</span><br>
                <br>
            </li>
            <br>

        </ul>

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
//            문제리스트
            fetchData: function () {
                this.$http.get('api/problems')
                    .then((res) => {

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
        }
    }
</script>
<style scoped>

</style>
