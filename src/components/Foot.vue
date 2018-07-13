<template>
    <footer>
        <p @click="login">Copyright © 2017-2018 19buy.top</p>
    </footer>    
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push("/login");
        }
    }
}
</script>
<style lang="less" scoped>
footer{
    border-top: 1px solid #f5f5f5;
    height: 80px;
    line-height: 80px;
    width: 100%;
    text-align: center;
    font-size:16px;
    color: #888;
}

</style>


