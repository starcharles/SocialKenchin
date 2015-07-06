var app = angular.module('mainModule', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

app.controller('mainCtrl', function($scope,$location,$anchorScroll) {
  posts = [{
    name: '山田',
    message: 'カレー食べたいからけんちん用意したよ！！（＾＿＾）',
    created: '7/4 11:05',
	css:'left'
  }, {
    name: '田中・モントレー',
    message: 'じゃあ俺、もやし持ってくわ！！',
    created: '7/4 12:05',
	css:'right'
  }, {
    name: '田中・モントレー',
    message: 'じゃあ俺、もやし持ってくわ！！',
    created: '7/4 12:05',
	css:'left'
  }, {
    name: 'チャーリー節子',
    message: 'ご飯いっぱい冷凍してたから持ってくわ',
    created: '7/4 13:05',
	css:'left'
  }];
$scope.posts=posts;

function getTime(){
	var d=new Date();
	var month=d.getMonth()+1;
	var day=d.getDate();
	var h=d.getHours();
	var m=d.getMinutes();
	if(m < 10){
		m='0'+m;

	}

 var time=month+'/'+day+' '+h+':'+m;
	return time;
}

$scope.addMessage=function(name,message){
	posts.push({
    name: name,
    message: message,
    created: getTime(),
	css:'right'
});
}

});
