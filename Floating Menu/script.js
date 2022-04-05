const navigation = document.querySelector('.navigation');
const menu_toggle = document.querySelector('.menu-toggle');

menu_toggle.onclick = function() {
  navigation.classList.toggle('active')
}