<template>
    <div id="index">
        <div class="container">
            <parallax></parallax>
            <!--<menubar></menubar>-->
        </div>
        <div class="container">
            <timeline></timeline>
        </div>
    </div>
</template>

<script>
    import timeline from './timeline.vue'
    import parallax from './main.vue'

    export default {
        name: 'index',
        components: {
            'parallax' : parallax,
            'timeline': timeline
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100vh;
    }
</style>
