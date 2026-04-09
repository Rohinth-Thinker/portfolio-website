
function handleNavigation(e, url) {
    if (e.target.closest('a')) {
        return;
    }

    window.open(url, '_blank');
}