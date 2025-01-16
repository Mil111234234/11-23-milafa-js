function openMenu() {
    const head = document.querySelector(".head");
    if(head.style.height === "70px"){
        head.style.height = "150px"
    } else{
        head.style.height = "70px"
    }
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});




function toggleAccordion(element) {
    const contentAcc = element.closest(".content-accordion"); 
    const textAcc = contentAcc.querySelector(".main-accordion"); 
    const imgAcc = contentAcc.querySelector("img"); 
  
    if (contentAcc.style.height === "125px") { 
      contentAcc.style.height = "30px"; 
      textAcc.style.height = "0px"; 
      imgAcc.style.transform = "rotate(0deg)";
     
    } else {
      contentAcc.style.height = "125px";
      textAcc.style.height = "80px"; 
      imgAcc.style.transform = "rotate(40deg)";
    }
  }


  function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add('open');
    console.log(modal);
  }

  
  function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove('open');
    console.log(modal);
  }