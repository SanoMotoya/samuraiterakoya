$(function(){
    $(window).on('load scroll',(e) => {
        // キーが押された場合
        if(e.type === 'scroll'){
        console.log ('scrollイベントが発生しました');
        }
    });
});

$(window).on('load scroll',(e) => {
    if(e.type === 'load'){
    console.log ('loadイベントが発生しました');}
    });
