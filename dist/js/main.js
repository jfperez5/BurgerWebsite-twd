document.addEventListener('DOMContentLoaded', () => {
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

    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]'); // Selecciona todas las secciones con un ID

    // Función para marcar el enlace de navegación activo
    const setActiveNavLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('text-secundaryColor'); // Asegúrate de que 'secundaryColor' esté bien escrito si es diferente de 'secondaryColor'
        });
        const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('text-secundaryColor');
        }
    };

    // 1. Manejo del clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto del ancla

            const targetId = link.getAttribute('href').substring(1); // Obtiene el ID del destino (quitando el '#')
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Desplazamiento suave a la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Marca el enlace como activo
                setActiveNavLink(targetId);
            }
        });
    });

    // 2. Manejo del scroll para cambiar el elemento activo
    window.addEventListener('scroll', () => {
        let currentActiveSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Un pequeño offset para que el cambio de activo ocurra cuando la sección está visible en una parte significativa
            const offset = 150; 

            if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        if (currentActiveSectionId) {
            setActiveNavLink(currentActiveSectionId);
        } else {
            // Si no hay ninguna sección activa (por ejemplo, al principio de la página y antes de la primera sección)
            // puedes decidir si quieres que el primer elemento sea activo o no.
            // En este caso, si el scroll está en la parte superior, podemos activar "Home"
            if (window.scrollY === 0) {
                setActiveNavLink('home'); // Asegúrate de que el ID de tu sección home sea 'home'
            }
        }
    });

    // Inicializar el estado activo al cargar la página (por ejemplo, si la URL tiene un hash)
    // o simplemente activar la sección 'home' si no hay hash.
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
        setActiveNavLink(initialHash);
    } else {
        // Por defecto, activa el enlace "Home" al cargar la página si no hay un hash en la URL
        setActiveNavLink('home'); // Asegúrate de que el ID de tu sección home sea 'home'
    }


/*~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400
})

sr.reveal(".home__image");
sr.reveal(".home__content",{origin:"bottom"});
sr.reveal(".category__card",{interval:300});
sr.reveal(".promo__card-1",{origin:"left"});
sr.reveal(".promo__card-2",{origin:"rigth"});
sr.reveal(".about__img",{origin:"bottom"});
sr.reveal(".about__content",{origin:"top"});
sr.reveal(".menu__items",{origin:"left"});
sr.reveal(".customer__review",{origin:"right"});
sr.reveal(".footer");

});