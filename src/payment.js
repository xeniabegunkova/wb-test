const payment = document.getElementById('payment');

const first = basket[0].item;
const second = basket[1].item;
const third = basket[2].item;

const generatePay = () => {
    return (payment.innerHTML =
        `
    <div class="payment__grid-item">
        <h5 class="payment__grid_title">
            Стоимость доставки
        </h5>
        <p class="payment__grid_info">Бесплатно</p>
    </div>
    <div class="payment__grid-item">
        <h5 class="payment__grid_title">
            5—6 февраля
        </h5>
        <div class='payment__info'>
        <p class="payment__grid_info">
        <img class="payment__grid_img" src="../images/img1.svg" alt="img">
        <span id="quantity" class="payment__grid__amount">
        ${third}
        </span>
        </p>
        <p class="payment__grid_info">
        <img class="payment__grid_img" src="../images/img2.svg" alt="img">
        <span id="quantity" class="payment__grid__amount">
        ${second < 100 ? second : Math.floor(second / 2)}
        </span>
        </p>
        <p class="payment__grid_info">
        <img class="payment__grid_img" src="../images/img3.svg" alt="img">
        <span id="quantity" class="payment__grid__amount">
        ${first}
        </span>
        </p>
        </div>
    </div>
    <div class="payment__grid-item" id='tt'>
        <h5 class="payment__grid_title">
            7—8 февраля
        </h5>
        <p class="payment__grid_info">
        <img class="payment__grid_img" src="../images/img2.svg" alt="img">
        <span id="quantity" class="payment__grid__amount">
        ${Math.round(second / 2)}
        </span>
        </p>
    </div> `
    )
}

generatePay();

const hide = () => {
    const two = document.getElementById('tt');
    if (second < 100) {
        two.style.display = "none";
        basket[2].item;
    } else {
        two.style.display = "grid";
        Math.round(second / 2);
    }
}

hide();