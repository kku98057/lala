function noIE() {
    if (navigator.userAgent.indexOf("Trident") > 0) {
      window.location.href = "template/redirect.html";
    }
  }
  noIE();
  