let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('.body');
let menuItems = document.querySelector('.header__menu-items');

let headerInput = document.querySelector('.header__ipnut');
let headerForm = document.querySelector('.header__form');
let headerTitle = document.querySelector('.header__title');
let headerButton = document.querySelector('.header__button');
let headerMenuButtons = document.querySelector('.header__menu-btn');

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

/*let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
	return (cart.innerHTML = cartItems.map((el) => {
		let { id, img, name, color, size, stock, company, price, sale, left } = el;
		let search = basket.find((el) => el.id === id) || [];
		return `
		<div class="card" id=product-id-${id}>
		<p class="card__input">
			<label class="cart__label-card"><input type="checkbox" />
				<span></span>
			</label>
		</p>
		
		<img src="${img}" alt="img" class="card__image">
		
		<div class="card__info">
			<h5 class="card__title">${name}</h5>
			<div class="card__item">
				<p class="card__items">${color}</p>
				<p class="card__items">${size}</p>
			</div>
			<p class="card__items grey">${stock}</p>
			<div class="grey__container">
				<p class="card__items grey">${company}</p>
				<img class="card__items-img" src="./images/icon2.svg">
			</div>
		</div>
		
		<div class="card__counter">
			<div class="counter">
				<div class="counter__button counter__button_min">
					<img class="counter__image" src="./images/−.svg" alt="minus" onclick="decrement(${id})">
				</div>
				<div class="counter__input" id=${id}>
				${search.item === undefined ? 0 : search.item}
				</div>
				<div class="counter__button counter__button_plus">
					<img class="counter__image" src="./images/+.svg" alt="plus" onclick="increment(${id})">
				</div>
			</div>
			<p class="card__counter-text">
			${left}
			</p>
			<div class="card__counter-buttons">
				<div class="card__counter-like">
					<img class="icons" src="./images/like.svg" alt="icon">
				</div>
				<div class="card__counter-delete">
					<img class="icons" src="./images/del.svg" alt="icon">
				</div>
			</div>
		</div>
		
		<div class="card__price">
			<p class="price">${price}</p>
			<p class="price-sale">${sale}</p>
		</div>
		</div>`
	}).join(""))
}

generateShop();

let increment = (id) => {
	let search = basket.find((el) => el.id === id);

	if (search === undefined) {
		basket.push({
			id: id,
			item: 1,
		});
	} else {
		search.item += 1;
	}

	console.log(basket);
	update(id);
	localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
	let search = basket.find((el) => el.id === id);

	if (search === undefined) return;
	else if (search.item === 0) return;
	else {
		search.item -= 1;
	}

	update(id);
	basket = basket.filter((x) => x.item !== 0);
	console.log(basket);
	localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
	let search = basket.find((el) => el.id === id);
	document.getElementById(id).innerHTML = search.item;
	calc();
};

let calc = () => {
	let cartIcon = document.getElementById("amount");
	cartIcon.innerHTML = basket.map((el) => el.item).reduce((el, y) => el + y, 0);
};

calc();*/