// déclaration variables et constantes
const carrouselMobile = document.querySelectorAll('.mobile img');
const suivantMobile = document.querySelector('.right');
const precedentMobile = document.querySelector('.left');
const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".btn-burger");
const burger2 = document.querySelector(".btn-burger2");
const overlay = document.querySelector('.ov');
const contactBtn = document.querySelector(".btn");
const cart = document.querySelector('.cart');
const buttons = document.querySelectorAll('.number > img');
const display = document.querySelector('.number > span');
const shop = document.querySelector('.shopping');
const main = document.querySelectorAll('.main-img');
const thumbnail = document.querySelectorAll('.thumbnail > img');
const lightbox = document.querySelector('.lightbox');
const lbimg = document.querySelectorAll('.lb-img');
const exit = document.querySelector('.close-btn');
const suivantDesktop = document.querySelector('.right-lb');
const precedentDesktop = document.querySelector('.left-lb');

// Bouton menu mobile
// ouverture bouton mobile 
burger.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-active");
    overlayCheck();
    burger.classList.toggle("toggle");
});
// fermeture bouton mobile
burger2.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-active");
    overlayCheck();
    burger2.classList.toggle("toggle");
});

function overlayCheck(){
    if (mobileNav.classList.contains('mobile-nav-active')) {
        return overlay.classList.add('active');
    }
    else{
        return overlay.classList.remove('active');
    }
}

// Gallery 
main.forEach(mainimg => {
    mainimg.addEventListener('click', checkLB);
})

exit.addEventListener('click', checkLB);

function checkLB(){
    if (lightbox.classList.contains('active-lb')) {
        return lightbox.classList.remove('active-lb');
    }
    else {
        return lightbox.classList.add('active-lb');
    }
}

thumbnail.forEach(thumb => {
    let index = 0;
    thumb.addEventListener('click', () => {
        console.log(lbimg)
        index = thumb.getAttribute('data-ac');
        for(let i = 0; i < thumbnail.length; i++){
            if (thumbnail[i].getAttribute('data-ac') === index){
                thumbnail[i].classList.add('active-1');
                main[i].classList.add('active');
                lbimg[i].classList.add('active');
            }
            else {
                thumbnail[i].classList.remove('active-1');
                main[i].classList.remove('active');
                lbimg[i].classList.remove('active');
            }
        }
    })
})



// Shopping cart - Show/Hide
cart.addEventListener('click', () => {
    if (shop.classList.contains('active')) {
        cart.classList.remove('active-cart');
        shop.classList.remove('active');
    }
    else {
        cart.classList.add('active-cart');
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

// Carrousel MOBILE

// declaration d'une variable index = 0 pour definir l'emplacement du 1er element dans le tableau
let index = 0;
// avancer dans le carrousel
suivantMobile.addEventListener('click', slideSuivante);

function slideSuivante(){
    // recuperation de la 1ere image
    if (index < 3){
        carrouselMobile[index].classList.remove('active');
        index++;
        carrouselMobile[index].classList.add('active');
    }
    //  retourner au debut du tableau
    else if(index === 3){
        carrouselMobile[index].classList.remove('active');
        index = 0;
        carrouselMobile[index].classList.add('active');
    }
}
// reculer dans le carrousel
precedentMobile.addEventListener('click',slidePrecedente);

function slidePrecedente(){
    // decrementer pour retourner au 1er element du tableau
    if (index > 0){
        carrouselMobile[index].classList.remove('active');
        index--;
        carrouselMobile[index].classList.add('active');
    }
    else if (index === 0){
        carrouselMobile[index].classList.remove('active');
        index = 3;
        carrouselMobile[index].classList.add('active');
    }
}
// fin partie CARROUSEL MOBILE

// Carrousel DESKTOP

// let index = 0;
// suivantDesktop('click', slideSuivante);

// function slideSuivante(){}