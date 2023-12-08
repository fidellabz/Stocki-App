const addStore = document.querySelector('.add-store');
const modal = document.querySelector('.backdrop');
const closeModal = document.querySelector('.close');

addStore.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
})