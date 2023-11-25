var modalOpen = document.querySelector('#open');
var modal = document.querySelector('.modal');
var modalForm = document.querySelector('#form');
var modalClose = document.querySelector('#close');


modalOpen.addEventListener('click', () => {
    modal.style.display = "flex";

    setTimeout(() => {
        modalForm.style.left = "50%";
    }, 300);
});


modalClose.addEventListener('click', () => {
    modal.style.display = "none";
});
