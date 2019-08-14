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
    $(this).find(".brand_hide").css("top", "0")

}).on('mouseout', 'li', function () {
    $(this).find(".brand_hide").css("top", "100px")
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

// hot items
for (let i = 0; i < 3; i++) {
    var storesameLi = $("#storesame").find("li");
    storesameLi.eq(i).mouseover(function () {
        var left = -1210 * i + "px";
        $(".storesame_bottom>ul").css("left", left)
        $("#storesame .target").removeClass("target")
        $(this).addClass("target")
    })
}

// 主题活动下面
$("#promotionBottom").on("mouseover", "section", function () {
    var src = $(this).find("img")[0].src;
    src = src.slice(-17, -16)
    // console.log(src)
    var imgSrc = `./images/index/${src}bank.jpg`;
    // console.log(imgSrc)
    $(this).children(".topline").css("width", "194px")
    $(this).children(".bottomline").css("width", "194px")
    $(this).children(".rightline").css("height", "65px")
    $(this).children(".leftline").css("height", "65px")
    $("#promotRight").children().children("img").attr("src", imgSrc);
}).on('mouseout', 'section', function () {
    $(this).children(".topline").css("width", 0)
    $(this).children(".bottomline").css("width", 0)
    $(this).children(".rightline").css("height", 0)
    $(this).children(".leftline").css("height", 0)
})

// 购物中心
function shopTop(shopLi, shoes_content) {
    $(`.${shopLi}`).on("mousedown", function () {
        var shopTop = $(`.${shoes_content}`).offset().top;
        var aaa =shopTop ;
        // console.log(aaa)
        
        document.documentElement.scrollTop = aaa;
        document.body.scrollTop = aaa;
    })
}
shopTop("shopLi1", "shoes_content1")
shopTop("shopLi2", "shoes_content2")
shopTop("shopLi3", "shoes_content3")
shopTop("shopLi4", "shoes_content4")
shopTop("shopLi5", "shoes_content5")
