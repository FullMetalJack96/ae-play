$(document).ready(function() {
    $('#cd-dropdown').dropdown();
    $('.wrapper').height($('.main').height());

    $(window).resize(function() {
        $('.wrapper').height($('.main').height());
    });

    $('.flat-button').click(function() {
        $(".main").clearQueue().css({
            transform: 'translate3d(0px, -' + $('.toggle').offset().top + 'px, 0px)'
        });
        $(window).scrollTop($('.toggle').offset().top);
        return false;
    });
})
$('.play-video1, .play-video2, .play-video3').on('click', function(e) {
    var height = $(".video-thumbnail1").height();
    var width = $(".video-thumbnail1").width();
    switch (this.dataset.count) {
        case "1":
            $('.video-placeholder1').append('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
            $(".video-thumbnail1").css('display', 'none');
            $(".play-video1").css('display', 'none')
            break;
        case "2":
            $(".video-thumbnail2").css('display', 'none')
            $(".play-video2").css('display', 'none')
            $('.video-placeholder2').append('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
            break;
        case "3":
            $(".video-thumbnail3").css('display', 'none')
            $(".play-video3").css('display', 'none')
            $(".video-placeholder3").append('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
            break;
    }
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");

});

var lastPosition = -100;
var scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

function loop() {
    if (lastPosition == window.pageYOffset) {
        scroll(loop);
        return false;
    } else lastPosition = window.pageYOffset;

    var transform = 'translate3d(0px, -' + lastPosition + 'px, 0px)';
    var smoothScoll = $(".main")[0];

    smoothScoll.style.webkitTransform = transform;
    smoothScoll.style.mozTransform = transform;
    smoothScoll.style.transform = transform;


    scroll(loop)
}
loop();
