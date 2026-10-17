const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mainNav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{backToTop.classList.toggle("show",window.scrollY>500);});
