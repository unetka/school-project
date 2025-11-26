let navbutton = document.querySelector("#nav-button");
let mainblock = document.querySelector("#main-block");
let i = document.getElementById('main-block').style.top;
navbutton.addEventListener('click', function(){
            document.getElementById('main-block').style.right = '0%';
            mainblock.scrollIntoView({behavior: "smooth"});
});