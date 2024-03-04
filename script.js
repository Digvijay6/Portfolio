// menu icon
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


// smoothScroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// sticky nav bar
window.onscroll=()=>{
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:"80px",
    duration:2000,
    delay:100

});
ScrollReveal().reveal('.home-content, .heading', { origin:"top" });
ScrollReveal().reveal('.home-img, .education-box, .skill-box, .project-box, .contact form', { origin:"bottom" });
ScrollReveal().reveal('.home-content h1, .about img', { origin:"left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin:"right"});



