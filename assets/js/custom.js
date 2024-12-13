const wrapping = document.querySelector('.wrapping');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const activeMenu = document.querySelector('.activeMenu');
// setting menu -----
function menuSettings() {
    wrapping.style.filter = 'blur(2px)'
    menu.classList.add('activeMenu');
    overlay.style.display = 'block';
}
// menu close -----
function closeMenu() {
    wrapping.style.filter = 'blur(0)'
    menu.classList.remove('activeMenu');
    overlay.style.display = 'none';
}
// overlay -----
overlay.addEventListener('click', function (){
    menu.classList.remove('activeMenu');
    userId.classList.remove('active_userId');
    wrapping.style.filter = 'blur(0)'
    overlay.style.display = 'none';
    locationBoxData.classList.remove('location_active');
    helpUsBox.classList.remove('helpBox_active');
    info_box.classList.remove('infoBox_active');
})
const userId = document.querySelector('.userId');
// user id -----
function user() {
    overlay.style.display = 'block';
    overlay.style.background = '#dddddd4b';
    userId.classList.add('active_userId');
}
// infoActive -----
const info_box = document.querySelector('.info_box')
function infoActive() {
    info_box.classList.add('infoBox_active');
    overlay.style.display = 'block';
    overlay.style.background = '#dddddd4b';
}
// helpUsActive -----
const helpUsBox = document.querySelector('.helpUs_box')
function helpUsActive() {
    overlay.style.display = 'block';
    overlay.style.background = '#dddddd4b';
    helpUsBox.classList.add('helpBox_active');
}
function closHelpUs() {
    helpUsBox.classList.remove('helpBox_active');
    overlay.style.display = 'none';
}
// location -----
const locations = document.querySelector('.location');
const locationBoxData = locations.querySelector('.menuBox_data');
console.log(locationBoxData);
function locationActive() {
    overlay.style.display = 'block';
    overlay.style.background = '#dddddd4b';
    locationBoxData.classList.add('location_active');
}