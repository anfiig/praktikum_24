export function slider(){
    document.addEventListener('DOMContentLoaded', function() {
        const sliders = document.querySelectorAll('.slider');

        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            const nextBtn = slider.querySelector('.slider-button_next');
            const prevBtn = slider.querySelector('.slider-button_prev');
            let currentSlide = 0;

            function setActiveSlide(index) {
                slides.forEach((slide, i) => {
                    slide.style.opacity = '0';
                    slide.classList.remove('active');
                });
                slides[index].classList.add('active');
                slides[index].style.opacity = '1';
            }

            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                setActiveSlide(currentSlide);
            });
        
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                setActiveSlide(currentSlide);
            });
        
            setActiveSlide(currentSlide);
        })
    });
    
}