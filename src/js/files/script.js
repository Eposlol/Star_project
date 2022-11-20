// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu-body");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});



var theToggle = document.getElementById('toggle');


// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   mobileMenuHeight()
   return false;
}
const iPhoneParalax = document.querySelector('.contact-form__body')
if(navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    iPhoneParalax.classList.add('iPhone')
} else {
    //document.location.reload();
  iPhoneParalax.classList.add('no-iPhone')
}

const mobileMenuHeight = () => {
    const headerBlock = document.querySelector('.header__container')
    const mobileMenuBlock = document.querySelector('.nav-list')
    const headerHeight = headerBlock.offsetHeight
    if (!document.querySelector('.menu-body').classList.contains("sticky")) {
        return mobileMenuBlock.style.height = `calc(100vh - ${headerHeight}px - 50px)`
    } else {
        return mobileMenuBlock.style.height = `calc(100vh - 50px)`
    }
}
 