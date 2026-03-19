function isWeChat() {
  return /MicroMessenger/i.test(navigator.userAgent);
}

window.onload = function () {
  const wechatTip = document.getElementById("wechat-tip");
  const mainContent = document.getElementById("main-content");

  if (isWeChat()) {
    wechatTip.classList.remove("hidden");
  } else {
    mainContent.classList.remove("hidden");
  }
};