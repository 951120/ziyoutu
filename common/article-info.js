var isExistContentContainerElement = document.getElementById("45276-content-container");
if (isExistContentContainerElement === null) {

    var warningElement = document.createElement("div");
    warningElement.className = "warning-header";
    warningElement.id = "45276-warning-header";
    document.getElementsByTagName('body')[0].appendChild(warningElement);

    var contentContainerElement = document.createElement("div");
    contentContainerElement.className = "content-container";
    contentContainerElement.id = "45276-content-container";
    document.getElementsByTagName('body')[0].appendChild(contentContainerElement);

    window.warningHeader = function (html) {
        $("#45276-warning-header").attr("style", "display: block !important");
        $("#45276-warning-header").html(html);
    };

    window.optimizer = function (callable) {

        callable = callable || function () { };

        $("#45276-content-container p").each(function (key, value) {
            var p = value.innerHTML.replace(/(<br[^>]*>)/ig, "");
            var b = p.replace(/(　| |&nbsp;)/ig, '');
            if (b.length < 1) {
                $(value).remove();
            }
        });

        $("#45276-content-container div").each(function (key, value) {
            var p = value.innerHTML.replace(/(<br[^>]*>)/ig, "");
            var b = p.replace(/( |&nbsp;)/ig, '');
            if (b.length < 1) {
                $(value).remove();
            }
        });

        $("#45276-content-container img").each(function (key, el) {
            if ($(this).attr('src').split("#").length <= 1) {
                var imageFrame = document.createElement("div");
                var textFrame = document.createElement("div");
                var imageShade = document.createElement("div");

                imageFrame.className = "lazy-load-image";
                imageFrame.setAttribute("data-rrc", el.src);
                imageShade.className = "shade";
                textFrame.className = "text-button";

                if (throttle_mode === "NO") {
                    textFrame.innerText = "正在初始化...";
                    setTimeout(function () {
                        var image = document.createElement('img');
                        image.src = imageFrame.getAttribute("data-rrc") + "#resource_request_clearance";
                        textFrame.innerText = "图片加载中...";
                        image.setAttribute("style", "display: none !important");
                        image.onload = function () {
                            imageFrame.removeAttribute("data-rrc");
                            image.removeAttribute("style");
                            $(imageFrame).attr("style", "min-height: auto !important; width: 100%; margin: 0 auto;");
                            $(imageFrame).find('.text-button').html("");
                        };
                        imageFrame.appendChild(image);
                    }, 500);
                } else {
                    textFrame.innerText = "点击加载图片";
                }

                imageFrame.appendChild(imageShade);
                imageFrame.appendChild(textFrame);
                $(el).before(imageFrame);
                el.parentNode.removeChild(el);
            }
        });

        $("#45276-content-container .lazy-load-image").on("click", function (el) {
            if (el.target.getAttribute("data-rrc") != null) {
                var image = document.createElement('img');
                image.src = el.target.getAttribute("data-rrc") + "#resource_request_clearance";
                image.setAttribute("style", "display: none !important");
                $(el.target).find('.text-button').html("图片加载中...");
                image.onload = function () {
                    el.target.removeAttribute("data-rrc");
                    el.target.style.margin = "0 auto";
                    el.target.style.height = $(image).height() + "px";
                    el.target.style.width = $(image).width() + "px";
                    image.removeAttribute("style");
                    $(el.target).find('.text-button').html("");
                };
                el.target.appendChild(image);
            }
        });

        $("body").on("click", "a", function (e) {
            e.preventDefault();
            if ($(this).attr("href").length > 0) {
                news.openActivity(this.href);
            }
        });

        setTimeout(function () {
            document.getElementsByTagName('html')[0].style.opacity = 1;
            news.showWebView();
        }, 100);

        callable();

    };

}