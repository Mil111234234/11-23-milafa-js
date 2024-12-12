const makeRequestModal = document.querySelector('#make_request');

//модалка
function showModal(){
    const makeRequestModal = document.getElementById('make_request');
    makeRequestModal.showModal();
    makeRequestModal.classList.add('open');
}

function closeModal(){
    const makeRequestModal = document.getElementById('make_request');
    makeRequestModal.close();
    makeRequestModal.classList.remove('open');
}


//аккоддион
function openAccordion(element){
    const accordion =  element.closest('.accordion');
    if(accordion.classList.contains('open')){
        accordion.classList.remove('open');
    } else {
        accordion.classList.add('open');
    }
}

//запрос

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value.trim(); 


  if (email === "") {
    alert("Пожалуйста, введите email.");
    return; 
  }

 
  if (!email.includes('@') || !email.includes('.')) {
    alert("Некорректный формат email.");
    return; 
  }

  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
  })
  
  .then(response => {
    if (!response.ok) {
      console.error('Ошибка:', response.status);
      alert("Ошибка отправки. Попробуйте еще раз."); 
      return;
    }
    return response.json();
  })
  .then(data => {
    console.log('Успех:', email);
    alert("Email отправлен!"); 
    closeModal();
  })
  .catch(error => {
    console.error('Ошибка:', error);
    alert("Ошибка отправки. Попробуйте еще раз."); 
  });
}


//вылез модалки при пересечении КОНТАКТЫ

const modal = document.getElementById('make_request');
const emailInput = document.querySelector('input[name="email"]');
const email = emailInput.value.trim(); 
    
      const observer = new IntersectionObserver(entries => {

      
        
          entries.forEach(entry => {
              if (entry.intersectionRatio >= 0.5) {
                const makeRequestModal = document.getElementById('make_request');
                makeRequestModal.showModal();
                makeRequestModal.classList.add('open');
                  observer.disconnect();

                 
              }
          });
      }, { threshold: 0.5 }); 
      

      window.addEventListener('load', () => {
          const targetElement = document.querySelector('.contacts');
          observer.observe(targetElement); 

          
      });
      















  


