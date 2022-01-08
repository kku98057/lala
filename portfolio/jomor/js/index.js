const main = document.querySelector(".main");
const mainHeight = main.getBoundingClientRect();
const video = document.querySelector(".videoplayer");
const videoHeight = video.clientHeight;
const mainImgs = document.querySelectorAll(".main__contents-imgwrap");
const mainTexts = document.querySelectorAll(".main__contents-text");
document.addEventListener("scroll", () => {
  const windowScroll = window.scrollY;
  // 이미지 무빙
  mainImgs.forEach((imgs) => {
    imgs.style.transform = `translate3d(0,-${windowScroll / 2}px, 0) scale(1)`;
    imgs.classList.remove("active");
  });

  //   텍스트무빙 - main
  mainTexts.forEach((text) => {
    text.classList.remove("anitext1", "anitext2", "anitext3", "anitext4");
  });
  const move1 = document.querySelectorAll(".move1");
  const move2 = document.querySelectorAll(".move2");
  const high = document.querySelector(".main__high");
  const highHeight = high.getBoundingClientRect().height;
  const end = document.querySelector(".main__end");
  const endHeight = end.getBoundingClientRect().top;
  if (windowScroll > highHeight) {
    move1.forEach((mov1) => {
      mov1.style.transform = `translate3d(${
        windowScroll / 10
      }px,0px,0px) scale(1)`;
    });
    move2.forEach((mov2) => {
      mov2.style.transform = `translate3d(${
        -windowScroll / 10
      }px,0,0) scale(1)`;
    });
  } else if (windowScroll == 0) {
    move1.forEach((mov1) => {
      mov1.style.transform = `translate3d(0,0,0) scale(1)`;
    });
    move2.forEach((mov2) => {
      mov2.style.transform = `translate3d(${
        -windowScroll / 10
      }px,0,0) scale(1)`;
    });
  }

  // 비디오 재생
  if (windowScroll >= 10) {
    video.play();
  } else {
  }

  //   bubble
  const content1 = document.querySelector(".content1");
  const conetent1Height = content1.getBoundingClientRect().height;
  const bubbles = document.querySelector(".content1__bubblewrap");
  if (windowScroll > conetent1Height) {
    bubbles.style.transform = `translate3d(${
      conetent1Height / windowScroll
    }%,0,0)`;
  } else {
    bubbles.style.transform = `translate3d(${
      conetent1Height / windowScroll
    }%,0,0)`;
  }

  //   텍스트무빙 - content1

  const contentMove11 = document.querySelectorAll(".content1__move1-1");
  const contentMove12 = document.querySelector(".content1__move1-2");

  const contentMove21 = document.querySelectorAll(".content1__move2-1");
  const contentMove22 = document.querySelector(".content1__move2-2");

  const contentMove11Height = contentMove11[0].getBoundingClientRect().top;
  const contentMove21Height = contentMove21[0].getBoundingClientRect().top;

  if (windowScroll > contentMove11Height) {
    ///  보다 클때
    contentMove11.forEach((conmov1) => {
      conmov1.style.transform = `translate3d(${
        (contentMove11Height / windowScroll) * 300
      }px, 0, 0)`;
    });
    contentMove12.style.transform = `translate3d(${
      -(contentMove11Height / windowScroll) * 300
    }px, 0, 0)`;
  } else {
  }

  if (windowScroll > contentMove21Height * 2) {
    ///  보다 클때
    contentMove21.forEach((conmov1) => {
      conmov1.style.transform = `translate3d(${
        (contentMove21Height / windowScroll) * 300
      }px, 0, 0)`;
    });
    contentMove22.style.transform = `translate3d(${
      -(contentMove21Height / windowScroll) * 300
    }px, 0, 0)`;
  } else {
  }
  //   right text

  const rightText = document.querySelector(".content1__righttext");
  const rightTextHeight = rightText.getBoundingClientRect().top;

  const leftText = document.querySelector(".content1__lefttext");
  const leftTextHeight = rightText.getBoundingClientRect().top;

  if (windowScroll > rightTextHeight) {
    rightText.style.transform = `translate3d(0,${rightTextHeight / 4}px,0)`;
  } else {
    rightText.style.transform = `translate3d(0,0,0)`;
  }
  if (windowScroll > leftTextHeight) {
    leftText.style.transform = `translate3d(0,${rightTextHeight / 4}px,0)`;
  } else {
    leftText.style.transform = `translate3d(0,0,0)`;
  }

  //   content3 text
  const about1 = document.querySelector(".about1");
  const about2 = document.querySelector(".about2");
  const content3 = document.querySelector(".content3");
  const content3Height = content3.clientHeight;

  if (windowScroll > 8000) {
    about1.style.transform = `translate3d(-${
      (windowScroll / content3Height) * 10
    }%,0,0)`;
    about2.style.transform = `translate3d(${
      (windowScroll / content3Height) * 10 - 200
    }%,0,0)`;
  } else {
    about1.style.transform = `translate3d(-30%,0,0)`;
    about1.style.transform = `translate3d(-30%,0,0)`;
  }
});

// colorbtn

const ColorBtn = document.querySelector(".colorBtn");
const container = document.querySelectorAll(".container");
const innerText = document.querySelectorAll(".content3__about-inner-text");
const con1Con = document.querySelector(".con1Container");
const bubble = document.querySelectorAll(".bubble ");
const bubbleCenter = document.querySelector(".bubble-center");
const arrow = document.querySelectorAll(".content3__about-inner-img");
const footer = document.querySelector(".footer");
const copyright = document.querySelector(".copyright__copyright");
const copyrightLink = document.querySelector(".copyright__link a");
let btnIndex = 0;

ColorBtn.addEventListener("click", () => {
  if (btnIndex == 0) {
    container.forEach((con) => {
      con.style.backgroundColor = "black";
    });
    con1Con.style.backgroundColor = "#e5e5e5";
    innerText.forEach((inner) => {
      inner.style.color = "white";
    });
    bubble.forEach((bub) => {
      bub.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
    bubbleCenter.style.backgroundColor = "black";
    arrow.forEach((ar) => {
      ar.style.filter = "invert(1)";
    });
    footer.style.backgroundColor = "black";
    copyright.style.color = "white";
    copyrightLink.style.color = "white";
    btnIndex++;
  } else {
    container.forEach((con) => {
      con.style.backgroundColor = "#e5e5e5";
    });
    con1Con.style.backgroundColor = "black";
    innerText.forEach((inner) => {
      inner.style.color = "black";
    });
    bubble.forEach((bub) => {
      bub.style.backgroundColor = "rgba(255,255,255,0.1)";
    });
    bubbleCenter.style.backgroundColor = "white";
    arrow.forEach((ar) => {
      ar.style.filter = "invert(0)";
    });
    footer.style.backgroundColor = "#e5e5e5";
    copyright.style.color = "black";
    copyrightLink.style.color = "black";
    btnIndex = 0;
  }
});
