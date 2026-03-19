function isWeChat() {
  const ua = navigator.userAgent;
  return ua.includes("MicroMessenger");
}

window.onload = function () {
  console.log("✅ JS loaded");
  console.log("UA:", navigator.userAgent);

  const wechatTip = document.getElementById("wechat-tip");
  const mainContent = document.getElementById("main-content");

  if (isWeChat()) {
    console.log("👉 当前是微信环境");
    wechatTip.style.display = "flex";
  } else {
    console.log("👉 普通浏览器");
    mainContent.style.display = "block";

    // 🚀 可选：自动跳转下载
    // window.location.href = "https://your-download-link.com";
  }
};