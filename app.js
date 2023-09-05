// 背景色を青色、高さを100pxに変更
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// アニメーションを追加 上から下へスライド
// $(function(){
//   $('.box1').slideDown();
// });

// アニメーションを追加 下から上へスライド
// $(function(){
//   $('.box1').slideUp();
// });

// 要素を表示する
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

//要素を非表示にする
// $(function(){
//   $('.box1').hide();
// });

// 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更
// 変更後、下から上へスライド
$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});