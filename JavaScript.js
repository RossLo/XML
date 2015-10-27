var main = function () {
    $('.love').click(function () {
        /*var currentNav = $('.active-box');
        var nextNav = $('.love');
        currentNav.removeClass('active-box');
        nextNav.fadeIn(600).addClass('active-box');*/
        
        var currentText = $('.active-text');
        var nextText = $('.lovesaying');
        nextText.removeClass('none-text');
        currentText.fadeOut(600).removeClass('active-text');
        nextText.fadeIn(600).addClass('active-text');

        var currentImg = $('.active-image');
        var nextImg = $('.loveimage');
        nextImg.removeClass('none-image');
        currentImg.fadeOut(600).removeClass('active-image');
        nextImg.fadeIn(600).addClass('active-image');
    });
    $('.encourage').click(function () {
       /* var currentNav = $('.active-box');
        var nextNav = $('.encourage');
        currentNav.fadeOut(600).removeClass('active-box');
        nextNav.fadeIn(600).addClass('active-box');*/

        var currentText = $('.active-text');
        var nextText = $('.encouragesaying');
        nextText.removeClass('none-text');
        currentText.fadeOut(600).removeClass('active-text');
        nextText.fadeIn(600).addClass('active-text');

        var currentImg = $('.active-image');
        var nextImg = $('.encourageimage');
        nextImg.removeClass('none-image');
        currentImg.fadeOut(600).removeClass('active-image');
        nextImg.fadeIn(600).addClass('active-image');
    });
    $('.celebrity').click(function () {
       /* var currentNav = $('.active-box');
        var nextNav = $('.celebrity');
        currentNav.fadeOut(600).removeClass('active-box');
        nextNav.fadeIn(600).addClass('active-box');*/

        var currentText = $('.active-text');
        var nextText = $('.celebritysaying');
        nextText.removeClass('none-text');
        currentText.fadeOut(600).removeClass('active-text');
        nextText.fadeIn(600).addClass('active-text');

        var currentImg = $('.active-image');
        var nextImg = $('.celebrityimage');
        nextImg.removeClass('none-image');
        currentImg.fadeOut(600).removeClass('active-image');
        nextImg.fadeIn(600).addClass('active-image');
    });
}
$(document).ready(main);
/*celebrity*/