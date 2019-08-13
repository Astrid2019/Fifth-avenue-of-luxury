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
    $(this).css("color","#000")
    $("#scanQrcode").css("color","#999")

})
$("#scanQrcode").on("click", function () {
    $("#is_qcode_scan").css("display", "block")
    $(".is-hook").css("display", "none")
    $(this).css("color","#000")
    $("#account").css("color","#999")
})