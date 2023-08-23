total = document.getElementById('total');


let TotalAmount = () => {
	if (basket.length !== 0) {
		let amount = basket
			.map((x) => {
				let { id, item } = x;
				let filterData = cartItemsData.find((x) => x.id === id);
				return filterData.price * item;
			})
			.reduce((x, y) => x + y, 0);

		let amountWithoutSale = basket
			.map((x) => {
				let { id, item } = x;
				let filterData = cartItemsData.find((x) => x.id === id);
				return filterData.sale * item;
			})
			.reduce((x, y) => x + y, 0);

		let sale = basket
			.map((x) => {
				let { id, item } = x;
				let filterData = cartItemsData.find((x) => x.id === id);
				return (filterData.price - filterData.sale) * item;
			})
			.reduce((x, y) => x + y, 0);

		let goods = basket.map((x) => x.item).reduce((x, y) => x + y, 0);


		return (total.innerHTML = `
		<div class="cart__details">
		<h4 class="cart__details-title">Итого</h4>
		<p class="cart__details-price">${amount} сом</p>
	</div>
	<div class="cart__details">
	<p class="cart__details-info" id="goods">${goods} товара</p>
	<p class="cart__details-info">${amountWithoutSale} сом</p>
</div>
<div class="cart__details">
	<p class="cart__details-info">Скидка</p>
	<p class="cart__details-info">${sale} сом</p>
</div>
<div class="cart__details">
	<p class="cart__details-info">Доставка</p>
	<p class="cart__details-info">Бесплатно</p>
</div>
	`);
	} else return;
};

TotalAmount();


