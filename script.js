
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let open = true;
hamburger.addEventListener("click",mobileMenu);

function mobileMenu (){
    
    if (open){
        open = false;
        navMenu.style.left="100% ";
        navMenu.style.left="0%";
        console.log(open);
    } else {
        navMenu.style.left="100% ";
        open = true;
        
        navMenu.style.left="-100%";
        console.log(open)
    }
    
        
   // navMenu.style.left==="0%"
   
   
}