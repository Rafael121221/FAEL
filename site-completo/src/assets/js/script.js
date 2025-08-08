// Este arquivo contém o código JavaScript para adicionar interatividade ao site, manipulando eventos e atualizando o DOM conforme necessário.

document.addEventListener('DOMContentLoaded', function() {
    // Código para manipulação de eventos e interatividade
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Exemplo de manipulação de formulário
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Lógica para enviar o formulário
            alert('Formulário enviado com sucesso!');
        });
    }
});