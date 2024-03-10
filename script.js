// =========SHOW MOBILE MENU=========


const navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close'),
navMenu=document.getElementById('nav-menu');

navToggle.addEventListener('click',function(){
    navMenu.classList.toggle('show');
})
navClose.addEventListener('click',function(){
    navMenu.classList.toggle('show');
})

// =========CLOSE THE MENU IF THE THE LINK IS CLICKED=========

const navLink = document.querySelectorAll('.nav__link');
const navItem=document.getElementById('nav-item');

function linkAction(){
   
    navMenu.classList.remove('show');
}



navLink.forEach(n=>n.addEventListener('click',linkAction));

for (let i=0; i<navLink.length; i++){
    navLink[i].addEventListener('click',function(){
        let current=document.getElementsByClassName('active-link');
        current[0].className=current[0].className.replace("active-link","");
        this.className +=" active-link";
    })
}