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

  let currentSectionId = "home"; // Valor predeterminado en caso de que no se encuentre ninguna sección

  // Itera sobre las secciones para encontrar cuál está actualmente en la vista
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offset = 60; // Ajusta este valor si tu barra de navegación tiene una altura diferente

    if (rect.top <= offset && rect.bottom > offset) {
        currentSectionId = section.getAttribute("id");
    }
  });

  // Manejo especial para el final de la página:
  // Si el usuario está casi al final de la página, activa el enlace de "contacto".
  // Esto es útil si la última sección es muy corta o si hay un footer grande.
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 10
  ) {
    currentSectionId = "contact"; // Asegúrate de que 'contact' sea el ID de tu última sección
  }
  console.log("Current scrollY:", window.scrollY);
console.log("Current section ID:", currentSectionId);
  // Actualiza las clases de los enlaces de navegación
  navLinks.forEach((link) => {
    const linkHash = link.getAttribute("href")?.replace("#", "");

    // Primero, elimina la clase activa de todos los enlaces
    link.classList.remove("text-secondaryColor");

    // Si el hash del enlace coincide con el ID de la sección actual, agrega la clase
    if (linkHash === currentSectionId) {
        console.log('Entro = ',linkHash, currentSectionId);
      link.classList.add("text-secondaryColor");
    }
  });
};

// Escucha el evento de desplazamiento y llama a la función activeLink.
// { passive: true } mejora el rendimiento de desplazamiento al indicarle al navegador
// que esta función no llamará a preventDefault().
window.addEventListener("scroll", activeLink, { passive: true });

// Llama a la función una vez al cargar la página para establecer el estado inicial
// Esto es importante para que el enlace correcto esté activo cuando la página se carga
// y el usuario aún no ha hecho scroll.
document.addEventListener("DOMContentLoaded", activeLink);

/*~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~*/