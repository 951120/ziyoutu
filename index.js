let fs = require('fs');
let path = require('path');
let domain = "https://raw.githubusercontent.com/951120/ziyoutu/master";

let result = {
    "status": true,
    "code": 200,
    "data": {
        "siteOptions": []
    }
};

/*
let jq = document.createElement('script');
jq.src = "https://serverless.gitee.io/image-bundle/common/jquery-3.3.1.min.js";
document.getElementsByTagName('body')[0].appendChild(jq);
 */

let installList = [
    ['10002', "www.lmmpic.com", true],
    ['10003', "www.jdlingyu.mobi", true],
    ['10001', "www.meitulu.com", true],
    ["10000", "www.ppmsg.com", true],
    ['11000', 'www.lmmpic.com.xz.beautyleg', true],
    ['11001', 'www.lmmpic.com.xz.iess', true],
    ['11002', 'www.lmmpic.com.xz.imiss', true],
    ['11003', 'www.lmmpic.com.xz.ligui', true],
    ['11004', 'www.lmmpic.com.xz.xiuren', true],
    ['11005', 'www.lmmpic.com.xz.youmi', true],
    ['11006', 'www.lmmpic.com.xz.tuwan', true],
    ['12000', 'www.lmmpic.com.fl.hsmz', true],
    ['12001', 'www.lmmpic.com.fl.hsmt', true],
    ['12002', 'www.lmmpic.com.fl.xgxz', true],
    ['12003', 'www.lmmpic.com.fl.ggxsw', true],
    ['12004', 'www.lmmpic.com.fl.qqz', true],
    ['12005', 'www.lmmpic.com.fl.tsz', true],
    ['12006', 'www.lmmpic.com.fl.qcmv', true],
];

let mediaCount = 0;
let tagCount = 0;

console.log("正在更新：");

for (let i in installList) {

    mediaCount++;
    let uniqueId = installList[i][0];
    let element = installList[i][1];
    let isShow = installList[i][2];

    let commonInfoCss = fs.statSync(path.join(__dirname, 'common', 'article-info.css'));
    let commonJqueryJs = fs.statSync(path.join(__dirname, 'common', 'jquery-3.3.1.min.js'));
    let commonInfoJs = fs.statSync(path.join(__dirname, 'common', 'article-info.js'));

    let siteIndexCss = fs.statSync(path.join(__dirname, 'site', element, 'index.css'));
    let siteIndexJs = fs.statSync(path.join(__dirname, 'site', element, 'index.js'));

    let resourceList = [{
        "fileType": "css",
        "href": domain + '/common/article-info.css?v=' + commonInfoCss.mtime.getTime()
    }, {
        "fileType": "css",
        "href": domain + '/site/' + element + '/index.css?v=' + siteIndexCss.mtime.getTime()
    }, {
        "fileType": "js",
        "href": domain + '/common/article-info.js?v=' + commonInfoJs.mtime.getTime()
    }, {
        "fileType": "js",
        "href": domain + '/common/jquery-3.3.1.min.js?v=' + commonJqueryJs.mtime.getTime()
    }, {
        "fileType": "js",
        "href": domain + '/site/' + element + '/index.js?v=' + siteIndexJs.mtime.getTime()
    }];

    let fileContent = fs.readFileSync(path.join(__dirname, 'site', element, 'config.json'));
    let fileJsonContent = JSON.parse(fileContent);

    console.log(fileJsonContent.siteName);

    // 配置主项目结构
    fileJsonContent.groupId = 0;
    fileJsonContent.uniqueId = parseInt(uniqueId);
    fileJsonContent.orderId = 0;
    fileJsonContent.isShow = isShow;

    // 配置子项目结构
    for (let x in fileJsonContent.tabList) {
        tagCount++;
        if (fileJsonContent.tabList[x].uniqueId === undefined) throw new Exception("检测到子栏目 ID 有空置，无法生成配置文件。");
        fileJsonContent.tabList[x].uniqueId = parseInt(uniqueId + "" + fileJsonContent.tabList[x].uniqueId);
    }

    fileJsonContent.siteResource.append = resourceList;
    result.data.siteOptions.push(fileJsonContent);
}

// 写入配置并生成版本信息
fs.writeFileSync(path.join(__dirname, 'dist', 'site-options.json'), JSON.stringify(result));

// 写入版本文件
let siteOptionsFileInfo = fs.statSync(path.join(__dirname, 'dist', 'site-options.json'));
fs.writeFileSync(path.join(__dirname, 'dist', 'site-version.json'), JSON.stringify({
    status: true,
    code: 200,
    data: {
        siteOptionsVersion: parseInt(siteOptionsFileInfo.mtime.getTime() / 1000),
        siteAppVersion: 1020003,
        siteAppUrl: "https://github.com/951120/ziyoutu/releases/download/1.2.2/release-1.2.2.apk",
        siteAppUpgradeDesc: "版本：1.2.3" +
        "增加 12 个新分类。"
    }
}));

console.log("共更新媒体 ", mediaCount, "个，标签 ", tagCount, "个。");