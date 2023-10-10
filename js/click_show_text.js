var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("gwf","wh", "xm", "zzp", "lsy", "lcl", "wb", "lzy(yangyang)", "tyh", "hj", "xyy", "xy", "syy","hrh","lem","pwj","pz","gyl","lyc","dmy","zzw","zsj","dwh","arun","gyn","xjh","hzq","lzy","njc","xys","grl","xsl","mss","zj","xjt","yxb","yjh","zyq","wsy","mian","zyb","tyx","xsy","zjl","cjj","dyt","lwg","ljy");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}