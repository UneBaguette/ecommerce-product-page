// déclaration variables et constantes
const carrousel = document.querySelectorAll('.mobile img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".btn-burger");
const burger2 = document.querySelector(".btn-burger2");
const contactBtn = document.querySelector(".btn");
const cart = document.querySelector('.cart');
const buttons = document.querySelectorAll('.number > img');
const display = document.querySelector('.number > span');
const shop = document.querySelector('.shopping');
const main = document.querySelectorAll('.main-img');
const thumbnail = document.querySelectorAll('.thumbnail > img')
const lightbox = document.querySelector('.lightbox');
const exit = document.querySelector('.close-btn');

// Bouton menu mobile
// ouverture bouton mobile 
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-active");
  burger.classList.toggle("toggle");
});
// fermeture bouton mobile
burger2.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-active");
    burger2.classList.toggle("toggle");
});


// Gallery 

main.forEach(mainimg => {
    mainimg.addEventListener('click', () => {
        if (lightbox.classList.contains('active-lb')) {
            lightbox.classList.remove('active-lb');
        }
        else {
            lightbox.classList.add('active-lb');
        }
    })
})

exit.addEventListener('click', () => {
    if (lightbox.classList.contains('active-lb')) {
        lightbox.classList.remove('active-lb');
    }
    else {
        lightbox.classList.add('active-lb');
    }
})


// Shopping cart - Show/Hide
cart.addEventListener('click', () => {
    if (shop.classList.contains('active')) {
        shop.classList.remove('active');
    }
    else {
        shop.classList.add('active');
    }
});


// Add or remove item - Limits to 99

buttons.forEach(button => {
    display.innerText = '0';
    button.addEventListener('click', () => {
        let count = parseInt(display.innerText);
        op = button.getAttribute('data-op');
        if (op === '+') {
            count += 1;
        }
        else if (op === '-') {
            count -= 1;
        }
        count = count < 0 ? 0 : count;
        count = count > 99 ? 99 : count;
        display.innerText = count;
    });
})

// Carousel

// declaration d'une variable index = 0 pour definir l'emplacement du 1er element dans le tableau
let index = 0;
// avancer dans le carrousel
suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
    // recuperation de la 1ere image
    if (index<3){
        carrousel[index].classList.remove('active');
        index++;
        carrousel[index].classList.add('active');
    }
    //  retourner au debut du tableau
    else if(index === 3){
        carrousel[index].classList.remove('active');
        index = 0;
        carrousel[index].classList.add('active');
    }
}
// reculer dans le carrousel
precedent.addEventListener('click',slidePrecedente);

function slidePrecedente(){
    // decrementer pour retourner au 1er element du tableau
    if (index > 0){
        carrousel[index].classList.remove('active');
        index --;
        carrousel[index].classList.add('active');
    }
    else if (index === 0){
        carrousel[index].classList.remove('active');
        index = 3;
        carrousel[index].classList.add('active');
    }
}
// fin partie CARROUSEL