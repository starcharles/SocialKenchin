var app = angular.module('mainModule', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

app.controller('mainCtrl', function($scope) {

  $scope.categories = [{
    categoryId: '30',
    categoryName: '人気メニュー',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/30/'
  }, {
    categoryId: '31',
    categoryName: '定番の肉料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/31/'
  }, {
    categoryId: '32',
    categoryName: '定番の魚料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/32/'
  }, {
    categoryId: '33',
    categoryName: '卵料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/33/'
  }, {
    categoryId: '14',
    categoryName: 'ご飯もの',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/14/'
  }, {
    categoryId: '15',
    categoryName: 'パスタ',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/15/'
  }, {
    categoryId: '16',
    categoryName: '麺・粉物料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/16/'
  }, {
    categoryId: '17',
    categoryName: '汁物・スープ',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/17/'
  }, {
    categoryId: '23',
    categoryName: '鍋料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/23/'
  }, {
    categoryId: '18',
    categoryName: 'サラダ',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/18/'
  }, {
    categoryId: '22',
    categoryName: 'パン',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/22/'
  }, {
    categoryId: '21',
    categoryName: 'お菓子',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/21/'
  }, {
    categoryId: '10',
    categoryName: '肉',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/10/'
  }, {
    categoryId: '11',
    categoryName: '魚',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/11/'
  }, {
    categoryId: '12',
    categoryName: '野菜',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/12/'
  }, {
    categoryId: '34',
    categoryName: '果物',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/34/'
  }, {
    categoryId: '19',
    categoryName: 'ソース・調味料・ドレッシング',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/19/'
  }, {
    categoryId: '27',
    categoryName: '飲みもの',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/27/'
  }, {
    categoryId: '35',
    categoryName: '大豆・豆腐',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/35/'
  }, {
    categoryId: '13',
    categoryName: 'その他の食材',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/13/'
  }, {
    categoryId: '20',
    categoryName: 'お弁当',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/20/'
  }, {
    categoryId: '36',
    categoryName: '簡単料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/36/'
  }, {
    categoryId: '37',
    categoryName: '節約料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/37/'
  }, {
    categoryId: '38',
    categoryName: '今日の献立',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/38/'
  }, {
    categoryId: '39',
    categoryName: '健康料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/39/'
  }, {
    categoryId: '40',
    categoryName: '調理器具',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/40/'
  }, {
    categoryId: '26',
    categoryName: 'その他の目的・シーン',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/26/'
  }, {
    categoryId: '41',
    categoryName: '中華料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/41/'
  }, {
    categoryId: '42',
    categoryName: '韓国料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/42/'
  }, {
    categoryId: '43',
    categoryName: 'イタリア料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/43/'
  }, {
    categoryId: '44',
    categoryName: 'フランス料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/44/'
  }, {
    categoryId: '25',
    categoryName: '西洋料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/25/'
  }, {
    categoryId: '46',
    categoryName: 'エスニック料理・中南米',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/46/'
  }, {
    categoryId: '47',
    categoryName: '沖縄料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/47/'
  }, {
    categoryId: '48',
    categoryName: '日本各地の郷土料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/48/'
  }, {
    categoryId: '24',
    categoryName: '行事・イベント',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/24/'
  }, {
    categoryId: '49',
    categoryName: 'おせち料理',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/49/'
  }, {
    categoryId: '50',
    categoryName: 'クリスマス',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/50/'
  }, {
    categoryId: '51',
    categoryName: 'ひな祭り',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/51/'
  }, {
    categoryId: '52',
    categoryName: '春（3月～5月）',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/52/'
  }, {
    categoryId: '53',
    categoryName: '夏（6月～8月）',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/53/'
  }, {
    categoryId: '54',
    categoryName: '秋（9月～11月）',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/54/'
  }, {
    categoryId: '55',
    categoryName: '冬（12月～2月）',
    categoryUrl: 'http://recipe.rakuten.co.jp/category/55/'
  }];
});

app.controller('mainCtrl', function($scope) {
  // $scope.posts = [{
  //   name: '山田',
  //   message: 'カレー食べたいからけんちん用意したよ！！（＾＿＾）',
  //   created: '7/4 11:05'
  // }, {
  //   name: '田中・モントレー',
  //   message: 'じゃあ俺、もやし持ってくわ！！',
  //   created: '7/4 12:05'
  // }, {
  //   name: 'チャーリー節子',
  //   message: 'ご飯いっぱい冷凍してたから持ってくわ',
  //   created: '7/4 13:05'
  // }];
});
