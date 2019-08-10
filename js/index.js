// 导航 我的第五大道下拉
$("#myFive").mouseover(function () {
    $("#myFiveUl").css("display", "block");
    $(this).addClass('five_boxShadow');
}).mouseout(function () {
    $("#myFiveUl").css("display", "none");
    $(this).removeClass('five_boxShadow');
})

// 二维码下拉
$('#phoneDownload').on('mouseover', function () {
    $("#qr_code").css("display", "block")
    $(this).addClass('five_boxShadow');
}).on('mouseout', function () {
    $("#qr_code").css("display", "none");
    $(this).removeClass('five_boxShadow');
})

// 购物车下拉
$(".shoppingCart").mouseover(function () {
    $(".cartNotice").css("display", "inline-block");
    $(".cart_em").css("display", "block");
})
$(".shoppingCart").mouseout(function () {
    $(".cartNotice").css("display", "none");
    $(".cart_em").css("display", "none");

})

// 商品分类下拉 商品分类下拉遮罩层显示
$("#classify").mouseover(function () {
    $(".drop_down").css("display", "block");
    $("#masking").addClass("masking")
}).mouseout(function () {
    $(".drop_down").css("display", "none");
    $("#masking").removeClass("masking")
})
$('#rightArrow').on('mouseover', 'li', function () {
    $(this).css({
        opacity: 1,
        color: "#c8a985"
    })
    $(this).children("section").css("display", "block")
    $(this).children().children().children("i").css("display", "inline")

}).on('mouseout', 'li', function () {
    $(this).css({
        opacity: .85,
        color: "#000"
    })
    $(this).children("section").css("display", "none")
    $(this).children().children().children("i").css("display", "none")
})

// 品牌旗舰
$('#brandShip').on('mouseover', 'li', function () {
    // $(this).children(".brand_hide").css("top","0")
    $(this).children().children().children(".brand_hide").css("top", "0")

}).on('mouseout', 'li', function () {
    $(this).children().children().children(".brand_hide").css("top", "100px")
})

// 热门旗舰店
$("#hotStore").on("mouseover", "section", function () {
    $(this).children(".hotmiddle").css("opacity", "1")
    $(this).children(".topline").css("width", "166px")
    $(this).children(".bottomline").css("width", "166px")
    $(this).children(".rightline").css("height", "85px")
    $(this).children(".leftline").css("height", "85px")
}).on('mouseout', 'section', function () {
    $(this).children(".hotmiddle").css("opacity", "0")
    $(this).children(".topline").css("width", 0)
    $(this).children(".bottomline").css("width", 0)
    $(this).children(".rightline").css("height", 0)
    $(this).children(".leftline").css("height", 0)
})








