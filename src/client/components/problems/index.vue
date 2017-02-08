<template>
    <div id="index">
        <div class="container">
            <problems></problems>
            <!--<parallax></parallax>-->
            <!--<menubar></menubar>-->
        </div>
    </div>
</template>

<script>
    // import timeline from './timeline.vue'
    // import parallax from './main.vue'
    import problems from './problem_list.vue'

    export default {
        name: 'index',
        components: {
            // 'parallax' : parallax,
            // 'timeline': timeline
            'problems' : problems
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    #index{
        margin-top:100px;
    }
    .container {
        width: 100%;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>
