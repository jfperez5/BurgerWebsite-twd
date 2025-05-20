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



/*~~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~*/
/*~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~*/