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

const paymentButton = document.getElementById('payment-button');
const paymentModal = document.getElementById('change-payment-popup');
const closeModal = document.getElementById('close');
const modalForm = document.getElementById('form');
const submitButton = document.getElementById('submit');
const radioButtons = document.querySelectorAll('input[name="credit-card"]');
const selectedOptionDiv = document.getElementById("selectedOption");

const adressButton = document.getElementById('adress-button');
const adress = document.getElementById('adress');
const adressModal = document.getElementById("change-adress-popup");
const closeAdress = document.getElementById("close-adress");
const firstButtonPopup = document.getElementById('first-btn');
const secondButtonPopup = document.getElementById('second-btn');
const formAdress = document.getElementById('adress-form');

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

/*hide*/
btn.addEventListener('click', (e) => {
	e.preventDefault();
	cartContainer.classList.toggle('hidden');
	btn.classList.toggle('hide');
});

btnHide.addEventListener('click', () => {
	absentContainer.classList.toggle('hidden');
	btnHide.classList.toggle('hide');
});

/*popup for card*/

paymentButton.addEventListener('click', function (e) {
	paymentModal.classList.add('popup_is-open');
	e.preventDefault()
});

closeModal.addEventListener('click', function (e) {
	paymentModal.classList.remove('popup_is-open');
	e.preventDefault();
})

submitButton.addEventListener('click', function (e) {
	displayRadioValue();
	paymentModal.classList.remove('popup_is-open');
	e.preventDefault();
})

let cardImage = {
	mir: './images/mir.svg',
	visa: './images/VISA.svg',
	mastercard: './images/mastercard.svg',
	maestro: './images/maestro.svg',
}

function displayRadioValue() {
	const ele = document.getElementsByName('credit-card');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("selectedOption").innerHTML
				= `<img src=${cardImage[ele[i].value]}>` + " 1234 56•• •••• 1234";
		console.log(ele[i].value)
	}
}

function displayRadioValueTwo() {
	const ele = document.getElementsByName('credit-card');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("xxxxx").innerHTML
				= `<img src=${cardImage[ele[i].value]}>` + " 1234 56•• •••• 1234";
		console.log(ele[i].value)
	}
}

/*popup for adress*/

adressButton.addEventListener('click', function (e) {
	adressModal.classList.add('popup_is-open');
	e.preventDefault()
});

closeAdress.addEventListener('click', function (e) {
	adressModal.classList.remove('popup_is-open');
	e.preventDefault();
})

firstButtonPopup.addEventListener('click', handleButtonFirstClick);
secondButtonPopup.addEventListener('click', handleButtonSecondClick);

function handleButtonFirstClick() {
	firstButtonPopup.classList.toggle('active-button');
	return formAdress.innerHTML = `
	<h5 class="adress__form">Мои адреса</h2>
	<label class="popup__label adress-label" for="adress-1">
	<input type="radio" id="adress-1" name="adress" value="г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1" class="popup__form-name popup__form-input"
		id="input-number" checked> г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
	<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
<label class="popup__label adress-label" for="adress-2">
<input type="radio" id="adress-2" name="adress" value="г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1" class="popup__form-name popup__form-input"
	id="input-number" checked> г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
<label class="popup__label adress-label" for="adress-3">
<input type="radio" id="adress-3" name="adress" value="г. Бишкек, улица Табышалиева, д. 57" class="popup__form-name popup__form-input"
	id="input-number" checked> г. Бишкек, улица Табышалиева, д. 57
<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
	`
}

function handleButtonSecondClick() {
	secondButtonPopup.classList.toggle('active-button')
	return formAdress.innerHTML = `
	<h5 class="adress__form">Мои адреса</h2>
	<label class="popup__label adress-label" for="adress-1">
	<input type="radio" id="adress-1" name="adress" value="Бишкек, улица Табышалиева, 57" class="popup__form-name popup__form-input"
		id="input-number" checked>Бишкек, улица Табышалиева, 57
	<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
<label class="popup__label adress-label" for="adress-2">
<input type="radio" id="adress-2" name="adress" value="Бишкек, улица Жукеева-Пудовкина, 77/1" class="popup__form-name popup__form-input"
	id="input-number" checked> Бишкек, улица Жукеева-Пудовкина, 77/1
<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
<label class="popup__label adress-label" for="adress-3">
<input type="radio" id="adress-3" name="adress" value="Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1" class="popup__form-name popup__form-input"
	id="input-number" checked> Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1
<button class="card__counter-delete adress-delete" id="delete"></button>
</label>
	`
}

const containetAdress = document.getElementById('adress');

const submitAdressButton = document.getElementById('adress-submit');

submitAdressButton.addEventListener('click', function (e) {
	displayRadioValueAdress()
	adressModal.classList.remove('popup_is-open');
	e.preventDefault();
})

function displayRadioValueAdress() {
	const ele = document.getElementsByName('adress');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("adress-container").innerHTML
				= ele[i].value;
	}
}
