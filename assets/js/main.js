$(function() {
    //数据初始化
    init();

    $("ul.nav-first-level > li:first").addClass("active");
    $("ul.nav-first-level > li .nav-second-level:not(:first)").hide();

    $("ul.nav-first-level li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).siblings().find(".nav-second-level").hide();
        $(this).find(".nav-second-level").show("normal");
    });

    $("ul.nav-first-level > li").on("click", function() {
        var index = $(this).prevAll().length;
        scrollTo($(".content-first-level > li:eq(" + index + ")"));
        return false;
    });

    $("ul.nav-first-level > li > ul.nav-second-level > li").on("click", function() {
        var first_index = $(this).parent().parent().prevAll().length;
        var second_index = $(this).prevAll().length;
        scrollTo($(".content-first-level > li:eq(" + first_index + ") > ul.content-second-level li:eq(" + second_index + ")"));
        return false;
    });
});