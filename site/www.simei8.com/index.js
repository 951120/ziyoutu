try {
    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    var articleTitle = "";
    var articleDate = "";
    var articleContent = "";
    var imageRoot = document.location.href.replace(".htm", "");
    var articleTitle = $(".des h1").html();

    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    html += "<div class='title'>" + articleTitle + "</div>";
    html += "<div class='content'>" + articleContent + "</div>";
    bodyElement.innerHTML = html;

    // 取得页面所有图片
    $('.pp img').each(function () {
        var img = document.createElement('img');
        img.src = this.src;
        $('.content').append(img);
    });

    // 取得文章一共几个页面
    try {
        var pageResult = $(".page-show a:last-child").prev().html().split('..');
        if (pageResult.length < 2) {
            var pageMax = parseInt(pageResult[0]);
        } else {
            var pageMax = parseInt(pageResult[1]);
        }
    } catch (e) {
        var pageMax = 0;
    }

    for (var i = 2; i <= pageMax; i++) {
        var currentUrl = imageRoot + i + ".htm";
        $.get(currentUrl, {}, function (resp) {
            $(resp).find('img').each(function () {
                if (/\/pic[\d]+/ig.test(this.src)) {
                    var img = document.createElement('img');
                    img.src = this.src;
                    $('.content').append(img);
                }
            });
            optimizer();
        });
    }

    optimizer();

} catch (e) {
    news.onReceivedError();
}