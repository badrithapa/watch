let h = document.querySelector('#hour');
let m = document.querySelector('#min');
let s = document.querySelector('#sec');

function time() {
    let d = new Date();
    h.innerHTML = (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours();
    m.innerHTML = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes();
    s.innerHTML = (d.getSeconds() < 10) ? `0${d.getSeconds()}` : d.getSeconds();
}
time();
setInterval(time, 1000);