const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);


function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }
    else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp(){
    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        let c = 0;
        const interval = setInterval(() => {
            c++;
            counter.innerText = c;
            if(c === target){
                clearInterval(interval);
            }
        }, 20);
    });
}

function reset() {
    counters.forEach(counter => counter.innerText = '0');
}