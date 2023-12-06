// manage store js
const modal = document.querySelector('.backdrop');
const addStore = document.querySelector('.add-store');
const addManager = document.querySelector('.add-manager');
const save = document.querySelector('.save');
const closeModal = document.querySelector('.close ');
const saveStore = document.querySelector('.saveStore');

addStore.addEventListener('click', () => {
	modal.classList.remove('hidden');
})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
})

save.addEventListener('click', () => {
    saveStore.classList.remove('hidden');
    modal.classList.add('hidden');
    document.querySelector('.pushdown').classList.add('hidden');
    document.querySelector('.text-center').classList.add('hidden');
})