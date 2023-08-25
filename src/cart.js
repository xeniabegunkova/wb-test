const cart = document.getElementById('cart');
let basket = JSON.parse(localStorage.getItem('data')) || [];

const generateCart = () => {
	return (cart.innerHTML = cartItemsData.map((x) => {
		let { id, img, name, color, size, stock, company, price, sale, left } = x;
		let search = basket.find((x) => x.id === id) || [];
		return `
		<div id=product-id-${id} class="card">
		<p class="card__input">
			<label class="cart__label-card"><input type="checkbox" />
				<span></span>
			</label>
		</p>
	
		<img src=${img} alt="img" class="card__image">
	
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
			<div onclick="decrement(${id})" class="counter__button counter__button_min ${search.item === 1 ? "counter__button_min-grey" : ""}" id="min">
				</div>
				<div id=${id} class="counter__input">
					${search.item === undefined ? 0 : search.item}
				</div>
				<div onclick="increment(${id})" class="counter__button counter__button_plus">

				</div>
			</div>
			<p  class="card__counter-text">
				${left}
			</p>
			<div class="card__counter-buttons">
				<button class="card__counter-like" aria-label="Нравится" id="like" onclick="changeColor()"></button>
				<button class="card__counter-delete" aria-label="Удалить"></button>
			</div>
		</div>
	
		<div class="card__price">
			<p class="price">${price} сом</p>
			<p class="price-sale">${sale} сом</p>
		</div>
	</div>
		`
	})
		.join(""))
}

generateCart();

function initFav() {
	let items = document.getElementsByClassName('card__counter-like');
	console.log(items)
	for (var x = 0; x < items.length; x++) {
		let item = items[x];
		console.log(item)
		item.addEventListener('click', function (e) {
			console.log('click')
			e.preventDefault();
			e.target.classList.toggle('active');
		});
	}
}

initFav();

const increment = (id) => {
	const selectedItem = id;
	const search = basket.find((x) => x.id === selectedItem.id); //check all objects one by one
	const searchTwo = cartItemsData.find((x) => x.id === selectedItem.id);
	console.log(searchTwo)

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
			left: '',
		});
	} else if (searchTwo.left !== '') {
		while (search.item < 2) {
			search.item += 1;
		}
	}
	else {
		search.item += 1;
	}

	update(selectedItem.id);

	localStorage.setItem('data', JSON.stringify(basket));
}

const decrement = (id) => {
	const selectedItem = id;
	const search = basket.find((x) => x.id === selectedItem.id); //check all objects one by one

	if (search === undefined) {
		return
	} else if (search.item === 1) {
		return
	} else {
		search.item -= 1;
	}

	update(selectedItem.id);

	basket = basket.filter((x) => x.item !== 0); //remove items from localstore if they are zero 

	localStorage.setItem('data', JSON.stringify(basket));
}

const update = (id) => {
	const search = basket.find((x) => x.id === id);
	document.getElementById(id).innerHTML = search.item;
	calculation();
	TotalAmount();
	changeText();
	generateCart();
}

const calculation = () => {
	const iconCart = document.getElementById('amount');
	iconCart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation(); //everytime update calculation is work


