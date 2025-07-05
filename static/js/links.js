// 导航链接数据
const navigationData = [
    {
        category: "社交 · 网络平台",
        links: [
            { name: "YouTube", url: "https://www.youtube.com" },
            { name: "谷歌笔记", url: "https://keep.google.com" },
            { name: "Gmail", url: "https://mail.google.com" },
            { name: "我的图床", url: "https://telegraph-image-a0m.pages.dev" },
            { name: "X平台", url: "https://x.com/home" },
            { name: "Instagram", url: "http://www.instagram.com" },
            { name: "谷歌翻译", url: "https://translate.google.com.hk/?hl=zh-CN&tab=wT&sl=auto&tl=zh-CN&op=translate" },
            { name: "百度天气", url: "https://weathernew.pae.baidu.com/weathernew/pc?query=%E6%B2%B3%E5%8C%97%E4%BF%9D%E5%AE%9A%E5%A4%A9%E6%B0%94&srcid=4982" },
            { name: "万年历", url: "https://wannianli.tianqi.com" }
        ]
    },
    {
        category: "AI · 人工智能",
        links: [
            { name: "Copilot", url: "https://copilot.microsoft.com" },
            { name: "Gemini", url: "https://gemini.google.com/app" },
            { name: "抖音", url: "https://www.douyin.com" },
            { name: "谷歌语音", url: "https://voice.google.com/u/0/messages" },
            { name: "123网盘", url: "https://www.123pan.com" },
            { name: "谷歌相册", url: "https://photos.google.com" },
            { name: "我的博客", url: "https://oatniq.blogspot.com" },
            { name: "GitHub", url: "https://github.com" },
            { name: "ChatGPT", url: "https://chat.openai.com" }
        ]
    },
    {
        category: "皮 · 网络硬盘",
        links: [
            { name: "谷歌网盘", url: "https://drive.google.com/drive/my-drive" },
            { name: "谷歌地球", url: "https://earth.google.com/web" },
            { name: "欧乐影院", url: "https://www.olevod.com" },
            { name: "哔哩哔哩", url: "https://www.bilibili.com" },
            { name: "爱奇艺", url: "https://www.iqiyi.com" },
            { name: "Genspark", url: "https://www.genspark.ai" },
            { name: "TikTok", url: "https://www.tiktok.com" },
            { name: "Grok", url: "https://grok.com" }
        ]
    },
    {
        category: "笑 · 生产工具",
        links: [
            { name: "小刀娱乐", url: "https://www.x6d.com" },
            { name: "简体繁体转换", url: "https://www.aies.cn" },
            { name: "Flickr", url: "https://www.flickr.com" },
            { name: "Websim", url: "https://websim.ai" },
            { name: "Cloudflare", url: "https://dash.cloudflare.com" },
            { name: "果核剥壳", url: "https://www.ghxi.com/category/all" },
            { name: "推特视频", url: "https://twittervid.com" }
        ]
    },
    {
        category: "嘻 · 导航应用",
        links: [
            { name: "百度地图", url: "https://map.baidu.com" },
            { name: "谷歌地图", url: "http://www.google.cn/maps" },
            { name: "高德地图", url: "https://www.amap.com" },
            { name: "二维码生成", url: "https://cli.im" },
            { name: "条形码生成", url: "http://www.qinms.com/webapp/barcode/index.aspx" }
        ]
    },
    {
        category: "嘻 · 网购平台",
        links: [
            { name: "电影天堂", url: "http://www.dytt8.net" },
            { name: "DD373", url: "https://www.dd373.com" },
            { name: "阿里巴巴", url: "http://www.1688.com" },
            { name: "淘宝", url: "https://www.taobao.com" },
            { name: "京东", url: "https://www.jd.com" },
            { name: "灰机Wiki", url: "https://www.huijiwiki.com/wiki" },
            { name: "国服市场中心", url: "https://www.ceve-market.org/index" }
        ]
    },
    {
        category: "预留分类一",
        links: [
            { name: "示例链接1", url: "#" },
            { name: "示例链接2", url: "#" },
            { name: "示例链接3", url: "#" }
        ]
    },
    {
        category: "预留分类二",
        links: [
            { name: "示例链接1", url: "#" },
            { name: "示例链接2", url: "#" },
            { name: "示例链接3", url: "#" }
        ]
    },
    {
        category: "预留分类三",
        links: [
            { name: "示例链接1", url: "#" },
            { name: "示例链接2", url: "#" },
            { name: "示例链接3", url: "#" }
        ]
    }
];

// 生成导航链接
function generateNavigation() {
    const navSection = document.getElementById('navSection');
    
    navigationData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'nav-category';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'category-title';
        titleDiv.textContent = category.category;
        
        const linkList = document.createElement('ul');
        linkList.className = 'link-list';
        
        category.links.forEach(link => {
            const linkItem = document.createElement('li');
            linkItem.className = 'link-item';
            
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.name;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            
            linkItem.appendChild(anchor);
            linkList.appendChild(linkItem);
        });
        
        categoryDiv.appendChild(titleDiv);
        categoryDiv.appendChild(linkList);
        navSection.appendChild(categoryDiv);
    });
}

// 页面加载完成后生成导航
document.addEventListener('DOMContentLoaded', generateNavigation); 