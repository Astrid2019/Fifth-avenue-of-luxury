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

$("#reducenum").on("click", function () {
    var numValue = $("#number").val();
    if (numValue > 1) {
        numValue--
    }
    $("#number").val(numValue);
})
$("#addnum").on("click", function () {
    var numValue = $("#number").val();
    if (numValue < 100) {
        numValue++
    }
    $("#number").val(numValue);
})

// 商品详情页面三个按钮点击切换

// var lis = $("#gd30btmi_swith>li");
// console.log(lis.length)

$(function () {
    for (let i = 0; i < 3; i++) {
        $("#gd30btmi_swith>li").eq(i).attr("p-from", i);

        $("#gd30btmi_swith>li").eq(i).on("click", function () {
            var index = $("#gd30btmi_swith li").eq(i).attr("p-from");
            // console.log(index)

            $("#goodsLiContent>li.goodsBlock").removeClass("goodsBlock")
            $("#goodsLiContent>li").eq(index).addClass("goodsBlock")

            $("#gd30btmi_swith>li._ed").removeClass("_ed");
            $("#gd30btmi_swith>li").eq(index).addClass("_ed")

        })
    }
})

$(function () {
    $("ul.tab_text_comment li").on("click", function () {
        name = $(this).attr("data");
        $(this).addClass("check");
        $(this).siblings().removeClass("check");

        $(name).css("display", "block");

        $(name).siblings().css("display", "none");

    })
})

// 详情页面点击小图切换大图
$("#smallImgList li").click(function () {
    var src = $(this).find("img").attr("src");
    src = src.slice(-5, -4)
    console.log(src)
    newSrc = `../images/details/prod_pic${src}.jpg`
    $("#bigImg").attr("src", newSrc)
    $("#rightImg").attr("src", newSrc)
    $("#floatImg").attr("src", newSrc)
})


// 放大镜
$(function () {
    var left = $('.img');
    var float = $('.img .float');
    var mask = $(".mask");
    var img = $('.img>img');
    var right = $('.rightBigImg')
    left.on("mousemove", function (evt) {

        var x = evt.offsetX;
        var y = evt.offsetY;
        // console.log(x)
        // console.log(y)
        x = x - float[0].offsetWidth / 2;
        y = y - float[0].offsetHeight / 2;
        // console.log(x)
        // console.log(y)
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }

        if (x > img[0].offsetWidth - float[0].offsetWidth) {
            x = img[0].offsetWidth - float[0].offsetWidth
        }

        if (y > img[0].offsetHeight - float[0].offsetHeight) {
            y = img[0].offsetHeight - float[0].offsetHeight
        }
        float.css({
            "left": `${x}px`,
            "top": `${y}px`
        })
        float.find("#floatImg").css({
            "left": `-${x+3}px`,
            "top": `-${y+3}px`
        })

        right.find("#rightImg").css({
            "left": `${-1.5 * x}px`,
            "top": `${-1.5 * y}px`
        })
    })

    left.on("mouseover", function () {
        float.css("display", "block")
        mask.css("display", "block")
        right.css("display", "block")
    }).on("mouseout", function () {
        float.css("display", "none")
        mask.css("display", "none")
        right.css("display", "none")
    })

    // left.on("mouseover" , function () {
    //     float.css("display","block")
    //     right.css("display","block")
    // })

    // left.on("mouseout" , function () {
    //     float.css("display","none")
    //     right.css("display","none")
    // })
})