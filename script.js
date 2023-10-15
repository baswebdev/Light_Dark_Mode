function toggleBackground() {
    const body = document.body;
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        body.classList.add('dark-mode');
    } else {
        body.style.backgroundColor = 'white';
        body.classList.remove('dark-mode');
    }
}
