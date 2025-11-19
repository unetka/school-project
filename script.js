let navbutton = document.querySelector("#nav-button");
let mainblock = document.querySelector("#main-block");
let i = document.getElementById('main-block').style.top;
navbutton.addEventListener('click', function(){
            document.getElementById('main-block').style.right = '0%';
            window.scrollBy({left: 0, top: 1200, behavior: 'smooth' });
});