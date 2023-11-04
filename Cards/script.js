// Devolverá todas las divisiones (en forma de array) que tengan la clase card
const cards =
    document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        removerClasesActivas();
        // Al hacer clic, se agregará la clase "active" a la card
        card.classList.add('active');
    });
});

// Función para quitar la clase "active"
function removerClasesActivas() {
    cards.forEach((card) => {
        card.classList.remove('active');
    });
}
