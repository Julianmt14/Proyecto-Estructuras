// Main navigation and initialization
document.addEventListener('DOMContentLoaded', () => {
    // Setup navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;

            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${targetSection}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.querySelector('[data-section="queue"]').click();
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('[data-section="stack"]').click();
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('[data-section="linkedlist"]').click();
                    break;
                case '4':
                    e.preventDefault();
                    document.querySelector('[data-section="tree"]').click();
                    break;
            }
        }
    });

    // Show welcome message
    console.log('%c🖥️ Simulador de Sistema Operativo', 'font-size: 20px; color: #3498db; font-weight: bold;');
    console.log('%cImplementación de estructuras de datos en JavaScript', 'font-size: 14px; color: #7f8c8d;');
    console.log('%cAtajos de teclado:', 'font-size: 12px; color: #2c3e50; font-weight: bold;');
    console.log('  Ctrl+1: Cola (Queue)');
    console.log('  Ctrl+2: Pila (Stack)');
    console.log('  Ctrl+3: Lista Enlazada');
    console.log('  Ctrl+4: Árbol');
});
