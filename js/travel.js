/**
 * Created by Administrator on 2017/4/18.
 */
var imgs=[
  {'i':0,'img':'image/tr-1.jpg'},
  {'i':1,'img':'image/tr-2.jpg'},
  {'i':2,'img':'image/tr-3.jpg'}
];
var adv={
  LIWIDTH:0,
  $ulImgs:null,
  INTERVAL:500,
  WAIT:3000,
  timer:null,
  init(){
    this.LIWIDTH=parseFloat($(".t-l>#slider").css("width"));
    this.$ulImgs=$("#tupian");
    this.updateView();
    $("#tubiao").on("mouseover","li",(e)=>{
      var target=$("#tubiao>li").index(e.target);
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
    $("#tubiao").html(idxs)
      .children(`li:eq(${imgs[0].i})`)
      .addClass("hover");
  },
};
adv.init();


