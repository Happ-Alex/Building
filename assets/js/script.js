// Sidebar navigation panel 
let sidebarButton = document.querySelector('.sidebar-button');
let sidebar = document.querySelector('.sidebar');
let mainBody = document.querySelector('.main');
let screenHide = document.querySelector('.screen-hider');

sidebarButton.addEventListener('click', function(e) {
  sidebarButton.classList.toggle('active');
  sidebar.classList.toggle('active');
  mainBody.classList.toggle('active');
  screenHide.classList.toggle('active');
});

const navigationLink = document.querySelectorAll(".sidebar-nav__item")
const navigationPage = document.querySelectorAll(".section")

navigationLink.forEach((link,index) => {
  link.addEventListener("click", (nav) => {
    navigationLink.forEach((f) => f.classList.remove("active"));
    navigationPage.forEach((page) => {
      page.classList.add("hidden");
  });
    nav.target.classList.add("active")
    navigationPage[index].classList.remove("hidden")
    sidebarButton.classList.remove('active');
    sidebar.classList.remove('active');
    mainBody.classList.remove('active');
    screenHide.classList.remove('active');
  });
})

let navLink = document.querySelectorAll(".header__nav-item")

navLink.forEach((ection) => {
  ection.addEventListener("click", (e) => {
    e.target.classList.add('active')
  })
})