$(function(){
        $('#change-color').on('click', function(){
                $('#target').css('color','blue');
        });

        $('#change-text').on('click',function(){
                $('#target').text('トゲナシトゲアリ');
        });

        $('#fade-out').on('click', function(){
                $('#target').fadeOut();
        });

        $('#fade-in').on('click', function(){
                $('#target').fadeIn();
        });
});