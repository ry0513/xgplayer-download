import Player from "xgplayer";
import {
  createDom,
  addClass,
  removeClass,
  toggleClass,
} from "xgplayer/src/utils/util";
import DownloadIcon from "xgplayer/src/skin/assets/download.svg";
import "./index.scss";
import sniffer from "xgplayer/src/utils/sniffer";
const t_download = function () {
  let player = this;
  let downloadList = [];
  if (player.config.downloadList) {
    downloadList = [].concat(player.config.downloadList);
  } else {
    return false;
  }

  let container = createDom("xg-download", " ", {}, "xgplayer-t_download");

  if (sniffer.device === "mobile") {
    player.config.playbackRateActive = "click";
  }

  let tmp = ["<ul>"];
  downloadList.forEach(({ title }, index) => {
    tmp.push(`<li index='${index}'>${title}</li>`);
  });
  tmp.push(
    `</ul><p><xg-icon class="but xgplayer-icon">${DownloadIcon}</xg-icon></p>`
  );

  let downloadDom = player.root.querySelector(".xgplayer-t_download");
  if (downloadDom) {
    downloadDom.innerHTML = tmp.join("");
    let cur = downloadDom.querySelector(".but");
    if (
      !player.config.playbackRateActive ||
      player.config.playbackRateActive === "hover"
    ) {
      cur.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addClass(player.root, "xgplayer-download-active");
        downloadDom.focus();
      });
    }
  } else {
    container.innerHTML = tmp.join("");
    let cur = container.querySelector(".but");
    if (
      !player.config.playbackRateActive ||
      player.config.playbackRateActive === "hover"
    ) {
      cur.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addClass(player.root, "xgplayer-download-active");
        container.focus();
      });
    }
    player.once("ready", () => {
      player.controls.appendChild(container);
    });
  }

  let ev = ["touchend", "click"];
  ev.forEach((item) => {
    container.addEventListener(
      item,
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        let li = e.target;
        if (li && li.tagName.toLocaleLowerCase() === "li") {
          // 以下为点击选项事件
          const {
            download = true,
            link = "",
            target = "_blank",
          } = downloadList[parseInt(li.getAttribute("index"))];
          const elink = document.createElement("a");
          elink.style.display = "none";
          if (download !== false) {
            elink.download = "";
          }
          elink.target = target;
          elink.href = link;
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href);
          document.body.removeChild(elink);
          // 以上为点击选项事件
          if (sniffer.device === "mobile") {
            removeClass(player.root, "xgplayer-download-active");
          }
        } else if (
          player.config.playbackRateActive === "click" &&
          li &&
          (li.tagName.toLocaleLowerCase() === "svg" ||
            li.tagName.toLocaleLowerCase() === "rect" ||
            li.tagName.toLocaleLowerCase() === "path" ||
            li.tagName.toLocaleLowerCase() === "xg-icon")
        ) {
          if (sniffer.device === "mobile") {
            toggleClass(player.root, "xgplayer-download-active");
          } else {
            addClass(player.root, "xgplayer-download-active");
          }
          container.focus();
        }
      },
      false
    );
  });
  container.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeClass(player.root, "xgplayer-download-active");
  });

  function onBlur() {
    removeClass(player.root, "xgplayer-download-active");
  }
  player.on("blur", onBlur);
};
Player.install("t_download", t_download);
