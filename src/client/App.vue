<template>
    <div id="app">
        <div id="menu">
            <ul>
                <li><a v-link="{path: '/'}">MAIN</a></li>
                <li><a v-link="{path: '/users'}">SIGN</a></li>
                <li><a v-link="{path: '/'}">MENU1</a></li>
                <li><a v-link="{path: '/'}">MENU2</a></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: 'Express + Vue boilerplate'
            }
        },
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        width: 100%;
        height: calc(100vh - 100px);
        margin-top: 100px;
    }

    #menu {
        position: absolute;
        height: 100px;
        width: 100%;
        top: 0px;
        z-index: 5;
        background-color: blue;
    }
    li{
        float: left;
        list-style:none;
    }
    a {
        color: white;
        float: left;
        list-style: none;
        margin-left: 50px;
        cursor: pointer;
    }
</style>
