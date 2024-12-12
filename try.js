let currentIndex = 0;  
const slides = document.querySelectorAll('.slides img');  
const totalSlides = slides.length;  

// Show first image  
slides[currentIndex].classList.add('active');  

function showSlide(index) {  
    // Hide  images  
    slides.forEach((slide) => {  
        slide.classList.remove('active');  
    });  
    // current image  
    slides[index].classList.add('active');  
}  

function nextSlide() {  
    currentIndex = (currentIndex + 1) % totalSlides;   
    showSlide(currentIndex);  
}  

// Automatically change 5 seconds  
setInterval(nextSlide, 5000);
