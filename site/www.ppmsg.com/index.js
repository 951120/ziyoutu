try {
    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    var articleTitle = "";
    var articleDate = "";
    var articleContent = "";
    var imageRoot = document.location.href.replace(".html", "");
    var articleTitle = $(".lm .left").html();

    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    html += "<div class='title'>" + articleTitle + "</div>";
    html += "<div class='content'>" + articleContent + "</div>";
    bodyElement.innerHTML = html;

    // 取得页面所有图片
    $('.file img').each(function () {
        var img = document.createElement('img');
        img.src = this.src;
        $('.content').append(img);
    });

    // 取得文章一共几个页面
    var pageMax = parseInt($(".image strong:first-child").html());

    for (var i = 2; i <= pageMax; i++) {
        var currentUrl = imageRoot + "_" + i + ".html";
        $.get(currentUrl, {}, function (resp) {
            $(resp).find('.file img').each(function () {
                var img = document.createElement('img');
                img.src = this.src;
                $('.content').append(img);
            });
            optimizer();
        });
    }

    optimizer();

} catch (e) {
    news.onReceivedError();
}