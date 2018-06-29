<template>
    <div class="page" ref="page">
        <div class="git"><a :href="git">support me on store</a></div>
        <nav></nav>
        <header class="main-header" style="background-image: url(https://image.static.i-meto.com/uploads/2018/04/wallhaven-615414.jpg)">
            <div class="vertical">
                <div class="main-header-content inner">
                    <h1 class="page-title">洛克公园</h1>
                    <h2 class="page-description" id="hitokoto">纵里寻她千百度，蓦然回首，那人却在灯火阑珊处。</h2>
                </div>
            </div>
            <a href="#" class="scroll-down" @click="scrollTop"><i class="icon iconfont icon-moreunfold fn"></i></a>
        </header>
        <div id="content" class="content" ref="content">           
        <article class="post" v-for="(item,index) in info.list" :key="index">
            <header class="post-header">
                <h2 class="post-title">
                    <a href="#">{{item.title}}</a>
                </h2>
            </header>
            <section class="post-excerpt">
              <p>{{item.content.substring(0,150)}}</p>
            </section>
            <footer class="post-meta">
                 <i class="icon iconfont icon-clock"></i>
                  <time>{{new Date(item.modified).toDateString()}}</time>
            </footer> 
        </article>         
    </div>
    <div class="next"><i class="icon iconfont icon-moreunfold fn" @click.stop="loadMore"></i></div>  
    <Foot/>
    </div>
</template>
<script>
import Foot from '$com/Foot'
export default {
    name:"Index",
    data () {
        return {
            git:'http://www.19buy.top',
            page:1,
            info:{list:[]}
        }
    },
    components:{
        Foot
    },
    created(){
        this.getData(this.page);
    },
    mounted() {
       console.info("index",this.$store.state.oauth_token)
    },
    methods:{
        getData(page){
            this.axios.get(`/indexPage?p=${page}&limit=5`).then(res => {
                this.info=res.data.info;
                console.info(res.data.info)
            }).catch(e => {
                console.info(e);
            })
        },
        loadMore(){
            this.page++;
            if(this.page>this.info.pages){
                this.$message({
                    message: '没有更多了',
                   type: 'warning'
                });
            }else{
                this.axios.get(`/indexPage?p=${this.page}&limit=5`).then(res => {
                    this.info.list=this.info.list.concat(res.data.info.list);
                }).catch(e => {
                    console.info(e);
                })
            }
            
        },
        scrollTop(e){
           this.scrollTo("content");
        },
        scrollTo (data) {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            let des = this.$refs[data].offsetTop;
            let start = this.$refs[data].scrollTop;
            this.moveSlowly(des, start);
        },
        moveSlowly (des, start, time) {
            clearInterval(timer);
            let speedTime = time || 100;
            start || (start = 0);
            let distance = des - start;
            let speed = distance / speedTime;
            let i = 1;
            let pos = start;
            let timer = setInterval(function () {
                if (i == speedTime) {
                    pos = des;
                    document.documentElement.scrollTop = document.body.scrollTop = pos;
                    clearInterval(timer);
                } else {
                    pos = pos + speed;
                    document.documentElement.scrollTop = document.body.scrollTop = pos;
                    i++;
                }
            }, 1)
        },      
    }
}
</script>
<style lang="less">
.page{
    .git{
        width: 200px;
        height: 30px;
        position: fixed;
        color: #fff;
        background: rgb(13, 181, 121);
        text-align: center;
        line-height: 30px;
        top: 46px;
        right: -39px;
        z-index: 999;
        transform:rotate(45deg);
        box-shadow: 0 0 20px rgb(13, 181, 121);
    }
    .main-header{
        position: relative;
        display: table;
        width: 100%;
        height: 100vh;
        text-align: center;
        background: #222 no-repeat center center;
        background-size: cover;
        overflow: hidden;
        margin-bottom: 30px;
        .vertical{
            display: table-cell;
            vertical-align: middle;
        .inner {
            position: relative;
            width: 80%;
            max-width: 710px;
            
            margin: 0 auto;
            .page-title{
                color: #fff;
                font-size: 50px;
                line-height: 90px;
                animation: fade-in-down 0.6s both;
                animation-delay: 0.2s;
                text-shadow: 0 3px 6px rgba(0,0,0,.4);               
            }
            .page-description {
                margin: 0;
                font-size: 18px;
                line-height: 25px;
                font-weight: 400;
                font-family: "Merriweather", serif;
                letter-spacing: 0.01rem;
                color: #fff;
                animation: fade-in-down 0.9s both;
                animation-delay: 0.3s;
                

            }
            @keyframes fade-in-down {
                0%{
                    opacity: 0;
                    transform: translateY(-10px);
                }
                100%{
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
        
        }
        .scroll-down{
                display: block;
                position: absolute;
                z-index: 100;
                bottom: 45px;
                left: 50%;
                margin-left: -16px;
                width: 34px;
                height: 34px;
                font-size: 34px;
                text-align: center;
                text-decoration: none;
                color: rgba(255,255,255,0.7);
                animation: bounce 3s 2s infinite;
                .fn{
                    font-size: 40px;
                }
            }
    }
    .content{
        margin: 80px auto 0;
        max-width: 710px;
        min-height: 80vh;       
        .post{         
            padding: 12px 6px 6px 6px;
            margin-bottom: 12px;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.15s ease-out;
            color: #4a4a4a;
            border-bottom: #EBF2F6 1px solid;
            box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.5);
            .post-title{
                font-size: 26px;
                line-height: 26px;
                margin: 15px 0 0.4em 0;
                font-family: "Open Sans","Microsoft Jhenghei","Microsoft Yahei",sans-serif;
                text-rendering: geometricPrecision;
                &:hover{
                    color: #2E2E2E;
                }
            }
            .post-excerpt{
                display: block;
                p{
                    font-size: 15px;
                    line-height: 1.5;
                }
            }
            .post-meta{
                display: block;
                margin: 20px 0;
                font-family: "Open Sans", sans-serif;
                font-size: 13px;
                line-height: 2.2;
                color: #9EABB3;
            }
            &:hover{
                transition: .5s ease;
                transform: translateY(-3px);
            }
        }
    }
    .next{
        text-align: center;
        i{
            display: block;
           font-size: 30px;
            animation: bounce 3s 2s infinite;
        }
        
    }
    @keyframes bounce {
        0%, 10%, 25%, 40%, 50% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(-10px);
        }
        30% {
            transform: translateY(-5px);
        }
        
    }
}
</style>


