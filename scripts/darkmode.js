
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.querySelector('.theme-switch');

if(darkmode === 'active') enableDarkmode(); 

function toggleDarkmode() {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
}

function enableDarkmode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

function disableDarkmode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}