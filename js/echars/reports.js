// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('report'));

// 指定图表的配置项和数据
option = {
  legend: {
    top:'20',
    left: 'center',
    data: ['优惠券发放数量','优惠券核销数量']
  },
  xAxis: {
    type: 'category',
    axisLabel: { rotate: 50},
    data: ['02/05.2018', '02/06.2018', '02/07.2018', '02/08.2018', '02/09.2018']
  },
  yAxis: {
    type: 'value',
    min:0,
    max:100,
    minInterval:25
  },
  series: [
    {
      type: 'line',
      name:'优惠券发放数量',
      data: [0, 30, 50, 70, 90]
    },
    {
      name: '优惠券核销数量',
      type: 'line',
      data: [0, 50, 55, 78, 95]
    },
  ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);