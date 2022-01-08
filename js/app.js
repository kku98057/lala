"use strict";

// section1
/// bg change
const section1Img = document.querySelectorAll(".section1__img img");
const cover = document.querySelector('.section1')
let i = 1; 
section1Img[0].classList.add('on');
function imgChange() {
  if (i < 10) {
    section1Img[i].classList.add('on');
    i++;
  } else{
    cover.classList.add('off')
  }
}
function imgChanger() {
  setInterval(imgChange,300);
}
imgChanger();

const section4Con = document.querySelector('.section4');
const section4Circle = document.querySelectorAll('.section4__contents-img');
const section4Contents = document.querySelector('.section4__contents');
const section4Text = document.querySelectorAll('.section4__contents-text')

section4Circle.forEach((circle)=>{
  circle.addEventListener('mouseover',()=>{
    const circleParent = circle.parentNode;
    const circleParentTarget =  circleParent.querySelector('.section4__contents');
    circleParentTarget.classList.add('active')
  });
});
section4Text.forEach((text)=>{
  text.addEventListener('mouseleave',()=>{
    const textParent = text.parentNode;
    textParent.classList.remove('active')
    console.log(textParent);
  })
})


// 반응형
