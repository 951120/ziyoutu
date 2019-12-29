var lst = [
    ["时政", "http://politics.people.com.cn", "http://politics.people.com.cn/index${page}.html"],
    ["国际", "http://world.people.com.cn", "http://world.people.com.cn/index${page}.html"],
    ["财经", "http://finance.people.com.cn", "http://finance.people.com.cn/index${page}.html"],
    ["台湾", "http://tw.people.com.cn", "http://tw.people.com.cn/index${page}.html"],
    ["军事", "http://military.people.com.cn", "http://military.people.com.cn/index${page}.html"],
    ["观点", "http://opinion.people.com.cn", "http://opinion.people.com.cn/index${page}.html"],
    ["领导", "http://leaders.people.com.cn", "http://leaders.people.com.cn/index${page}.html"],
    ["理论", "http://theory.people.com.cn", "http://theory.people.com.cn/index${page}.html"],
    ["法治", "http://legal.people.com.cn", "http://legal.people.com.cn/index${page}.html"],
    ["社会", "http://society.people.com.cn", "http://society.people.com.cn/index${page}.html"],
    ["产经", "http://industry.people.com.cn", "http://industry.people.com.cn/index${page}.html"],
    ["体育", "http://sports.people.com.cn", "http://sports.people.com.cn/index${page}.html"],
    ["房产", "http://house.people.com.cn", "http://house.people.com.cn/index${page}.html"],
    ["科技", "http://scitech.people.com.cn", "http://scitech.people.com.cn/index${page}.html"],
    ["反腐", "http://fanfu.people.com.cn", "http://fanfu.people.com.cn/index${page}.html"],
    ["港澳", "http://hm.people.com.cn", "http://hm.people.com.cn/index${page}.html"],
    ["传媒", "http://media.people.com.cn", "http://media.people.com.cn/index${page}.html"],
    ["读书", "http://book.people.com.cn", "http://book.people.com.cn/index${page}.html"],
    ["扶贫", "http://rmfp.people.com.cn", "http://rmfp.people.com.cn/index${page}.html"],
    ["央企", "http://ccnews.people.com.cn", "http://ccnews.people.com.cn/index${page}.html"],
    ["通信", "http://tc.people.com.cn", "http://tc.people.com.cn/index${page}.html"],
    ["家电", "http://homea.people.com.cn", "http://homea.people.com.cn/index${page}.html"],
    ["IT", "http://it.people.com.cn", "http://it.people.com.cn/index${page}.html"],
    ["创投", "http://capital.people.com.cn", "http://capital.people.com.cn/index${page}.html"],
    ["舆情", "http://yuqing.people.com.cn", "http://yuqing.people.com.cn/index${page}.html"],
    ["慕课", "http://mooc.people.com.cn", "http://mooc.people.com.cn/index${page}.html"],
    ["区块链", "http://blockchain.people.com.cn", "http://blockchain.people.com.cn/index${page}.html"],
    ["一带一路", "http://ydyl.people.com.cn", "http://ydyl.people.com.cn/index${page}.html"],
    ["金融", "http://money.people.com.cn", "http://money.people.com.cn/index${page}.html"],
    ["股票", "http://money.people.com.cn/stock", "http://money.people.com.cn/stock/index${page}.html"],
    ["能源", "http://energy.people.com.cn", "http://energy.people.com.cn/index${page}.html"],
    ["公益", "http://gongyi.people.com.cn", "http://gongyi.people.com.cn/index${page}.html"],
    ["环保", "http://env.people.com.cn", "http://env.people.com.cn/index${page}.html"],
    ["AI", "http://ai.people.com.cn", "http://ai.people.com.cn/index${page}.html"],
    ["家居", "http://jiaju.people.com.cn", "http://jiaju.people.com.cn/index${page}.html"],
    ["灯饰", "http://dengshi.people.com.cn", "http://dengshi.people.com.cn/index${page}.html"],
    ["食品", "http://shipin.people.com.cn", "http://shipin.people.com.cn/index${page}.html"],
    ["酒业", "http://jiu.people.cn", "http://jiu.people.cn/index${page}.html"],
    ["时尚", "http://fashion.people.com.cn", "http://fashion.people.com.cn/index${page}.html"],
    ["娱乐", "http://ent.people.com.cn", "http://ent.people.com.cn/index${page}.html"],
    ["彩票", "http://caipiao.people.com.cn", "http://caipiao.people.com.cn/index${page}.html"],
    ["旅游", "http://travel.people.com.cn", "http://travel.people.com.cn/index${page}.html"],
    ["美丽乡村", "http://country.people.com.cn", "http://country.people.com.cn/index${page}.html"],
    ["知识产权", "http://ip.people.com.cn", "http://ip.people.com.cn/index${page}.html"],
];

var $tmp = {
    "uniqueId": 1,
    "isShow": true,
    "name": "首页",
    "defaultPage": 1,
    "pageLoadType": "ID_ORDER",
    "articleDomain": "http://politics.people.com.cn/",
    "useHomePage": true,
    "charset": "GBK",
    "homePage": {
        "request": {
            "url": "http://politics.people.com.cn/index.html",
            "method": "GET"
        },
        "response": {
            "responseType": "json",
            "dataAddress": "data",
            "dataType": "REGEX",
            
            "nodeContainer": "<div class=\" *hdNews clearfix\">(.*?)</span></h6> *</div>",
            "nodeUrlPrefix": "http://politics.people.com.cn${nodeUrl}",
            "nodeUrl": "href='(.*?)'",
            "nodeTitle": "<strong><a[^>]+>(.*?)</a></strong>|<h5><a[^>]+>(.*?)</a></h5>",
            "nodeAuthor": "\" */><a.*?target=\"_blank\">(.*?)</a>\\|<a",
            "nodeImage": ""
        }
    },
    "otherPage": {
        "request": {
            "url": "http://politics.people.com.cn/index${page}.html",
            "method": "GET"
        },
        "response": {
            "responseType": "json",
            "dataAddress": "data",
            "dataType": "REGEX",
            
            "nodeContainer": "<div class=\" *hdNews clearfix\">(.*?)</span></h6> *</div>|<div class=\" *hdNews clearfix\">(.*?)</p> *</div>",
            "nodeUrlPrefix": "http://politics.people.com.cn${nodeUrl}",
            "nodeUrl": "href='(.*?)'",
            "nodeTitle": "<strong><a[^>]+>(.*?)</a></strong>|<h5><a[^>]+>(.*?)</a></h5>",
            "nodeAuthor": "\" */><a.*?target=\"_blank\">(.*?)</a>\\|<a",
            "nodeImage": ""
        }
    }
};

var $result = [];
var iii = 1;
for (var x in lst) {
    var a = JSON.parse(JSON.stringify($tmp));
    a.uniqueId = iii;
    a.name = lst[x][0];
    a.homePage.request.url = lst[x][1];
    a.otherPage.request.url = lst[x][2];
    a.otherPage.response.nodeUrlPrefix = lst[x][1] + "${nodeUrl}";
    $result.push(a);
    iii++;
}

console.log(JSON.stringify($result));