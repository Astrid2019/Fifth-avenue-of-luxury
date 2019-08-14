// 登录页面划过图片显示
$(".qcode-hook").on("mouseover", function () {
    $(".qc-img").css({
        "display": "inline-block",
        "width": "165",
    })
}).on("mouseout", function () {
    $(".qc-img").css({
        "display": "none",
        "width": 0
    })
})

$("#account").on("click", function () {
    $("#is_qcode_scan").css("display", "none")
    $(".is-hook").css("display", "block")
    $(this).css("color", "#000")
    $("#scanQrcode").css("color", "#999")

})
$("#scanQrcode").on("click", function () {
    $("#is_qcode_scan").css("display", "block")
    $(".is-hook").css("display", "none")
    $(this).css("color", "#000")
    $("#account").css("color", "#999")
})

// 立即注册
$("#regisLabel").on("click", function () {
    isTrue = $("#register").hasClass("can-sub");
    console.log(isTrue)
    setTimeout(function () {
        if (!isTrue) {
        $(".confirmI").css("display", "none");
        $("#register").addClass("can-sub")
    } else {
        $(".confirmI").css("display", "inline-block")
        $("#register").removeClass("can-sub")
    }
    }, 200)
})


// 商品详情页面
// 加减

$("#reducenum").on("click",function(){
    var numValue = $("#number").val();
    if(numValue>1){
        numValue--
    }
    $("#number").val(numValue);
})
$("#addnum").on("click",function(){
    var numValue = $("#number").val();
    if(numValue<100){
        numValue++
    }
    $("#number").val(numValue);
})
