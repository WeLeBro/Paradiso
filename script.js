// MENU BUTTON

document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.mainmenu')?.classList.add('open');
});

document.getElementById('menu-btn2').addEventListener('click', function() {
    document.querySelector('.mainmenu')?.classList.remove('open');
});

// SCROLL REVEAL

document.addEventListener("DOMContentLoaded", () => {
    const agendaItems = document.querySelectorAll(".agenda-item");

    const observerOptions = {
        root: null,
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target); // Stop observing once it's revealed
            }
        });
    }, observerOptions);

    agendaItems.forEach(item => {
        observer.observe(item);
    });
});

// H1 ANIMATION

const text = document.querySelector('h1');
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}