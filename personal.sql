SET NAMES UTF8;
DROP DATABASE IF EXISTS personal;
CREATE DATABASE personal CHARSET=UTF8;
USE personal;

CREATE TABLE news(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(64),
    pic VARCHAR(64),
    title VARCHAR(64)
);

INSERT INTO news VALUES
(NULL,'http://news.qq.com/a/20170301/000914.htm','image/news-6.jpg','朴槿惠今将被诉：亲信门告一段落 或与铁窗相伴？'),
(NULL,'http://news.qq.com/a/20170417/003083.htm?qqcom_pgv_from=aio','image/news-7.jpg','地质勘探队在中国寻找地热资源被识破 原来是间谍');


CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    email VARCHAR(64)
);

INSERT INTO user VALUES
(NULL,'wqy','1871151141@qq.com'),
(NULL,'lh','981006016@qq.com');

/*管理员表*/
CREATE TABLE admin(
  aid INT PRIMARY KEY,
  aname VARCHAR(3),
  upwd VARCHAR(3)
);
INSERT INTO admin VALUES
(1,'wqy','123');