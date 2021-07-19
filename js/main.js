let sideButton = document.querySelector(".sidebar-button");
let cancelButton = document.querySelector(".cancel-button");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

//Sidebar Button
sideButton.onclick = function()
{
    sideButton.style.opacity = 0;
    sideButton.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}

cancelButton.onclick = function()
{
    sideButton.style.opacity = 1;
    sideButton.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}

//Sticky Nav Menu

let nav = document.querySelector("nav");
let val;
window.onscroll = function()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("sticky");
    }
    else
    {
        nav.classList.remove("sticky");
    }
}

//close nav menu by clicking on the links
let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click",()=>{
        sideButton.style.opacity = 1;
        sideButton.style.pointerEvents = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto";
    })
}