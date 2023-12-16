
const alertMenu = document.querySelector('.alert-menu');
const dropdown = document.querySelector(".dropdown");
const alertTrigger = document.querySelector('.notification-bell');
const section = document.querySelector('.section');

alertTrigger.addEventListener('click', () => {
    const expanded = alertTrigger.getAttribute('aria-expanded') === 'true' || false;
    alertTrigger.setAttribute('aria-expanded', !expanded);
    alertMenu.classList.toggle('hidden');
    
    alertMenu.setAttribute('aria-expanded', false);
    dropdown.classList.add('hidden');
})

section.addEventListener('click', () => {
    const expanded = section.getAttribute('aria-expanded') === 'true' || false;
    section.setAttribute('aria-expanded', !expanded);
    section.classList.toggle('hidden');

    alertMenu.setAttribute('aria-expanded', false);
    alertMenu.classList.add('hidden');
})

// close the header

const main = document.querySelector("main-header");
const cancelIcon = document.querySelector(".cancel");
cancelIcon.addEventListener('click', () => {
    main.classList.add("hidden");
})