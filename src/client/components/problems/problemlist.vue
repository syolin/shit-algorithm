<template>

<div class="problemlist">

    <!--문제리스트-->
    <div class="container">
        <h2 class="ui center aligned header"> 문제풀기
            <div class="sub header">Manage your account settings and set e-mail preferences.</div>
          </h2>
        <div class="ui top attached tabular menu">
            <a class="item active" data-tab="first" id="item">문제</a>
            <a class="item" data-tab="second">출처</a>
            <a class="item" data-tab="third">단계</a>
            <a class="item" data-tab="four">최근 문제</a>
            <a class="item" data-tab="five">기타</a>
        </div>
        <div class="ui bottom attached tab segment active" data-tab="first">
            <div class="ui items" v-for="item in items">
              <div class="item">
                <div class="content">
                  <p class="header">
                    <span>{{item.num}}</span>번 문제</p>
                  <a href="#" class="ui disabled header">
                    이름 : <span>{{item.name}}</span>
                  </a>
                  <div class="description">
                    <p>소스 : <span>{{item.source}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui pagination menu">
            <a href="#" class="active item"><i class="angle left icon"></i></a>
            <a href="#" class="active item"> 1 </a>
            <a href="#" class="active item"> 2 </a>
            <a href="#" class="active item"> 3 </a>
            <a href="#" class="active item"> 4 </a>
            <a href="#" class="active item"><i class="angle right icon"></i></a>
          </div>

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




<style src="../../assets/css/problems.css" scoped></style>
