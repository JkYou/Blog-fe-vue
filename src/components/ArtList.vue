<template>
    <div id="content" class="content">
        <article class="post">
            <header class="post-header">
                <h2 class="post-title">
                    <a href="#">服务器安装全新ubuntu</a>
                </h2>
            </header>
            <section class="post-excerpt">
              <p>Ubuntu 18.04 Bionic Beaver 已经在 2018 年 04 月 27 号发布，而很多云厂商甚至都还没更新系统模板（被打死，作为更新强迫症，决定亲自动手重新安装服务器的系统。 本教程在阿里云、腾讯云实测成功，下面拿阿里云来开刀。 0、环境准备 打开阿里云服务器管理控制台，在云主机实例列表中找到需要重装的主机，为避免出现各种奇怪的问题，建议重置系统为本文实验环境 ubuntu</p>
            </section>
            <footer class="post-meta">
                 <i class="icon iconfont icon-clock"></i>
                  <time>{{+new Date()}}</time>
            </footer> 
        </article>
         <article class="post">
            <header class="post-header">
                <h2 class="post-title">
                    <a href="#">服务器安装全新ubuntu</a>
                </h2>
            </header>
            <section class="post-excerpt">
              <p>Ubuntu 18.04 Bionic Beaver 已经在 2018 年 04 月 27 号发布，而很多云厂商甚至都还没更新系统模板（被打死，作为更新强迫症，决定亲自动手重新安装服务器的系统。 本教程在阿里云、腾讯云实测成功，下面拿阿里云来开刀。 0、环境准备 打开阿里云服务器管理控制台，在云主机实例列表中找到需要重装的主机，为避免出现各种奇怪的问题，建议重置系统为本文实验环境 ubuntu</p>
            </section>
            <footer class="post-meta">
                 <i class="icon iconfont icon-clock"></i>
                  <time>{{+new Date()}}</time>
            </footer> 
        </article>
    </div>
</template>
<script>
export default {
    name:"ArtList"
    
}
</script>
<style lang="less" scoped>
.content{
    margin: 0 auto;
    max-width: 710px;
    height: 1000px;
    .post{
        padding: 12px 6px 6px 6px;
        margin-bottom: 12px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.15s ease-out;
        height: 180px;
        color: #4a4a4a;
        border-bottom: #EBF2F6 1px solid;
        box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.5);
        .post-title{
            font-size: 26px;
            line-height: 26px;
            margin: 0 0 0.4em 0;
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
</style>


