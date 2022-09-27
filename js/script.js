"use strict"
const burgerMenu = document.querySelector(".header__menu-burger");
const menuBody = document.querySelector(".menu-body");
const logoActive = document.querySelector(".header__logo");
const bodyActive = document.querySelector(".body");
console.log(menuBody);

	burgerMenu.addEventListener("click", function(){
		burgerMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		logoActive.classList.toggle('active');
		bodyActive.classList.toggle('active');
	})

