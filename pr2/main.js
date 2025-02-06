document.addEventListener('DOMContentLoaded', function() { 
    const sliderBody = document.querySelector('.slider__body'); 
    const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
    const sliderDots = Array.from(document.querySelectorAll('.slider__dot')); 
    const sliderNav = document.querySelector('.slider__dots'); 
    const sliderContent = document.querySelector('.slider__content'); 

    let currentIndex = 0; 

    
    function scrollSlider(index) {
        const itemWidth = sliderItems[0].offsetWidth; 
        sliderContent.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index; 
    }

   
    function updateActiveClasses(index) {
    
        sliderItems.forEach(item => item.classList.remove('slider__item--active')); 
        sliderDots.forEach(dot => dot.classList.remove('slider__dot--active')); 

        sliderItems[index].classList.add('slider__item--active'); 
        sliderDots[index].classList.add('slider__dot--active'); 
    }

   
    sliderBody.addEventListener('click', function(event) {
        const targetArrow = event.target.closest('.slider__arrow'); 
        if (!targetArrow) return;

        let nextIndex = currentIndex; 

        if (targetArrow.classList.contains('slider__arrow--left')) { 
            nextIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length; 
        } else if (targetArrow.classList.contains('slider__arrow--right')) { 
            nextIndex = (currentIndex + 1) % sliderItems.length; 
        }

        updateActiveClasses(nextIndex);  
        scrollSlider(nextIndex);       
    });


    sliderNav.addEventListener('click', function(event) {
        const targetDot = event.target.closest('.slider__dot'); 
        if (!targetDot) return;

        const index = parseInt(targetDot.dataset.index);
        updateActiveClasses(index);  
        scrollSlider(index);        
    });

    
    updateActiveClasses(0);
    scrollSlider(0);
});