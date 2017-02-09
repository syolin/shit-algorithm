<template>
    <div id="problems">
        <div class="sigo_container">
            
            
        </div>
    </div>
    
</template>

<script>
    import list from './list'

    export default {
        name: 'problems',
        components: {
            'list' : list
        },
        data () {
            return {

            }   
        },
        methods:{
            loadData(){
                this.$http.get('http://121.186.23.245:9999/api/problems',{
                    
                })
            }
        }
    }
</script>

<style src="../../assets/css/problems.css"></style>
<style scoped>

</style>
