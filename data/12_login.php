<?php

header('Content-Type:application/json;charset=UTF-8');

@$n=$_REQUEST['aname'] or die('{"code":3,"msg":"aname required"}');
@$u=$_REQUEST['upwd'] or die('{"code":4,"msg":"upwd required"}');

require('init.php');
$sql="SELECT * FROM admin WHERE aname='$n' AND upwd='$u'";
$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_assoc($result);
if($row===null){
	$output=['code'=>2,'msg'=>'用户名或密码错误'];
}else{
	$output=['code'=>1,'aname'=>$n,'aid'=>$row['aid']];
}

echo json_encode($output);