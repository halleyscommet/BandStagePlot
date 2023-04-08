// Get the modal element
const modal = document.querySelector('.modal');

// Get the button that opens the modal
const openModalBtn = document.querySelector('#open-modal-btn');

// Get the <span> element that closes the modal
const closeBtn = modal.querySelector('.close');

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', () => {
  // modal.style.display = 'none';
  $('.modal').fadeOut();
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    // modal.style.display = 'none';
    $('.modal').fadeOut();
  }
});