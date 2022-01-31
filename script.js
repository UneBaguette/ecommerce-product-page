const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".btn-burger");
const contactBtn = document.querySelector(".btn");
const cart = document.querySelector('.cart');
const buttons = document.querySelectorAll('.number > img');
const display = document.querySelector('.number > span');


console.log(contactBtn);

// Bouton burger mobile
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-active");
  burger.classList.toggle("toggle");
});


cart.addEventListener('click', () => {

});


// Add or remove item 


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