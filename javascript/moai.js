$('html').keydown(function(e){
    switch(e.which){
        case 76: // Key[→]
        $('.character').animate({left: '+=35px'},100);
        $('.character').css('transform', 'scale(-1, 1)');
        break;

        case 74: // Key[←]
        $('.character').animate({left: '-=35px'},100);
        $('.character').css('transform', 'scale(1, 1)');
        break;

        case 80: // Key[↑]
        $('.character').animate({top: '-=200px'},230).animate({top: '+=200px'},230);
        break;

        case 40: // Key[↓]
        $('.character').animate({top: '+=10px'},100);
        break;
    }
});