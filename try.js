let currentIndex = 0;  
const slides = document.querySelectorAll('.slides img');  
const totalSlides = slides.length;  

// Show the first image  
slides[currentIndex].classList.add('active');  

function showSlide(index) {  
    // Hide all images  
    slides.forEach((slide) => {  
        slide.classList.remove('active');  
    });  
    // Show the current image  
    slides[index].classList.add('active');  
}  

function nextSlide() {  
    currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides  
    showSlide(currentIndex);  
}  

// Automatically change image every 5 seconds  
setInterval(nextSlide, 5000);