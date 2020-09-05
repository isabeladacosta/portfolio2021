console.log("index");
getURL();
/*
import Cursor from './cursor.js';

const cursor = new Cursor(document.querySelector('.cursor'));

[...document.querySelectorAll('a')].forEach(el => {
    el.addEventListener('mouseenter', () => cursor.emit('enter'));
    el.addEventListener('mouseleave', () => cursor.emit('leave'));
});

function scrollWin() {
    window.scrollTo(0, 500);
  }

*/
function getURL() {

    const body = document.getElementsByTagName("body")[0];
    console.log(body.style.backgroundColor);
    console.log("The URL of this page is: " + window.location.href);
}