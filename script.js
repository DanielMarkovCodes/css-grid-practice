document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.querySelector('.Home');
    const projectsButton = document.querySelector('.Projects');
    const contactInfoButton = document.querySelector('.Contact-Info');

    const headerContainer = document.querySelector('.header-container');
    const gridContainer = document.querySelector('.grid-container');
    const menu = document.querySelector('.menu');

    projectsButton.addEventListener('click', function () {
        headerContainer.style.display = 'block';
        gridContainer.style.display = 'grid';
        menu.style.top = '15px'; // Adjust top position
    });

    homeButton.addEventListener('click', function () {
        headerContainer.style.display = 'none';
        gridContainer.style.display = 'none';
        menu.style.top = '15px'; // Adjust top position
    });

    const contactButton = document.querySelector('.Contact');
    contactButton.addEventListener('click', function () {
    headerContainer.style.display = 'none';
    gridContainer.style.display = 'none';
    menu.style.top = '15px'; // Adjust top position
});

});
