
function toggleNavList(e) {
    const button = document.querySelector('.hamburger-btn');
    const navList = document.getElementById("hamburger-list");
    const body = document.getElementsByTagName('body')[0];

    button.classList.toggle('close-icon');
    navList.classList.toggle('block');
    body.classList.toggle('scroll-off');
}