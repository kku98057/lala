
// index_s1
opacity = () => {
    const menuInnerList = document.getElementById('menuInnerList');
    const opacityClass = document.querySelector('.menu_showing');
    if (opacityClass) {
        menuInnerList.classList.remove('menu_showing');
    } else {
        menuInnerList.classList.add('menu_showing');
    }
}
menuInnerHandle = () => {
    const menuInner = document.getElementById('menuInner');
    menuInner.addEventListener('click', opacity)
}









    init = () => {
        menuInnerHandle();
    }
init();

