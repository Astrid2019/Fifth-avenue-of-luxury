// 导航 我的第五大道下拉

$("#myFive").mouseover(function () {
    $("#myFiveUl").css("display", "block");
    $("#myFive").addClass('five_boxShadow');
})
$("#myFive").mouseout(function () {
    $("#myFiveUl").css("display", "none");
    $("#myFive").removeClass('five_boxShadow');
})

// 二维码下拉
$("#phoneDownload").mouseover(function(){
    $("#qr_code").css("display", "block");
    $("#phoneDownload").addClass('five_boxShadow');
})
$("#phoneDownload").mouseout(function () {
    $("#qr_code").css("display", "none");
    $("#phoneDownload").removeClass('five_boxShadow');
})




