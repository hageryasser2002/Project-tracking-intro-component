var elementMenuImage = document.getElementsByClassName('menuImage');
var elementNavList = document.getElementsByClassName('navList');
let width = screen.width;
var index = 0;
if(width > 750)
{
   elementNavList[0].classList.remove('block');
   elementNavList[0].classList.add('none');
}
function onClick(){
     if(index == 0)
     {
        elementMenuImage[0].setAttribute("src","images/icon-close.svg");
        elementNavList[0].classList.add('block');
        elementNavList[0].classList.add('flex');
        index = 1;
     }
     else
     {
        elementMenuImage[0].setAttribute('src','images/icon-hamburger.svg');
        elementNavList[0].classList.remove('block');
        elementNavList[0].classList.remove('flex');
        index = 0;
     } 
}