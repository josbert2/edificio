var ContentBtns = [...document.querySelectorAll(".apart")];
ContentBtns.forEach(function(btnContent) {
    btnContent.onclick = function() {
        var Content = btnContent.getAttribute('data-id');
        $("#" + Content).addClass('is-open')
    }
});

var closeBtnsContent = [...document.querySelectorAll(".close-content")];
closeBtnsContent.forEach(function(btnContent) {
    btnContent.onclick = function() {

        var modalContent = btnContent.closest('.content-content');
        modalContent.parentElement.classList.remove('is-open');
        console.log(modalContent.parentElement)


    }
});

window.onclick = function(event) {
    if (event.target.className === "content-content") {
        event.target.classList.remove('is-open');
    }
}