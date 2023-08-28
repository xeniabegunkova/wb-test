const cart = document.getElementById('cart');
let basket = JSON.parse(localStorage.getItem('data')) || [];

const generateCart = () => {
	cart.innerHTML = cartItemsData.map((cardItem) => {
		let { id, img, name, color, size, stock, company, price, sale, left } = cardItem;
		let searchItem = basket.find((cardItem) => cardItem.id === id);

		const numOfAvailableItems = searchItem ? searchItem.left : left;

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
			<button onclick="decrement(${id})" 
			class="counter__button counter__button_min ${searchItem?.item === 1 ? "counter__button_min-grey" : ""}" 
			id="min" >
				</button>
				<div id=${id} class="counter__input">
					${searchItem?.item === undefined ? 1 : searchItem?.item}
				</div>
				<button onclick="increment(${id})" 
				class="counter__button counter__button_plus ${searchItem?.left === 0 || cardItem.left === 0 ? "grey-button" : ""}"
				id="plus">
				</button>
			</div>
			<p  class="card__counter-text ${searchItem?.left >= 25 ? "hidden" : ""}" id="textLeft">
				${searchItem?.left === 0 ? "Товара не осталось" : `Осталось ${numOfAvailableItems} шт.`}
			</p>
			<div class="card__counter-buttons">
				<button class="card__counter-like" aria-label="Нравится" id="like"></button>
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
		.join("")
}

generateCart();

function initFav() {
	let items = document.getElementsByClassName('card__counter-like');
	for (let x = 0; x < items.length; x++) {
		let item = items[x];
		item.addEventListener('click', function (e) {
			console.log('click')
			e.preventDefault();
			e.target.classList.toggle('active');
		});
	}
}

initFav();


const findItem = (id) => {
	return cartItemsData.find((cardItem) => cardItem.id === id)
}

const increment = (selectedItem) => {
	const item = basket.find((x) => x.id === selectedItem.id); //check all objects one by one
	const currentCount = Number(selectedItem.innerHTML);
	let buttonPlus = document.getElementById('plus');
	let textLeft = document.getElementById('textLeft');
	console.log(textLeft)

	if (!item) {
		basket.push({
			id: selectedItem.id,
			item: currentCount + 1,
			left: findItem(selectedItem.id).left - 1,
		});
	} else {
		if (item.left === 0) {
			buttonPlus.setAttribute('disabled', '');
			return;
		}
		const selectedItemIndex = basket.findIndex(el => el.id === selectedItem.id);
		console.log(selectedItemIndex)
		const updetedItem = { ...item, item: currentCount + 1, left: item.left - 1 };
		console.log(item)
		basket[selectedItemIndex] = updetedItem;
	}

	update(selectedItem.id);

	localStorage.setItem('data', JSON.stringify(basket));
}

const decrement = (selectedItem) => {
	let buttonMin = document.getElementById('min');

	const item = basket.find((x) => x.id === selectedItem.id); //check all objects one by one
	const currentCount = Number(selectedItem.innerHTML);

	if (!item) {
		basket.push({
			id: selectedItem.id,
			item: currentCount - 1,
			left: findItem(selectedItem.id).left + 1,
		});
	} else {
		if (item.item === 1) {
			buttonMin.setAttribute('disabled', '');
			return;
		}
		const selectedItemIndex = basket.findIndex(el => el.id === selectedItem.id);
		console.log(selectedItemIndex)
		const updetedItem = { ...item, item: currentCount - 1, left: item.left + 1 };
		console.log(item)
		basket[selectedItemIndex] = updetedItem;
	}

	update(selectedItem.id);

	localStorage.setItem('data', JSON.stringify(basket));

}

const update = (id) => {
	const item = basket.find((x) => x.id === id);
	document.getElementById(id).innerHTML = item.item;
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


