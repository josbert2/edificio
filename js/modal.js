var modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
        $("#" + modal).addClass('is-open')
    }
});

var closeBtns = [...document.querySelectorAll(".close-contact")];
closeBtns.forEach(function(btn) {
    btn.onclick = function() {

        var modal = btn.closest('.modal');
        modal.parentElement.classList.remove('is-open');
        console.log(modal.parentElement)


    }
});

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.classList.remove('is-open');
    }
}