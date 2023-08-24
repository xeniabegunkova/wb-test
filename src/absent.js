const absent = document.getElementById('absent');

const generateAbsent = () => {
    return (absent.innerHTML = cartItemsData.map((x) => {
        let { id, absent, name, color, size } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div class="absent__card"  id=product-id-${id}>
        <div class="absent__card-container" id="container">
        <img src=${absent} alt="img" class="absent__image">
	
		<div class="absent__info">
			<h5 class="absent__name">${name}</h5>
			<div class="absent__item">
				<p class="absent__items">${color}</p>
				<p class="absent__items">${size}</p>
                </div>
			</div>
            <div class="adsent__button" id="button">
            <button class="card__counter-like absent__like"></button>
            <button class="card__counter-delete absent__delete"></button>
            </div>
            </div>
        `
    })
        .join(''))
}

generateAbsent();
