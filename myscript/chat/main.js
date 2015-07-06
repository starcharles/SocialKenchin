var app = angular.module('mainModule', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

app.controller('mainCtrl', function($scope) {
  $scope.posts = [{
    name: '山田',
    message: 'カレー食べたいからけんちん用意したよ！！（＾＿＾）',
    created: '7/4 11:05'
  }, {
    name: '田中・モントレー',
    message: 'じゃあ俺、もやし持ってくわ！！',
    created: '7/4 12:05'
  }, {
    name: 'チャーリー節子',
    message: 'ご飯いっぱい冷凍してたから持ってくわ',
    created: '7/4 13:05'
  }];
});
