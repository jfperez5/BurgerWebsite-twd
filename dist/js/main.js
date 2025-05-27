// const { default: createPlugin } = require("tailwindcss/plugin");

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link =>
    link.addEventListener("click", () => {
         navMenu.classList.add('hidden')
    })
)

hamburger.addEventListener("click", ()=>{
    navMenu.classList.remove('hidden')
})

closeIcon.addEventListener("click", ()=>{
    navMenu.classList.add('hidden')
})

/*~~~~~~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
    tab.addEventListener("click", ()=> {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')
        console.log(all)

        all.forEach(item => {
            item.style.display = 'none'
        })

        if(tabval == 'food'){
             foods.forEach(item => {
                    item.style.display = 'block'
             })
       } else if(tabval == 'snack'){
             snacks.forEach(item => {
                item.style.display = 'block'
             })
       } else if(tabval == 'beverage'){
             beverages.forEach(item => {
                item.style.display = 'block'
            })
       }else{
            all.forEach(item => {
                item.style.display = 'block'
            })
       }

    })
})

/*~~~~~~~~~~~~~~~~ CONFIGURACIÓN DEL SWIPER ~~~~~~~~~~~~~~~*/

const swiper = new Swiper('.swiper', {
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  grabCursor:true,
  breakpoints:{
    // When window width is >= 640px
    640:{
        slidesPerView:1,
    },
    // When window width is >= 768px
    768:{
        slidesPerView:2,
    },
    // When window width is >= 1024px
    1024:{
        slidesPerView:3,
    },

  }
});

/*~~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~*/
const scrollUp = () => {
    
    const scrollUpBtn = document.getElementById("scroll-up");
   

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener('scroll',scrollUp)

/*~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("header");
    
    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-secundaryColor");
    }else{
        header.classList.remove("border-b", "border-secundaryColor");
    }
}

window.addEventListener('scroll',scrollHeader)

/*~~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~1:58:08*/

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else{
    lightMode();
} 

themeBtn.addEventListener('click', (e) => {
   if(localStorage.getItem("mode") == "light"){
    darkMode();
   }else{
    lightMode();
   }
})

function darkMode () {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode () {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}

/*~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~2:09:23 ~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");

    let currentSection = null; 
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distanceToTop = Math.abs(rect.top);

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (distanceToTop < minDistance) {
                minDistance = distanceToTop;
                currentSection = section.getAttribute("id");
            }
        }
    });

    console.log("SECCIÓN ACTIVA:", currentSection);

    navLinks.forEach((item) => {
        // item.classList.remove("text-secondaryColor");

        const linkHash = item.getAttribute("href")?.replace("#", "");
        if (linkHash === currentSection) {
            item.classList.add("text-secondaryColor");
        }else {
             item.classList.remove("text-secondaryColor"); 
        }
    });
};

window.addEventListener("scroll", activeLink);



/*~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~*/