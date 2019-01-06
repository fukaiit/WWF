function scrollTo(ele, speed) {
    if (!speed) speed = 500;
    if (!ele) {
        $("html,body").animate({ scrollTop: 0 }, speed);
    } else {
        if (ele.length > 0) $("html,body").animate({ scrollTop: $(ele).offset().top - 100 }, speed);
    }
    return false;
}