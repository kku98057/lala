function noIE(msg) {
  if (navigator.userAgent.indexOf("Trident") > 0) {
    location.href = "microsoft-edge:" + location.href;
    alert(msg);
    setTimeout(close);
  }
}
