

$(function(){

    $('.header-sp__push').click(function(){

      $(this).next('.header-sp__menu').slideToggle();
      $(this).toggleClass("open");

    });
  });

  const header = document.querySelector('.header-sp__item');
  const list = document.querySelector('.header-sp__list');
  
  header.addEventListener('click', function() {
    list.classList.toggle('slide');
  });



  $(window).on('scroll', function() {
    // $(this).scrollTop();

    if(100 < $(this).scrollTop()) {
      $('.to-top').addClass('is-show');
    } else {
      $('.to-top').removeClass('is-show');
      
    }
  });

  // #page-topをクリックした際の設定
$('.to-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});



  $(".openbtn4").click(function () {
    $(this).toggleClass('active');
});

$(function() {
 
  // ボタンをクリックしたら発動
  $('.openbtn4').click(function() {
 
    // 連打で暴走しないようにstop()も設定
    $('.globalMenuSp').stop().fadeToggle();
 
  });
});





$(function () {
  // ハンバーガーボタンクリックで実行
  $(".openbtn4").click(function () {

  
    $("body").toggleClass("active");
  });
  // function
});


var mySwiper = new Swiper('.swiper-container', {
  loop: true, // ループ有効
  slidesPerView: 3, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    reverseDirection: true, // 逆方向有効化
  },
	
});

// 高さを均一にする関数
function equalizeColumnBoxHeights() {
  var columnBoxes = document.querySelectorAll('.column__box');
  var maxHeight = 0;

  // すべての column__box の高さをリセット
  columnBoxes.forEach(function(box) {
      box.style.height = 'auto';
  });

  // 最大の高さを見つける
  columnBoxes.forEach(function(box) {
      if (box.offsetHeight > maxHeight) {
          maxHeight = box.offsetHeight;
      }
  });

  // 最大の高さをすべての column__box に適用
  columnBoxes.forEach(function(box) {
      box.style.height = maxHeight + 'px';
  });
}

// DOMが読み込まれた後に関数を実行
window.addEventListener('load', equalizeColumnBoxHeights);

// ウィンドウのリサイズ時にも高さを再調整
window.addEventListener('resize', equalizeColumnBoxHeights);


// クリックしたときにアコーディオンを開閉する関数
document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName('accordion-toggle');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName('area__accordion-toggle');
  var content = acc[0].nextElementSibling; // 最初のアコーディオンの内容
  content.style.maxHeight = content.scrollHeight + 'px'; // 最初のアコーディオンを開く
  acc[0].classList.add('active'); // 最初のボタンに 'active' クラスを追加

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      // 他のすべてのアコーディオンを閉じる
      for (var j = 0; j < acc.length; j++) {
        if (this !== acc[j]) {
          acc[j].classList.remove('active');
          acc[j].nextElementSibling.style.maxHeight = null;
        }
      }
      // クリックされたアコーディオンをトグル
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});




