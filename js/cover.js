const coverTl = gsap.timeline();
const section2Tl = gsap.timeline();
const section3Tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);


// cover

coverTl
  .to(".textCon-text1", {
    yPercent: -100,
    delay: 0.3,
  })
  .to(
    ".textCon-text2",
    {
      translateY: 0,
    },
    "-=0.3"
  )
  .to(".textCon-text2", {
    yPercent: -100,
  })
  .to(
    ".textCon-text3",
    {
      translateY: 0,
    },
    "-=0.3"
  )
  .to(".textCon-text3", {
    yPercent: -100,
  })
  .to(
    ".textCon-text4",
    {
      translateY: 0,
    },
    "-=0.3"
  )
  .to(".textCon-text4", {
    yPercent: -100,
  })
  .to(
    ".textCon-text5",
    {
      translateY: 0,
    },
    "-=0.3"
  );

//   section2
section2Tl
.to('.logo',{
    color:'black',
})
  .to(".section2__video video", {
    scale: 1,
  })
  .to(
    ".section2__h",
    {
      scale: 3,
      duration: 1,
    },
    "-=0.5"
  )
  .to(
    ".section2__h",
    {
      translateY: -200,
      opacity: 0,
    },
    "-=0.5"
  );

ScrollTrigger.create({
  animation: section2Tl,
  trigger: ".section2",
  scrub: 1,
  pin: true,
  start: "top top",
  end: "+=300%",
});

// section3
section3Tl.to(".section3__text-text", {
    translateY:0,
    scale:1,
    opacity:1,
    duration:1,
})
.to('.section3__text-text',{
    color:'#C8B7B4',
    duration:1
})
.to('.section3__text-text',{
    translateY:-200,
},'-=1')
.to('.section3__text2-text',{
    opacity:1,
})

ScrollTrigger.create({
    animation:section3Tl,
    trigger:'.section3',
    pin:true,
    scrub:1,
    end:'+=300%'
});

// section4

const section4Tl = gsap.timeline();
const sec4img1 = document.querySelector('.sec4img1');
const sec4img1Rect = sec4img1.getBoundingClientRect();
const sec4img1Width = sec4img1Rect.width/2;


section4Tl
.to('.logo',{
    color:'white',
})
.from('.section4__title',{
    translateY:100,
    opacity:0,
},'+=1')
.to('.section4__title',{
    translateY:-500,
    opacity:1,
},'+=1')
.to('.section4__title',{
    opacity:0,
})
.to('.sec4img1',{
    left:'50%',
}).to('.sec4img1',{
    left:'-100%',
    delay:1
}).to('.sec4img2',{
    left:'50%',
},'-=0.5').to('.sec4img2',{
    left:'-100%',
    delay:1
})
.to('.sec4img3',{
    left:'50%',
},'-=0.5').to('.sec4img3',{
    left:'-100%',
    delay:1
})
.to('.sec4img4',{
    left:'50%',
},'-=0.5').to('.sec4img4',{
    left:'-100%',
    delay:1
})
.to('.sec4img5',{
    left:'50%',
},'-=0.5').to('.sec4img5',{
    opacity:0,
    delay:1
});

ScrollTrigger.create({
    animation:section4Tl,
    trigger:'.section4',
    scrub:1,
    pin:true,
    end:'+=1000%',
    toggleActions:'play reverse play reverse'
});

// section5

const section5Tl = gsap.timeline();

section5Tl
.to('.logo',{
    color:'white',

}).to('.section5__text',{
    xPercent:-30,
    stagger:0.5,
})
.to('.section5__text',{
    xPercent:-60,
    stagger:0.5,
},'-=1.5')
.to('.section5__text',{
    xPercent:-90,
    stagger:0.5,
},'-=1.5')
.to('.section5__text',{
    xPercent:-110,
    stagger:0.5,
},'-=1.5')
.to('.basick',{
    xPercent:-245,
    rotate:0,
    duration:5,
})
.to('.section5__video1',{
    xPercent:-520,
    duration:5,
},'-=3')
.to('.section5__video2',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video3',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video4',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.animate',{
    duration:8,
    xPercent:-245,
    rotate:0,
},'-=3')
.to('.section5__con5',{
    duration:5,
    backgroundColor:'#C8B7B4'
},'-=5')
.to('.section5__video5',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video6',{
    duration:5,
    xPercent:-520
},'-=3.5')

.to('.section5__video7',{
    duration:5,
    xPercent:-520
},'-=3.5')

.to('.section5__video8',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video9',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video10',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.real',{
    duration:8,
    xPercent:-300,
    rotate:0,
},'-=3.5')
.to('.section5__con5',{
    duration:5,
    backgroundColor:'#A25E5E'
},'-=3')
.to('.section5__video11',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video12',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video13',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video14',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video15',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video16',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video17',{
    duration:5,
    xPercent:-520
},'-=3.5')
.to('.section5__video18',{
    duration:5,
    xPercent:-520
},'-=3.5');


ScrollTrigger.create({
    animation:section5Tl,
    trigger:'.section5',
    scrub:1,
    pin:true,
    end:'+=1500%'
})

// footer

const footerTl = gsap.timeline();

footerTl
.to('.logo',{
    color:'black',
})
.from('.footer__contact',{
    translateY:800,
}).to('.footer__contact',{
    scale:1.1
},'-=0.5')
.from('.footer__phone',{
    translateY:800,
})
.to('.footer__phone',{
    rotate:0,
},'-=0.5')
.to('.footer__phone',{
    yPercent:-150,
},'-=0.5')
.from('.footer__email',{
    xPercent:100,
},'-=0.5')
.to('.footer__contact',{
    opacity:0.1
},'-=0.5');

ScrollTrigger.create({
    animation:footerTl,
    trigger:'footer',
    end:'+=100%',
    scrub:1,
    pin:true,
});
