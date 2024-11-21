
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close-btn');

function openModal() {
  modal.style.display = 'flex';

  document.addEventListener('keydown', handleEscape);
}



function closeModal() {
  modal.style.display = 'none';

  document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

  iziToast.show({
    theme: 'dark',
    class: 'toastStyle',
    title: 'Thank you for your interest in cooperation!',
    message:
      'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
    position: 'center',
    timeout: 0,
    close: true,
    backgroundColor: 'rgba(28,29,32,1)',
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    progressBar: false,
    closeOnEscape: true,
    closeOnClick: false,
    overlayClose: true,
  });
  iziToast.show({
    class: 'izi',
    title: 'Error',
    message: `Error: ${error.message}`,
    position: 'center',
    progressBar: false,
    closeOnEscape: true,
    closeOnClick: true,
    timeout: 0,
  });