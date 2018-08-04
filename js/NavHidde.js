var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        if (currentScrollPos < 300) {
            document.getElementById("nav").style.transform = "translateY(0px)";
        }
    } else {
        document.getElementById("nav").style.transform = "translateY(0px)";
    }
    prevScrollpos = currentScrollPos;
}

var wrapperMenu = document.querySelector('.wrapper-menu');

(function() {

    var Menu = (function() {
        var burger = document.querySelector('.wrapper-menu');
        var menu = document.querySelector('.menu');
        var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');
        var menuLink = $('.menu__link');


        var active = false;
        var t = function() {
            if (!active) {
                menu.classList.add('menu--active');
                menuList.classList.add('menu__list--active');
                brand.classList.add('menu__brand--active');
                burger.classList.add('open');

                $('header.nav ul li.logo').css('padding-left', '0');
                $(window).off("scroll");
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.add('menu__item--active');
                }

                active = true;
            } else {
                menu.classList.remove('menu--active');
                menuList.classList.remove('menu__list--active');
                brand.classList.remove('menu__brand--active');
                burger.classList.remove('open');
                $('header.nav ul li.logo').css('padding-left', '1.5rem');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.remove('menu__item--active');
                }

                active = false;
            }
        };
        var toggleMenu = function() {
            if (!active) {
                menu.classList.add('menu--active');
                menuList.classList.add('menu__list--active');
                brand.classList.add('menu__brand--active');
                burger.classList.add('open');

                $('header.nav ul li.logo').css('padding-left', '0');
                $(window).off("scroll");
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.add('menu__item--active');
                }

                active = true;
            } else {
                menu.classList.remove('menu--active');
                menuList.classList.remove('menu__list--active');
                brand.classList.remove('menu__brand--active');
                burger.classList.remove('open');
                $('header.nav ul li.logo').css('padding-left', '1.5rem');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.remove('menu__item--active');
                }

                active = false;
            }
        };

        var bindActions = function() {
            burger.addEventListener('click', toggleMenu, false);
            for (var i = 0; i < menuLink.length; i++) {
                menuLink[i].addEventListener('click', t, false);
            }


        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Menu.init();

}());