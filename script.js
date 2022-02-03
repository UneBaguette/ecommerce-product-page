// déclaration variables et constantes
// Carousel - Mobile
const carrouselMobile = document.querySelectorAll('.mobile img');
const suivantMobile = document.querySelector('.right');
const precedentMobile = document.querySelector('.left');
// Menu - Mobile
const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".btn-burger");
const burger2 = document.querySelector(".btn-burger2");
const overlay = document.querySelector('.ov');
// Shop - Add to cart
const buy = document.querySelector('.add-cart');
// Number of Items
const buttons = document.querySelectorAll('.number > img');
const display = document.querySelector('.number > span');
// Shop - Shopping Cart
const cart = document.querySelector('.cart-logo');
const shop = document.querySelector('.shopping');
const priceItem = document.querySelector('.price-item > p')
const numItem = document.querySelector('.num-item > span');
const total = document.querySelector('.total > p');
const cartTotal = document.querySelector('.cart-number')
const numCart = document.querySelector('.cart-number span');
const placeholder = document.querySelector('.placeholder');
const shopItems = document.querySelector('.shop-items');
const trash = document.querySelector('.trash');
// Gallery Image
const main = document.querySelectorAll('.main-img');
const thumbnail = document.querySelectorAll('.bg-t > img');
const bg = document.querySelectorAll('.bg-t');
// Lightbox Gallery Image
const lightbox = document.querySelector('.lightbox');
const lbimg = document.querySelectorAll('.lb-img');
const thumbImg = document.querySelectorAll('.bg-t-lb > img');
const bglb = document.querySelectorAll('.bg-t-lb');
const exit = document.querySelector('.close-btn');
// Carousel - Desktop Lightbox
const suivantDesktop = document.querySelector('.right-lb');
const precedentDesktop = document.querySelector('.left-lb');
let count = parseInt(display.innerText);
let numberShop = parseInt(numItem.innerText);
let numberCart = parseInt(numCart.innerText);
let totalShop = parseInt(total.innerText);
let price = parseInt(priceItem.innerText);
let indexGallery = 0;
let num = 0;

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
    thumb.addEventListener('click', gallery);
})

thumbImg.forEach(thumb => {
    thumb.addEventListener('click', gallery);
})

// suivantDesktop.addEventListener('click', gallery);
// precedentDesktop.addEventListener('click', gallery);

function gallery(){
    z = this.getAttribute('data-ac');
    indexGallery = z;
    for(let i = 0; i < thumbnail.length; i++){
        if (thumbnail[i].getAttribute('data-ac') === indexGallery){
            carrouselMobile[i].classList.add('active');
            bglb[i].classList.add('active-thumb');
            lbimg[i].classList.add('active');
            thumbnail[i].classList.add('active-1');
            main[i].classList.add('active');
            bg[i].classList.add('active-thumb');
            thumbImg[i].classList.add('active-1');
        }
        else {
            carrouselMobile[i].classList.remove('active');
            bglb[i].classList.remove('active-thumb');
            lbimg[i].classList.remove('active');
            thumbnail[i].classList.remove('active-1');
            main[i].classList.remove('active');
            bg[i].classList.remove('active-thumb');
            thumbImg[i].classList.remove('active-1');
        }
    }
}

