<template>
    <div class="detail">
        <article class="post">
            <header>
                <h1>{{info.title? info.title :''}}</h1>
                <section class="post-meta">
                    <time>{{info.modified}}</time>
                </section>
            </header>
            <section class="post-content markdown-body" v-html="info.content" v-highlight>
            </section>
            <footer>

            </footer>
        </article>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:{title:""},
        }
    },
    created() {
         this.axios({
            method:"post",
            url:'/selectById',
            params:{
                id:this.$route.params.id
            }
        }).then(res => {
            this.info=res.data.data.detail[0];
        }).catch(e => {
            console.info(e);
        })
        
    },
}
</script>
<style lang="less" scoped>
.detail{
    overflow: hidden;
    .post{
        position: relative;
        width: 80%;
        max-width: 710px;
        margin: 30px auto;
        padding-bottom: 30px;
        border-bottom: #EBF2F6 1px solid;
        word-wrap: break-word;
        header{
            margin:30px auto;
            h1{
                font-size: 26px;
                color: #2E2E2E;
                line-height: 1.15em;
                margin: 0 0 0.4em 0;
                font-family: "Open Sans","Microsoft Jhenghei","Microsoft Yahei",sans-serif;
                text-rendering: geometricPrecision;
            }
            .post-meta{
                    display: block;
                    margin: 20px 0 0 0;
                    font-family: "Open Sans", sans-serif;
                    font-size: 13px;
                    line-height: 16px;
                    color: #9EABB3;
                    time{
                        display: inline-block;
                        margin-left: 10px;
                        padding: 0 12px;
                        text-transform: uppercase;
                        font-size: 13px;
                        white-space: nowrap;
                    }
            }
        }
        .post-content{
            color: #3A4145;
        }
    }

}
</style>


