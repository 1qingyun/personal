/**
 * Created by Administrator on 2017/4/13.
 */
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');


$(function(){
  $('.main-bg>img').addClass('animated bounceInRight')
});


/**图表**/
new Chart(t1,{
  type:'bar',
  data:{
    labels:['2001年','2002年','2003年','2004年','2005年',
      '2006年','2007年','2008年','2009年','2010年','2011年',
      '2012年','2013年','2014年','2015年','2016年'],
    datasets:[{
      label:'2001年-2016年全国高校毕业生人数(万人)',
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      data:[114,145,212,280,338,413,495,559,611,631,660,680,699,727,749,765]
    }]
  },
  option:{
    scales:{
      xAxes:[{
        stacked:true
      }],
      yAxes:[{
        stacked:true
      }]
    }
  }
});
