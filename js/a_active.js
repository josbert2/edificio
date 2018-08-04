function getURL(containerEL) {
    if (containerEL == null) {

    } else {
        let url = location.href,
            link = [...containerEL.querySelectorAll('a')];
        link.map(link => {
            if (link.href === url) return link.classList.add('active-link');
        })
    }

}

getURL(document.getElementById('menu-items'));