/**
 * Created by Administrator on 2017/4/12.
 */
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
/*����֤*/
uname.onblur=function(){
  if(this.validity.valueMissing){
    var msg='姓名不能为空';
    this.nextElementSibling.innerHTML=msg;
    this.nextElementSibling.className='help-block danger';
    this.setCustomValidity(msg);
  }else{
    this.setCustomValidity('');
  }
};
email.onblur=function(){
  if(this.validity.valueMissing){
    var msg='邮箱不能为空';
    this.nextElementSibling.innerHTML=msg;
    this.nextElementSibling.className='help-block danger';
    this.setCustomValidity(msg);
  }else{
    this.nextElementSibling.innerHTML='邮箱正确';
    this.nextElementSibling.className='help-block success';
    this.setCustomValidity('');
  }
};

//获取提交的信息,为button按钮绑定事件监听

$('#bt-submit').click(function(){
  //收集用户在表单中的输入，可以使用“表单序列化”
  var u = $('#uname').val();
  var e= $('#email').val();
  //使用$.ajax()发起异步请求
  $.ajax({
    type: 'post',
    url: 'data/user.php',
    data:{ uname:u,email:e},
    success: function(result){
      if(result.code===1){
        alert('提交成功！');
      }else {
        alert('提交失败！原因为：'+result.msg);
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
});
