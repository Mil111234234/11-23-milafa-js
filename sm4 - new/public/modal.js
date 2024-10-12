function clearALLheading() {
  const wrapper = document.querySelector('.wrapper');
  while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
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
}


