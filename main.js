let div1=document.querySelector('.div1');
let div3=document.querySelector('.div3');
let div1head=document.querySelector('.head1');
let div2head =document.querySelector('.head2');

window.addEventListener('scroll', function(){
    let scrollY = window.pageYOffset;
    div1.style.backgroundPositionY = -scrollY *0.15 +'rem';
    div3.style.backgroundPositionY = -scrollY * 0.01 +'rem';
    div1head.style.transform='translateX(' + (scrollY) * 0.8 + 'px)';
  

})