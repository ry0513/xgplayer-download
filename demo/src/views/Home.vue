<template>
  <div class="xgplayer-container">
    <div id="xgplayer"></div>
  </div>
</template>

<script>
import Player from "xgplayer";
import "../xgplayer/download/index";
export default {
  name: "App",
  mounted() {
    new Player({
      id: "xgplayer",
      url: "video.mp4",
      videoInit: true,
      fluid: true,
      playbackRate: [0.5, 0.75, 1, 1.5, 2],
      downloadList: [
        {
          title: "直接下载",
          link: "video.mp4",
        },
        {
          title: "下载页面（新页面）",
          link: "#/download",
          download: false,
        },
        {
          title: "下载页面（本页面）",
          link: "#/download",
          download: false,
          target: "_self",
        },
        {
          title: "外链页面（新页面）",
          link: "http://www.baidu.com",
        },
        {
          title: "外链页面（本页面）",
          link: "http://www.baidu.com",
          target: "_self",
        },
      ],
    });
  },
};
</script>
<style lang="scss">
.xgplayer-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
