// ==========================
// THEME TOGGLE
// ==========================

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        localStorage.setItem("theme","light");
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});


// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .about-preview"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity = "0";
    element.style.transform =
    "translateY(40px)";
    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ==========================
// ACTIVE NAV LINK
// ==========================

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    const linkPage =
    link.getAttribute("href");

    if(linkPage === currentPage){

        link.style.fontWeight = "700";
        link.style.borderBottom =
        "2px solid currentColor";
        link.style.paddingBottom = "4px";

    }

});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#111;
color:#fff;
cursor:pointer;
font-size:18px;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.2);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ==========================
// HERO TEXT ANIMATION
// ==========================

const heroTitle =
document.querySelector(".hero-content h1");

if(heroTitle){

    heroTitle.style.opacity = "0";
    heroTitle.style.transform =
    "translateY(30px)";

    setTimeout(()=>{

        heroTitle.style.transition =
        "all 1s ease";

        heroTitle.style.opacity = "1";
        heroTitle.style.transform =
        "translateY(0)";

    },300);

}

/* MOBILE MENU */

document.addEventListener("DOMContentLoaded", function(){

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click", function(){

        nav.classList.toggle("active");

    });

});