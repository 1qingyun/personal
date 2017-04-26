/**
 * Created by Administrator on 2017/4/14.
 */
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');


document.getElementById('date').
  addEventListener('click',function(){
    laydate({
      format:'YYYY年MM月DD日',
      festival:true
    })
  });


/*****广告轮播*****/
var imgs=[
  {"i":0,"img":'image/bg-1.jpg'},
  {"i":1,"img":'image/bg-2.jpg'},
  {"i":2,"img":'image/bg-3.jpg'},
  {"i":3,"img":'image/bg-4.jpg'},
  {"i":4,"img":'image/bg-5.jpg'}
];
var adv={
  LIWIDTH:0,
  $ulImgs:null,
  INTERVAL:500,
  WAIT:3000,
  timer:null,
  init(){
  this.LIWIDTH=parseFloat($("#slider").css("width"));
  this.$ulImgs=$("#imgs");
  this.updateView();
  $("#indexs").on("mouseover","li",(e)=>{
    var target=$("#indexs>li").index(e.target);
  var old=imgs[0].i;
  this.move(target-old);
});
this.autoMove();
},
autoMove(){//启动自动轮播
  this.timer=setTimeout(()=>this.move(1),this.WAIT);
},
movePrev:function(n){//右移前的准备
  n*=-1;
  imgs=imgs.splice(-n,n).concat(imgs);
  this.updateView();
  this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))-n*this.LIWIDTH);
},
move(n){
  clearTimeout(this.timer);
  if(n<0){//如果右移
    this.movePrev(n);//先准备
    this.$ulImgs.stop(true).animate(//再移动
      {left:0},this.INTERVAL,
      ()=>this.autoMove()
  );

  }else{
    this.$ulImgs.stop(true).animate(
      {left:-n*this.LIWIDTH},this.INTERVAL,
      ()=>this.moveLeftCallback(n)//再修改
  );
  }
},
moveLeftCallback(n){
  imgs=imgs.concat(imgs.splice(0,n));
  this.updateView();
  this.$ulImgs.css("left",0);
  //启动自动轮播
  this.autoMove();

},
updateView(){//将数组中的内容更新到页面
  for(var i=0,lis="",idxs="";i<imgs.length;i++){
    lis+=`<li><img src="${imgs[i].img}"></li>`;
    idxs+="<li></li>"
  }
  this.$ulImgs.html(lis)
    .css("width",imgs.length*this.LIWIDTH);
  $("#indexs").html(idxs)
    .children(`li:eq(${imgs[0].i})`)
.addClass("hover");
},
};
adv.init();


/**左边新闻切换**/
$(function(){
  var count=0;
  $('.s-title-block li').each(function(){
    $(this).mouseover(function(e){
      e.preventDefault();
      $('.s-title-block li').eq(count).removeClass('active');
      $('.news-bd').eq(count).addClass('hidden');
      count=$(this).index();
      $('.s-title-block li').eq(count).addClass('active');
      $(".news-bd").eq(count).removeClass("hidden");
    });
  });
});


/**导航条切换****/
$('.nav-title').on('click','li>a',function(){
  $(this).addClass('show').
    parent('li').siblings('li').
    children('a').removeClass('show');
});


//点击按钮异步加载内容，为news-btn绑定监听事件
$('.news-btn').click(function(){
  $.ajax({
    type:'get',
    url:'data/news.php',
    success:function(list){
      var html='';
      for(var i=0;i<list.length;i++){
        html+=`<div class="content-block-tu">
                <div class="fl">
                  <a href="${list[i].content}"><img class="img-scale" src="${list[i].pic}" alt=""/></a>
               </div>
               <div class="content-writer">${list[i].title}</div>
               </div>`;
      }
      $('.news').append(html);
    },
    error:function(){
      alert('新闻响应消息完成但有问题');
    }
  })
});







