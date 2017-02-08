<template>
    <div id="problems">
        <div class="container">
            <problemList></problemList>
        </div>
        problems
    </div>
    
</template>

<script>
    import problemList from './problem_list.vue'

    export default {
        name: 'problemList',
        components: {
            'problemList' : problemList
        },
        data () {
            return {

            }
        }
    }
</script>

<style src="../../assets/css/problems.css"></style>
<style scoped>

</style>
