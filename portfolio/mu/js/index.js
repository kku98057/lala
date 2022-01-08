const header = document.querySelector("header");
const logo = document.querySelector(".logo__img");
const btn = document.querySelectorAll(".btn__bar");
const main = document.querySelector("main");
const mainRect = main.getBoundingClientRect();
const mainHieght = mainRect.height;
const btnCon = document.querySelector(".btn");

// 로드 시 스크롤 top
function scrollTop() {
  window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
  });
}

// 로고,버튼 스크롤링

function headerActive() {
  logo.classList.add("active");
  btn.forEach((btn) => {
    btn.classList.add("active");
  });
}
function headerUnActive() {
  logo.classList.remove("active");
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

// 메뉴버튼클릭

const menu = document.querySelector(".menu");
const body = document.querySelector("body");
// 메뉴바

function menuBar() {
  menu.classList.toggle("active");
}
//   햄버거
function hamberger() {
  btn.forEach((btnClick) => {
    btnClick.classList.toggle("btnActive");
  });
  body.classList.toggle("active");
}
// 로고,햄버거 무조건 흰색으로
function whiteBtn() {
  logo.classList.remove("active");
  btn.forEach((w) => {
    w.classList.remove("active");
  });
}

// 메뉴배경

const menuBg = document.querySelectorAll(".menu__cover li");
const menuBgWrap = document.querySelector(".menu__cover");
let bgIndex = 0;

function menuBgOn() {
  menuBgWrap.classList.toggle("active");
  if (bgIndex == 0) {
    menuBg.forEach((bg) => {
      bg.classList.remove("active2");
      bg.classList.add("active1");
    });
    bgIndex++;
  } else {
    menuBg.forEach((bg) => {
      bg.classList.remove("active1");
      bg.classList.add("active2");
    });
    bgIndex = 0;
  }
}
function btnEvent() {
  btnCon.addEventListener("click", () => {
    hamberger();
    menuBar();
    whiteBtn();
    menuBgOn();
  });
}
// curser

const curser1 = document.querySelector(".curser1");
const curser2 = document.querySelector(".curser2");
const curser1Rect = curser1.getBoundingClientRect();
const curser1HalfWidth = curser1Rect.width / 2;
const curser1HalfHeight = curser1Rect.height / 2;

const curser2Rect = curser2.getBoundingClientRect();
const curser2HalfWidth = curser2Rect.width / 2;
const curser2HalfHeight = curser2Rect.height / 2;

window.addEventListener("mousemove", (e) => {
  const Xoffset = e.pageX;
  const Yoffset = e.pageY;

  curser1.style.transform = `translate3d(${Xoffset - curser1HalfWidth - 5}px,${
    Yoffset - curser1HalfHeight - 5
  }px,0) scale(1)`;
  curser2.style.transform = `translate3d(${Xoffset - curser2HalfWidth - 5}px,${
    Yoffset - curser2HalfHeight - 5
  }px,0) scale(1)`;
});

// 마우스 호버

const aTag = document.querySelectorAll("a");

aTag.forEach((a) => {
  a.addEventListener("mouseover", () => {
    curser1.classList.add("on");
    curser2.classList.add("on");
  });
  a.addEventListener("mouseleave", () => {
    curser1.classList.remove("on");
    curser2.classList.remove("on");
  });
});
// btn logo 마우스오버
btnCon.addEventListener("mouseover", () => {
  curser1.classList.add("on");
  curser2.classList.add("on");
});
btnCon.addEventListener("mouseleave", () => {
  curser1.classList.remove("on");
  curser2.classList.remove("on");
});
logo.addEventListener("mouseover", () => {
  curser1.classList.add("on");
  curser2.classList.add("on");
});
logo.addEventListener("mouseleave", () => {
  curser1.classList.remove("on");
  curser2.classList.remove("on");
});

// 스크롤함수
function scrollEvent() {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= mainHieght) {
      headerActive();
    } else {
      headerUnActive();
    }
  });
}

// main text event
const mainText = document.querySelector(".main__h h3");
const br = "<br/>";
const textInner = `MUPLUS is UI/UX consulting company
creating a new user experience`;
let textIndex = 0;

function inText() {
  mainText.innerHTML = textInner.slice(0, textIndex);
  textIndex++;
}
function mainTextEvent() {
  setInterval(inText, 50);
}

// slick slider

$(document).ready(function () {
  $(".slider__container").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    swipeToSlide: true,
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
          pauseOnHover: true,
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 1500,
          swipe: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          pauseOnHover: true,
          dots: false,
          infinite: true,
          speed: 100,
          autoplay: true,
          autoplaySpeed: 1500,
          swipe: true,
          touchMenu: false,
        },
      },
    ],
  });
});

// gsap
gsap.registerPlugin(ScrollTrigger);

// stratge
gsap.to(".strategy__cover", {
  scrollTrigger: {
    trigger: ".strategy__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  translateX: "110%",
  opacity: "0",
  duration: 1,
});
gsap.to(".textmove1", {
  scrollTrigger: {
    trigger: ".strategy__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  translateX: "0",
  opacity: "1",
  duration: 0.5,
  stagger: 0.2,
});
gsap.to(".design__cover", {
  scrollTrigger: {
    trigger: ".design__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  opacity: "0",
  translateX: "110%",
  duration: 1,
});
gsap.to(".textmove2", {
  scrollTrigger: {
    trigger: ".design__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  translateX: "0",
  opacity: "1",
  duration: 0.5,
  stagger: 0.2,
});
gsap.to(".development__cover", {
  scrollTrigger: {
    trigger: ".development__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  opacity: "0",
  translateX: "110%",
  duration: 1,
});
gsap.to(".textmove3", {
  scrollTrigger: {
    trigger: ".development__gsap",
    end: "top -200px",
    toggleActions: "play reset play reset",
  },
  translateX: "0",
  opacity: "1",
  duration: 0.5,
  stagger: 0.2,
});
function init() {
  scrollTop();
  scrollEvent();
  btnEvent();
  mainTextEvent();
}
init();
window.addEventListener("resize", () => {
  scrollEvent();
  init();
});
