
$('.answer').hide();

$(function() {
  // タイトルをクリックすると
  $('.question').click(function () {
    // クリックした次の要素(コンテンツ)を開閉
 $(this).next('.answer').slideToggle();
 $(this).toggleClass("open");
  });
});

