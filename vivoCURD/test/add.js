// const db = require('../utils/db.js')
const mongoClient = require('mongodb').MongoClient
// db.config('url', 'mongodb://127.0.0.1:27017/fifteen')

const data = [
{
 realName : 'X7',
 stageName: 'X7',
 birth    : '￥2799',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '20000',
 summary  : `X7&X7Plus搭载第七代A72架构CPU高通骁龙8976，八核1.8Ghz。性能强劲。配合4G超大运存和强大的Adreno510 GPU，带来更出色的流畅操作和游戏视频体验。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
{
 realName : 'Xshot',
 stageName: 'Xshot',
 birth    : '￥7299',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '50000',
 summary  : `采用3000mAh（典型容量）超高密度大容量电池，全新智慧引擎2.0，同时采用同步心跳、电量护卫等省电技术，优质续航让您的工作和生活尽享电力充沛。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
{
 realName : 'Xplay6',
 stageName: 'Xplay6',
 birth    : '￥4299',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '500000',
 summary  : `X7&X7Plus搭载第七代A72架构CPU高通骁龙8976，八核1.8Ghz。性能强劲。配合4G超大运存和强大的Adreno510 GPU，带来更出色的流畅操作和游戏视频体验。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
{
 realName : 'Xplay5旗舰版',
 stageName: 'Xplay5旗舰版',
 birth    : '￥4999',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '500700',
 summary  : `前置500W高清摄像头， 全新升级知性美颜及人脸识别技术，量身定制美颜。自拍屏幕补光，就算再暗，美丽不夜。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
{
 realName : 'Xpaly3S',
 stageName: 'Xpaly3S',
 birth    : '￥2298',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '700000',
 summary  : `X7&X7Plus搭载第七代A72架构CPU高通骁龙8976，八核1.8Ghz。性能强劲。配合4G超大运存和强大的Adreno510 GPU，带来更出色的流畅操作和游戏视频体验。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
{
 realName : 'Y9星空灰版',
 stageName: 'Y9星空灰版',
 birth    : '￥3799',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '300000',
 summary  : `分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'X7Plus',
 stageName: 'X7Plus',
 birth    : '￥1799',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '500000',
 summary  : `后置1300W高清摄像头，拍照同时合成4幅画面，5000W像素画质，更多画面细节呈现，让你的风景更清晰。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'Y51电信高配版',
 stageName: 'Y51电信高配版',
 birth    : '￥1299',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '500000',
 summary  : `3GB运存搭配，高速应对多任务处理，带来更出色的流畅操作；同时高通MSM8937八核64位
处理器，强大的计算和图形处理能力，做到持续流畅，告别卡顿。32G大内存，支持128GB内存
扩展，海量内存空间，不需要经常清理内存，任性存储。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'Xpaly3S',
 stageName: 'Xpaly3S',
 birth    : '￥4299',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '900000',
 summary  : `X7&X7Plus搭载第七代A72架构CPU高通骁龙8976，八核1.8Ghz。性能强劲。配合4G超大运存和强大的Adreno510 GPU，带来更出色的流畅操作和游戏视频体验。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'Y55',
 stageName: 'Y55',
 birth    : '￥1099',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '5000',
 summary  : `3GB运存搭配，高速应对多任务处理，带来更出色的流畅操作；同时高通MSM8937八核64位
处理器，强大的计算和图形处理能力，做到持续流畅，告别卡顿。32G大内存，支持128GB内存
扩展，海量内存空间，不需要经常清理内存，任性存储。
分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'Y51移动定制版',
 stageName: 'Y51移动定制版',
 birth    : '￥1379',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '500000',
 summary  : `5.5英寸高清大屏，色彩饱和，颜色鲜艳，专属个人的掌上高清影院享受。
细腻精致的圆润背部触感，7.5 mm的超薄厚度和微弧过渡机身，简约设计，爱不释手。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'X9星空灰版',
 stageName: 'X9星空灰版',
 birth    : '￥2259',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '100000',
 summary  : `X7&X7Plus搭载第七代A72架构CPU高通骁龙8976，八核1.8Ghz。性能强劲。配合4G超大运存和强大的Adreno510 GPU，带来更出色的流畅操作和游戏视频体验。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 },
 {
 realName : 'Y67',
 stageName: 'Y67',
 birth    : '￥2267',
 poster   : 'http://h.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b192ca2bd8b44aed4d43b6b6d275ec64/279759ee3d6d55fb8571bf476f224f4a20a4dd18.jpg',
 works    : '200000',
 summary  : `5.5英寸高清大屏，色彩饱和，颜色鲜艳，专属个人的掌上高清影院享受。
细腻精致的圆润背部触感，7.5 mm的超薄厚度和微弧过渡机身，简约设计，爱不释手。
     分屏多任务全面升级，视频或游戏时来微信只需轻轻一点，立刻分屏回复消息，生活工作两不误。更加入主动分屏，在你看视频、电子书甚至玩游戏等情况下，只需要三指下滑，即可分屏主动开启微信、QQ等即时通讯应用。`
 }
]



// 1.打电话
mongoClient.connect('mongodb://127.0.0.1:27017/fifteen',function(err,db){
    // 2.得到集合对象
    const stars = db.collection('stars')
    // 3.操作
    stars.insert(data, (err, result) => {
        console.log(result.insertedCount) //7

        // 4挂电话
        db.close()
    })
})