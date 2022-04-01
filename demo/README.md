### 介绍

基于西瓜播放器（xgplayer）[文档](http://h5player.bytedance.com/)，下载改为列表选择

演示页面【待补充】

### 截图

![截图](https://github.com/rrcj123/My-Password-Book/blob/master/images/My-Password-Book.jpg)

### 使用

- HTML:

  ```html
  <div id="xgplayer"></div>
  ```

- Javascript:

  ```js
  // 使用downloadList替代download选项
  new Player({
    id: "xgplayer",
    url: "/video.mp4",
    videoInit: true,
    downloadList: [
      {
        title: "直接下载",
        link: "/video.mp4",
      },
      {
        title: "下载页面（新页面）",
        link: "/#/about",
        download: false,
      },
      {
        title: "下载页面（本页面）",
        link: "/#/about",
        download: false,
        outLink: false,
      },
      {
        title: "外链页面（新页面）",
        link: "http://www.baidu.com",
      },
      {
        title: "外链页面（本页面）",
        link: "http://www.baidu.com",
        outLink: false,
      },
    ],
  });
  ```

### 插件

西瓜播放器提供了较多的插件，插件分两类：一部分是自启动的，一部分是继承播放器核心类 xgplayer 的。原则上官方提供插件都是自启动的，封装的第三方类库都是继承方式。有些功能插件本身能提供降级方案建议使用自启动方式，否则建议使用继承方式。播放器支持自定义插件，更多内容查看 [插件](http://h5player.bytedance.com/plugins/)

对于自启动的插件使用方法如下：

```js
import Player from "xgplayer";
import "xgplayer-mp4";

let player = new Player({
  id: "video",
  url: "//abc.com/test.mp4",
});
```

<code>xgplayer-mp4</code>插件就是自启动的，它会自己加载 mp4 视频、解析 mp4 格式，实现自定义加载、缓冲、无缝切换等[详情](<(http://h5player.bytedance.com/plugins/#xgplayer-mp4)>)。对于不支持 [MSE](https://www.w3.org/TR/media-source/) 的设备自动降级。

### Dev

为了方便开发者调试，我们提供了示例视频资源。示例文件较大，可使用 git clone --recurse-submodules -j8 命令完整拉取源码和示例文件；如果你只对源码感兴趣可以使用 git clone 命令仅拉取源码部分。

```
$ git clone --recurse-submodules -j8 git@github.com:bytedance/xgplayer.git # 或者：git clone git@github.com:bytedance/xgplayer.git
$ cd xgplayer
$ npm install
$ npm run dev
```

访问 [http://localhost:9090/examples/index.html](http://localhost:9090/examples/index.html)

### 使用协议

欢迎使用西瓜播放器技术团队提供的开源音视频解决方案！请您仔细阅读以下条款。通过使用西瓜播放器，您表示同意接受以下所有条款。

1. 本开源项目中所有代码基于 [MIT](http://opensource.org/licenses/MIT) 许可协议，您默认遵守许可协议中约定的义务。
2. 您默认授权我们将您使用西瓜播放器所在业务的 Logo 放置在本官网展示。
   若您有任何问题，请联系我们。

### 加入我们

欢迎各位对前端音视频感兴趣的小伙伴加入我们的技术团队！

工作地点：北京、上海、深圳等

岗位类型：社招、校招、实习

发送简历：infra-fe@bytedance.com

邮件标题格式：【简历】+ 姓名 ＋ 前端开发工程师 + 来源：xgplayer github
