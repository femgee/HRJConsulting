const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mainNav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{backToTop.classList.toggle("show",window.scrollY>500);});
const whatsappToggle = document.getElementById("whatsappToggle");
const whatsappPanel = document.getElementById("whatsappPanel");
const whatsappClose = document.getElementById("whatsappClose");
const whatsappMessage = document.getElementById("whatsappMessage");
const whatsappSend = document.getElementById("whatsappSend");

const whatsappNumber = "447123456789"; // Replace with your number

whatsappToggle.addEventListener("click", () => {
  whatsappPanel.classList.toggle("open");
  whatsappPanel.setAttribute(
    "aria-hidden",
    whatsappPanel.classList.contains("open") ? "false" : "true"
  );
});

whatsappClose.addEventListener("click", () => {
  whatsappPanel.classList.remove("open");
  whatsappPanel.setAttribute("aria-hidden", "true");
});

whatsappMessage.addEventListener("input", () => {
  const text = encodeURIComponent(whatsappMessage.value.trim());
  whatsappSend.href = `https://wa.me/${whatsappNumber}?text=${text}`;
});

// Set an initial link in case the visitor sends without typing
whatsappSend.href = `https://wa.me/${whatsappNumber}`;
