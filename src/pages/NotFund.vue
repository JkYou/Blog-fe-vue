<template>
    <div class="not">
        <div class="content">
            <div class="log"></div>
            <div class="p"></div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.not{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #f5f5f5;
    .content{
        position: absolute;
        width: 460px;
        height: 250px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        flex: 1;
        .log{
            width: 271px;
            height: 249px;
            background: url(../assets/images/404.png) center no-repeat;
            background-size: 100% 100%;
        }
        .p{
            width: 188px;
            height: 230px;
            align-self:flex-end;
            background: url(../assets/images/p.png) center no-repeat;
            background-size: 100% 100%;
        }
    }
    
}

</style>


