// ignore
//@name:c动漫
//@version:1
//@webSite:https://www.agedm.vip/
//@remark:
//@order: D
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 0
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.agedm.vip/'
// 网站搜索
// https://www.bahaotv.com/vodsearch/-------------.html?wd=%E6%8E%8C%E5%BF%83
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search?query=@{searchWord}'
// 当前网站任意视频详情页
// https://www.bahaotv.com/details/2182.html
const videoDetailPage = '@{webSite}/detail/20220408'
// 当前网站任意视频播放页
// https://www.bahaotv.com/vodplay/2182-1-1.html
const videoPlayPage = '@{webSite}/play/20220408/1/1'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: 'aa',
        // https://www.bahaotv.com/vodshow/movie--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/catalog/all-all-all-all-all-time-@{page}-中国-all-all',
    }
   
    
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#