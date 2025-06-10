console.log("JAVASCRIPT LOADED");

function toggleNavList(e) {
    const buttonImg = e.currentTarget.children[0];
    const navList = document.getElementById("hamburger-list");
    const body = document.getElementsByTagName('body')[0];

    buttonImg.classList.toggle('close-icon');
    navList.classList.toggle('block');
    body.classList.toggle('scroll-off');
}

function disappearNavList() {
    const hamburgerButton = document.querySelector('.hamburger-btn')
    const buttonChildren = hamburgerButton.children;
    const e = {currentTarget: {children: buttonChildren}};
    toggleNavList(e);
}