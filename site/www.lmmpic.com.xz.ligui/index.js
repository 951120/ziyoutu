try {
    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    var articleTitle = "";
    var articleDate = "";
    var articleContent = "";
    var imageRoot = document.location.href;
    var articleTitle = $(".entry-title").html();

    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    html += "<div class='title'>" + articleTitle + "</div>";
    html += "<div class='content'>" + articleContent + "</div>";
    bodyElement.innerHTML = html;

    // 取得页面所有图片
    $.get(imageRoot + '?viewall=true', {}, function (resp) {
        $(resp).find('.single-content img').each(function () {
            var img = document.createElement('img');
            img.src = this.src;
            img.setAttribute('referrerpolicy', 'no-referrer');
            $('#45276-content-container .content').append(img);
        });
        optimizer();
    });

} catch (e) {
    news.onReceivedError();
}