function arrow(){
    i = parseInt(indexGallery);
    if (i < 3 && num === 1){
        bglb[indexGallery].classList.remove('active-thumb');
        lbimg[indexGallery].classList.remove('active');
        thumbnail[indexGallery].classList.remove('active-1');
        main[indexGallery].classList.remove('active');
        bg[indexGallery].classList.remove('active-thumb');
        thumbImg[indexGallery].classList.remove('active-1');
        carrouselMobile[indexGallery].classList.remove('active');
        indexGallery++;
        bglb[indexGallery].classList.add('active-thumb');
        lbimg[indexGallery].classList.add('active');
        thumbnail[indexGallery].classList.add('active-1');
        main[indexGallery].classList.add('active');
        bg[indexGallery].classList.add('active-thumb');
        thumbImg[indexGallery].classList.add('active-1');
        carrouselMobile[indexGallery].classList.add('active');
    }
    //  retourner au debut du tableau
    else if(i === 3 && num === 1){
        bglb[indexGallery].classList.remove('active-thumb');
        lbimg[indexGallery].classList.remove('active');
        thumbnail[indexGallery].classList.remove('active-1');
        main[indexGallery].classList.remove('active');
        bg[indexGallery].classList.remove('active-thumb');
        thumbImg[indexGallery].classList.remove('active-1');
        carrouselMobile[indexGallery].classList.remove('active');
        indexGallery = 0;
        bglb[indexGallery].classList.add('active-thumb');
        lbimg[indexGallery].classList.add('active');
        thumbnail[indexGallery].classList.add('active-1');
        main[indexGallery].classList.add('active');
        bg[indexGallery].classList.add('active-thumb');
        thumbImg[indexGallery].classList.add('active-1');
        carrouselMobile[indexGallery].classList.add('active');
    }
    else if (i > 0 && num === 2){
        bglb[indexGallery].classList.remove('active-thumb');
        lbimg[indexGallery].classList.remove('active');
        thumbnail[indexGallery].classList.remove('active-1');
        main[indexGallery].classList.remove('active');
        bg[indexGallery].classList.remove('active-thumb');
        thumbImg[indexGallery].classList.remove('active-1');
        carrouselMobile[indexGallery].classList.remove('active');
        indexGallery--;
        bglb[indexGallery].classList.add('active-thumb');
        lbimg[indexGallery].classList.add('active');
        thumbnail[indexGallery].classList.add('active-1');
        main[indexGallery].classList.add('active');
        bg[indexGallery].classList.add('active-thumb');
        thumbImg[indexGallery].classList.add('active-1');
        carrouselMobile[indexGallery].classList.add('active');
    }
    else if (i === 0 && num === 2){
        bglb[indexGallery].classList.remove('active-thumb');
        lbimg[indexGallery].classList.remove('active');
        thumbnail[indexGallery].classList.remove('active-1');
        main[indexGallery].classList.remove('active');
        bg[indexGallery].classList.remove('active-thumb');
        thumbImg[indexGallery].classList.remove('active-1');
        carrouselMobile[indexGallery].classList.remove('active');
        indexGallery = 3;
        bglb[indexGallery].classList.add('active-thumb');
        lbimg[indexGallery].classList.add('active');
        thumbnail[indexGallery].classList.add('active-1');
        main[indexGallery].classList.add('active');
        bg[indexGallery].classList.add('active-thumb');
        thumbImg[indexGallery].classList.add('active-1');
        carrouselMobile[indexGallery].classList.add('active');
    }
}


suivantDesktop.addEventListener('click', () => {
    num = 1;
    arrow();
});
precedentDesktop.addEventListener('click', () => {
    num = 2;
    arrow();
});


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

document.onclick = function(e) {
    if(!shopping.contains(e.target) && !cart.contains(e.target)) {
        cart.classList.remove('active-cart');
        shop.classList.remove('active');
    } else {
        return;
    }
}

trash.addEventListener('click', () => {
    if (numberShop > 0){
        placeholder.classList.add('active-shop');
        shopItems.classList.remove('active-shop');
        cartTotal.classList.remove('active-shop');
        price = 0;
        numberShop = 0;
        totalShop = 0;
    }
})

// Add to cart

buy.addEventListener('click', () => {
    price = 125;
    if (count > 0 && numberShop < 99) {
        numberShop += count;
        totalShop = price * numberShop;
        if (numberShop >= 99) {
            numberShop = 99;
            totalShop = price * numberShop;
        }
        placeholder.classList.remove('active-shop');
        shopItems.classList.add('active-shop');
        cartTotal.classList.add('active-shop');
    }
    else {
        numCart.classList.remove('active');
        return;
    }
    numItem.innerText = numberShop;
    numCart.innerText = numberShop;
    priceItem.innerText = `$${price}.00 x`;
    total.innerText = `$${totalShop}.00`;
})

// Add or remove item - Limits to 99

buttons.forEach(button => {
    display.innerText = count;
    button.addEventListener('click', () => {
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

// Carousel - Mobile

suivantMobile.addEventListener('click', () => {
    num = 1;
    arrow();
});

precedentMobile.addEventListener('click', () => {
    num = 2;
    arrow();
});