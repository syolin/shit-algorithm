<template>
    <div id="index">
        <div class="sigo_container">
            rank page
        </div>
    </div>
</template>

<script>

    export default {
        name: 'index',
        data () {
            return {

            }
        },
        created(){
            if(this.$cookie.get('userToken') == null){
                alert('로그인 해주세요');
                location.href="/";
            }
        }
    }
</script>
