try {
    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    var articleTitle = "";
    var articleDate = "";
    var articleContent = "";
    var imageRoot = document.location.href.replace(".html", "");
    var pageMax = parseInt($('#pages a:last-child').prev().html());
    var articleTitle = $(".weizhi h1").html();

    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    html += "<div class='title'>" + articleTitle + "</div>";
    html += "<div class='content'>" + articleContent + "</div>";
    bodyElement.innerHTML = html;

    // 取得页面所有图片
    $('.content_img').each(function () {
        var img = document.createElement('img');
        img.src = this.src;
        $('#45276-content-container .content').append(img);
    });

    for (var i = 2; i <= pageMax; i++) {
        var currentUrl = imageRoot + "_" + i + ".html";
        $.get(currentUrl, {}, function (resp) {
            $(resp).find('.content_img').each(function () {
                var img = document.createElement('img');
                img.src = this.src;
                $('#45276-content-container .content').append(img);
            });
            optimizer();
        });
    }

    optimizer();

} catch (e) {
    news.onReceivedError();
}