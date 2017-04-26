<?php
/**用户提交信息
*请求参数：uname:用户名 email:邮箱
输出结果:{"code":1,"uid":3,"uname":"wqy"}
或{"code":500}
**/
header('Content-Type: application/json;charset=UTF-8');

@$n=$_REQUEST['uname'] or die('uname required');

@$e=$_REQUEST['email'] or die('email required');
require('init.php');

$output['uname']=$n;
$sql="INSERT INTO user (uid,uname,email) VALUES(NULL,'$n','$e')";

$result=mysqli_query($conn,$sql);

if($result){
   $output['code']=1;
   $output['uid']=intval(mysqli_insert_id($conn));
}else{
    $output['code']=500;
}

echo json_encode($output);


