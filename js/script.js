$(function () {
    // scroll
    $('a[href^="#"]').click(function () {
        let speed = 700;
        let type = "swing";
        let href = $(this).attr("href");
        let target = $(href == "#index" ? "html" : href);
        let position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, type);
        return false;
    });
    // toTopbutton
    const toTopButton = $(".js-to-top");
    const scrollHeight = 300;
    toTopButton.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            toTopButton.fadeIn();
        } else {
            toTopButton.fadeOut();
        }
    });
    toTopButton.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
