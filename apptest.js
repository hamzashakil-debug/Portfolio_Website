const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener("DOMContentLoaded", function () {
    const technologyFilterInput = document.getElementById("technologyFilter");
  
    technologyFilterInput.addEventListener("input", function () {
      filterProjects();
    });
  });
  
  function filterProjects() {
    const technologyFilterInput = document.getElementById("technologyFilter");
    const filterValue = technologyFilterInput.value.toLowerCase();
  
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach((card) => {
      const technologies = card.dataset.technologies.toLowerCase();
  
      if (technologies.includes(filterValue) || filterValue === "") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  