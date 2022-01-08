const bigImg = document.querySelector('.big_img_img'),
    smallImgWrap = document.querySelector('.small_img_wrap'),
    smallImg = document.querySelector('.small_img'),
    smallFirst = document.getElementById('smallFirst'),
    smallSecond = document.getElementById('smallSecond'),
    smallThrid = document.getElementById('smallThrid'),
    smallFourth = document.getElementById('smallFourth');

    function ChnImg(){
	
        document.getElementById("smallFourth").src = "../img/10d0f1a0-65f8-4fa5-b05b-92cbc72a220a.jpeg";
        
    }
init=()=>{
    ChnImg();
}

init();