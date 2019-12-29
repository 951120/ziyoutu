try {
    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    var articleTitle = "";
    var articleDate = "";
    var articleContent = "";
    var imageRoot = document.location.href.replace(".html", "");
    var articleTitle = $(".entry-title").html();

    var bodyElement = document.getElementById("45276-content-container");
    var html = "";
    html += "<div class='title'>" + articleTitle + "</div>";
    html += "<div class='content'>" + articleContent + "</div>";
    bodyElement.innerHTML = html;

    // 取得页面所有图片
    $('#content-innerText img').each(function () {
        var img = document.createElement('img');
        img.src = this.src;
        $('#45276-content-container .content').append(img);
    });

    optimizer();
} catch (e) {
    news.onReceivedError();
}