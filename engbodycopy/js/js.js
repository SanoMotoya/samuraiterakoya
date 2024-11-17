$(function(){

  // スクロールエフェクト
  function fadeUpEffect(){
    $('.fadeUpEffect').each(function(){
      var elemPos = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
      }
    });
  }
  $(window).scroll(function(){
    fadeUpEffect();
  });

  // トレーナーのタブ
  $tabs = $('.tab');
  $('.tab').on('click', function(){
    $('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');
    const index = $tabs.index(this);
    $('.tab-content').removeClass('show').eq(index).addClass('show');
  })

// FAQのアコーディオン
$('.accordion__question').on('click', function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle(200);
});

  // スクロールに応じてヘッダーactiveクラスを付与
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.header').addClass('header--active');
    }else{
      $('.header').removeClass('header--active');
    }
  });

  // ページトップへ戻る
  var $pageTop = $('.page-top');
  $(window).scroll(function() {
    if($(this).scrollTop() > 300){
      $pageTop.fadeIn();
    }else{
      $pageTop.fadeOut();
    }
  });

  // Swiperの初期化
  const swiper = new Swiper('.swiper',{
    // Optinal parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
  });

  // スクロールイベント
  $(".price-list").scroll(function(){
    // scrollLeftメソッドの結果を表示
    if($(this).scrollLeft() > 20){
      $("price-list__scroll").fadeOut();
    }
  });

  // 背景色が伸びてテキストを表示

  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime(){

    // 背景色が伸びて出現
    $('.bgLRextendTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll >= elemPos - windowHeight){
        $(this).addClass('bgLRextend');
      }else{
        $(this).removeClass('bgLRextend');
      }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function(){
      var elemPos = $(this).offest().top-50;
      var scroll =$(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgappear');
      }else{
        $(this).removeClass('bgappear');
      }
    });
  }

  $(window).scroll(function(){
    BgFadeAnime();
  });

  $(window).on('load', function(){
    BgFadeAnime();
  });
}
);