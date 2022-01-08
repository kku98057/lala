const searchBtn = document.querySelector(".etc__search img");
const searchContent = document.querySelector(".etc__search-contents");
// Search
// search handler
searchHandle = () => {
  searchContent.classList.toggle("active");
};
searchBtn.addEventListener("click", () => {
  searchHandle();
});

// fixbtn

const Topbtn = document.querySelector(".fixbtn__top");

Topbtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// jquery

$(document).ready(function () {
  // mob menu

  // slick
  $(".storyslide__container").slick({
    dots: true,
    dotsClass: "story__dots",
    prevArrow: '<div class="story__arrow-prev"></div>',
    nextArrow: '<div class="story__arrow-next"></div>',

    customPaging: function (slide, i) {
      var MainMenu = "";
      if (i == 0) {
        MainMenu = "기업시민";
      }
      if (i == 1) {
        MainMenu = "스마트컨스트럭션";
      }
      if (i == 2) {
        MainMenu = "탄소중립경영";
      }
      if (i == 3) {
        MainMenu = "더샵";
      }
      if (i == 4) {
        MainMenu = "도시정비";
      }
      if (i == 5) {
        MainMenu = "기업문화";
      }
      return `<button type="button" class="story__dots-btn"><span>${MainMenu}</span></button>`;
    },
  });
  $(".story__dots-btn").eq(0).addClass("showing");

  $(".storyslide__container").on(
    "beforeChange",
    function (event, slide, currentSlide, nextSllide) {
      $(".story__dots-btn").removeClass("showing");
      $(".story__dots-btn").eq(nextSllide).addClass("showing");
    }
  );

  // mainbusiness 슬라이드

  $(".mainbusiness__container").slick({
    prevArrow: '<div class="mainbusiness__arrow-prev"></div>',
    nextArrow: '<div class="mainbusiness__arrow-next"></div>',
  });

  // technology 슬라이드
  $(".technology__container").slick({
    dots: true,
    dotsClass: "technology__btnwrap",
    arrows: false,
    customPaging: function (slide, i) {
      var techMenu = "";
      if (i == 0) {
        techMenu = "플랜트 핵심기술";
      }
      if (i == 1) {
        techMenu = "인프라 핵심기술";
      }
      if (i == 2) {
        techMenu = "건축 핵심기술";
      }
      return `<button type="button" class="technology__btn technology__btn${i}">
      <div class="technology__btn-circle"></div>
      <p class="technology__btn-title">${techMenu}</p>
      <img src="img/icons/icon-right-arrow-white.svg" class="technology__btn-arrow"></>
      <div class="technology__btn-border"></div><div class="technology__btn-line"></div>
      </button>`;
    },
  });
  $(".technology__btn0").children().addClass("btnActive");
}); // redayfunction end

// storyslide custom

$(".storyslide__container").on("init", function (event, slick) {
  $(this).append(
    '<div class="slide__arrow-nub"><span class="current-nub"></span>/<span class="total-nub"></span></div>'
  );
  $(".current-nub").text(slick.currentSlide + 1);
  $(".total-nub").text(slick.slideCount);
});
$(".storyslide__container").on(
  "beforeChange",
  function (event, slide, currentSldie, nextSlide) {
    $(".current-nub").text(nextSlide + 1);
  }
);

// mainbusiness custom
$(".mainbusiness__container").on("init", function (event, slick) {
  $(this).append(
    '<div class="mainbusiness__nub"><span class="mainbusiness__nub-cur"></span>/<span class="mainbusiness__nub-total"></span></div>'
  );
  $(".mainbusiness__nub-cur").text(slick.currentSlide + 1);
  $(".mainbusiness__nub-total").text(slick.slideCount);
});
$(".mainbusiness__container").on(
  "beforeChange",
  function (event, slide, currentSlide, nextSlide) {
    $(".mainbusiness__nub-cur").text(nextSlide + 1);
  }
);
// technology custom

$(".technology__container").on(
  "beforeChange",
  function (event, slide, currentSlide, nextSlide) {
    $(".technology__btn").children().removeClass("btnActive");
    $(".technology__btn").eq(nextSlide).children().addClass("btnActive");
  }
);

// mob 메뉴

const mobNav = document.querySelector(".mobnav");
const mobBtn = document.querySelector(".etc__mob-menu");
const mobCloseBtn = document.querySelector(".mobnav__logo-closeimg");
const body = document.querySelector("body");
const mobStoryBtn = document.querySelector(".mobnav__story-btn");
const mobMenuStory = document.querySelector(".mobnav__menu-story");

const mobBtns1 = document.querySelectorAll(".mobnav__btn1");
const mobBtn1 = document.querySelector(".mobnav__btn1");
const mobMenus1 = document.querySelectorAll(".mobnav__menu-list");
const mobMenu1 = document.querySelector(".mobnav__menu-list");

const mobBtns2 = document.querySelectorAll(".mobnav__btn2");
const mobBtn2 = document.querySelector(".mobnav__btn2");
const mobMenus2 = document.querySelectorAll(".mobnav__content-menu-list");
const mobMenu2 = document.querySelector(".mobnav__content-menu-list");

const mobArrow = document.querySelectorAll(
  ".mobnav__content-menu-list > a:after"
);

console.log(mobArrow);

mobBtn.addEventListener("click", () => {
  mobNav.classList.add("active");
  body.style.overflowY = "hidden";
});

mobCloseBtn.addEventListener("click", () => {
  mobNav.classList.remove("active");
  body.style.overflowY = "scroll";
});

mobBtns1.forEach((mobBtn1) => {
  mobBtn1.addEventListener("click", (event) => {
    const mobTarget = event.target;
    const parent = mobTarget.parentNode;
    mobTarget.classList.toggle("active");
    parent.classList.toggle("active");
  });
});

mobBtns2.forEach((mobBtns) => {
  mobBtns.addEventListener("click", (event) => {
    const mobTarget2 = event.target;
    const parent2 = mobTarget2.parentNode;
    mobTarget2.classList.toggle("active");
    parent2.classList.toggle("active");
  });
});
