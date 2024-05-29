const cartIcon = document.querySelector('.cart-icon');
const modalContainer = document.querySelector('.modal');
// let isModalOpen = false;


cartIcon.addEventListener("click", () => {
    modalContainer.classList.toggle('hidden');
});

