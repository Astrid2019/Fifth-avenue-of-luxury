// 导航 我的第五大道下拉
$("#myFive").mouseover(function () {
    $("#myFiveUl").css("display", "block");
    $("#myFive").addClass('five_boxShadow');
}).mouseout(function () {
    $("#myFiveUl").css("display", "none");
    $("#myFive").removeClass('five_boxShadow');
})

// 二维码下拉
$('#phoneDownload').on('mouseover', function () {
    $("#qr_code").css( "display", "block")
    $(this).addClass('five_boxShadow');
}).on('mouseout',function(){
    $("#qr_code").css("display", "none");
    $(this).removeClass('five_boxShadow');
})

// 购物车下拉
$(".shoppingCart").mouseover(function(){
    $(".cartNotice").css("display", "inline-block");
    $(".cart_em").css("display", "block");
})
$(".shoppingCart").mouseout(function () {
    $(".cartNotice").css("display", "none");
    $(".cart_em").css("display", "none");
   
})

// 商品分类下拉 右箭头小图标
// $("#rightArrow").





