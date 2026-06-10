let currentSlide = 0;

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function changeSlide(direction){

    currentSlide += direction;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

function goToSlide(index){
    currentSlide = index;
    showSlide(currentSlide);
}

// CAMBIO AUTOMÁTICO
setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);