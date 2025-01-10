const changeLogoBtn = document.querySelector('.changeLogo-btn');
const logo = document.querySelector('.logo');

changeLogoBtn.addEventListener('click', () => {
    logo.src = 'oddity-logo.png';
});