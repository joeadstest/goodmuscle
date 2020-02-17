$(".menu-icon").click(function () {
    if ($(".navbar").hasClass("active")) {
        //如果有.active這個類別就移除類別
        $(".navbar").removeClass("active");
        $(".navbar").slideUp();
        $(".menu-icon").find("i").removeClass("fas fa-times fa-2x");
        $(".menu-icon").find("i").addClass("fas fa-bars fa-2x");
    } else {
        //如果沒有.active這個類別就新增類別
        $(".navbar").addClass("active");
        $(".navbar").slideDown();
        $(".menu-icon").find("i").removeClass("fas fa-bars fa-2x");
        $(".menu-icon").find("i").addClass("fas fa-times fa-2x");
    }
}) // .menu-icon click end

$(window).resize(function () {

    if ($(window).outerWidth() >= 992) {
        $(".navbar").show();
        $(".hideimg").hide();
        $(".logo img").attr("src", "images/logo_80.png");
        
    } else {
        $(".navbar").hide();
        $(".hideimg").show();
        $(".logo img").attr("src", "images/logo_60.png");
        
    }
}) //window resize end

if ($(window).outerWidth() >= 992) {
    $(".logo img").attr("src", "images/logo_80.png");
} else {
    $(".logo img").attr("src", "images/logo_60.png");
}