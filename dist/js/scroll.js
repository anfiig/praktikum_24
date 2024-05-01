export function scrollEvent(){
    const scrollButtons = document.querySelectorAll('a[href^="#"]');

    if (scrollButtons.length == 0){
        return
    }
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', function(e){
            e.preventDefault();

            const link = button.getAttribute('href');
            const anchor = document.querySelector(link);
            window.scrollBy({
                top: anchor.getBoundingClientRect().top,
                behavior: 'smooth'
            })
        });
    });
}