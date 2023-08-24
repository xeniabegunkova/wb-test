let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('.body');
let menuItems = document.querySelector('.header__menu-items');

let headerInput = document.querySelector('.header__ipnut');
let headerForm = document.querySelector('.header__form');
let headerTitle = document.querySelector('.header__title');
let headerButton = document.querySelector('.header__button');
let headerMenuButtons = document.querySelector('.header__menu-btn');

const input = document.getElementById('cart__checked-change');

const buttonDeliver = document.getElementById('button__deliver');


const btn = document.getElementById('btn');
const btnHide = document.getElementById('btn-hide');
const cartContainer = document.getElementById('cart');
const absentContainer = document.getElementById('absent');

const label = document.getElementById('label');
//burger menu


menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	menuItems.classList.toggle('active');
	body.classList.toggle('active');
})

//check all checkboxes

function checkAll(obj) {
	var items = obj.form.getElementsByTagName("input"),
		len, i;
	for (i = 0, len = items.length; i < len; i += 1) {
		if (items.item(i).type && items.item(i).type === "checkbox") {
			if (obj.checked) {
				items.item(i).checked = true;
			} else {
				items.item(i).checked = false;
			}
		}
	}
}


btn.addEventListener('click', () => {
	cartContainer.classList.toggle('hidden');
	btn.classList.toggle('hide');
	label.classList.toggle('hidden');
});

btnHide.addEventListener('click', () => {
	absentContainer.classList.toggle('hidden');
	btnHide.classList.toggle('hide');
});



