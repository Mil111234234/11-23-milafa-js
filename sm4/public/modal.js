

function OpenModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('open');
   console.log(modal);
}

function CloseModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('open');
   console.log(modal);
}