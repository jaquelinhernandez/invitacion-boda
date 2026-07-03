console.log("Proyecto iniciado");

// ===========================
// Cuenta regresiva
// ===========================

const weddingDate = new Date("August 29, 2026 14:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ===========================
// Animaciones al hacer scroll
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", ()=>{

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", ()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("fade-up");
    observer.observe(sec);
});

const btn=document.getElementById("musicBtn");

btn.onclick=()=>{
    if(audio.paused){
        audio.play();
        btn.innerHTML="🎵";
    }else{
        audio.pause();
        btn.innerHTML="🔇";
    }
};
const pantalla = document.getElementById("bienvenida");
const boton = document.getElementById("abrirInvitacion");
const audio = document.getElementById("audio");

const music = document.getElementById("bgMusic");

boton.addEventListener("click", () => {

    pantalla.classList.add("ocultarPantalla");

    document.body.classList.add("abierta");

    music.play().catch(error=>{
        console.log(error);
    });

});
function abrirInvitacion() {
    document.getElementById("portada").style.display = "none";
    document.getElementById("contenido").style.display = "block";

    const music = document.getElementById("bgMusic");
    music.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });
}