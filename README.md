### 介绍

基于[西瓜播放器(xgplayer)](http://h5player.bytedance.com/)，下载改为列表选择，

### 局限性

由于下载方式为创建 A 标签下载，类似于

```html
<a href="./1.mp4" download>下载按钮</a>
```

故仅支持同域下载，仅支持 download 属性生效的浏览器（现代浏览器），跨域会直接打开链接

去[caniuse](https://caniuse.com/?search=download)查看兼容性

可以自行修改下载方式支持跨域下载

### 截图

<img src="dist/20220331172607.png" alt="formSelects" width="520">

### 演示

- 体验地址

  体验地址[跳转](https://ry0513.github.io/xgplayer-download)

- 运行 demo

  ```
  1. cd demo
  2. npm install
  3. npm run serve
  ```

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

### 参数说明

|   属性   |  类型   | 必须 | 默认值  |      说明       |
| :------: | :-----: | :--: | :-----: | :-------------: |
|  title   | String  |  是  |   无    |   展示的名字    |
|   link   | String  |  是  |   无    |      链接       |
| download | Boolean |  否  |  true   |  是否开启下载   |
|  target  | String  |  否  | \_blank | A 标签的 target |

注：同域跳转页面，不下载文件需设置 download 为 false, 跨域则设置什么都为跳转[原因](#局限性)

注：target 仅在跨域或 download 为 false 生效
