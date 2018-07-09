//综述页面
<template>
<div class="borad">
    <el-row>
        <el-col :span="12">
          <div class="chart" id="chart"></div>
        </el-col>
        <el-col :span="12">
          <div class="chart" id="binchart"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <div class="content" id="content"></div>
        </el-col>
    </el-row>
    </div>    
</template>
<script>
var echarts =require("echarts");
export default {
    mounted() {
        var ChartObj=echarts.init(document.getElementById("chart"));
        var ChartObj2=echarts.init(document.getElementById("binchart"));
        var content=echarts.init(document.getElementById("content"))
        ChartObj.setOption({
            title : {
                text: '最近访问记录',
                subtext: '近30天',
                x:'center'
            },
             xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [10, 6, 7, 14, 33, 41, 1],
                type: 'line',
                smooth: true
            }]
        })
        ChartObj2.setOption({
            title : {
                text: '访客终端来源',
                // subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Chrome','Safria','Firefox','Android','Ios']
            },
            series : [
                {
                    name: '访客终端来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'Chrome'},
                        {value:310, name:'Safria'},
                        {value:234, name:'Firefox'},
                        {value:135, name:'Android'},
                        {value:1548, name:'Ios'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })  
        content.setOption({
             title : {
                text: '博客内容分布',
                x:'center'
            },
             color: ['#21BD7B'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['javascript', 'css', '工具使用', '经验总结', 'webpack', 'vue', 'react'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'共',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        })  
    },
    
}
</script>
<style lang="less" scoped>
.borad{
    width: 100%;
    height: 90vh;
    .chart{
        height: 400px;
    }
    .content{
       height: 300px;
    }
}

</style>


