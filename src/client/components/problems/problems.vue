<template>
    <div id="index">
        <div class="sigo_container">
            <problemlist></problemlist>

        </div>

    </div>
</template>

<script>
    import problemlist from './problemlist.vue'

    export default {
        name: 'index',
        components: {
            'problemlist' : problemlist,
        },
        data () {
            return {

            }
        }

    }

</script>
<style src="../../assets/css/problems.css"></style>