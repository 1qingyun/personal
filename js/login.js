
/**功能点1：为“提交注册信息”按钮绑定监听函数**/
$('#bt_login').click(function(){
  //收集用户在表单中的输入，可以使用“表单序列化”
  var data = $('#form_login').serialize();

  //使用$.ajax()发起异步请求
  $.ajax({
    type: 'POST',
    url: 'data/12_login.php',
    data: data,
    success: function(result){
      if(result.code===1){
        setTimeout(function(){
          location.href ='personal.html';
        },1000);
      }else {
        alert('登录失败，用户名或密码错误');
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });

});