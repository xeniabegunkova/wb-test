"use strict";

var menuBtn = document.querySelector('.header__menu-btn');
var menu = document.querySelector('.header__menu');
var body = document.querySelector('.body');
var menuItems = document.querySelector('.header__menu-items');
var headerInput = document.querySelector('.header__ipnut');
var headerForm = document.querySelector('.header__form');
var headerTitle = document.querySelector('.header__title');
var headerButton = document.querySelector('.header__button');
var headerMenuButtons = document.querySelector('.header__menu-btn');
var cart = document.getElementById('cart'); //burger menu

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  menuItems.classList.toggle('active');
  body.classList.toggle('active');
}); //check all checkboxes

function checkAll(obj) {
  var items = obj.form.getElementsByTagName("input"),
      len,
      i;

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

var basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);
var cartItems = [{
  id: '1',
  img: 'images/img1.svg',
  name: 'Футболка UZcotton мужская',
  color: 'Цвет: белый',
  size: 'Размер: 56',
  stock: 'Коледино WB',
  company: 'OOO Вайлдберриз',
  price: '522 сом',
  sale: '1051 сом',
  left: 'Осталось 2 шт.'
}, {
  id: '2',
  img: 'images/img2.svg',
  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  color: 'Цвет: прозрачный',
  size: '',
  stock: 'Коледино WB',
  company: 'OOO Мегапрофстиль',
  price: '2 100 047 сом',
  sale: '2 300 047 сом',
  left: ''
}, {
  id: '3',
  img: 'images/img3.svg',
  name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
  color: '',
  size: '',
  stock: 'Коледино WB',
  company: 'OOO Вайлдберриз',
  price: '494 сом',
  sale: '950 сом',
  left: 'Осталось 2 шт.'
}];

var generateShop = function generateShop() {
  return cart.innerHTML = cartItems.map(function (el) {
    var id = el.id,
        img = el.img,
        name = el.name,
        color = el.color,
        size = el.size,
        stock = el.stock,
        company = el.company,
        price = el.price,
        sale = el.sale,
        left = el.left;
    var search = basket.find(function (x) {
      return x.id === id;
    }) || [];
    console.log(basket.find(function (x) {
      return x.id === id;
    }));
    return "\n\t\t<div class=\"card\" id=product-id-".concat(id, ">\n\t\t<p class=\"card__input\">\n\t\t\t<label class=\"cart__label-card\"><input type=\"checkbox\" />\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t</p>\n\t\t\n\t\t<img src=\"").concat(img, "\" alt=\"img\" class=\"card__image\">\n\t\t\n\t\t<div class=\"card__info\">\n\t\t\t<h5 class=\"card__title\">").concat(name, "</h5>\n\t\t\t<div class=\"card__item\">\n\t\t\t\t<p class=\"card__items\">").concat(color, "</p>\n\t\t\t\t<p class=\"card__items\">").concat(size, "</p>\n\t\t\t</div>\n\t\t\t<p class=\"card__items grey\">").concat(stock, "</p>\n\t\t\t<div class=\"grey__container\">\n\t\t\t\t<p class=\"card__items grey\">").concat(company, "</p>\n\t\t\t\t<img class=\"card__items-img\" src=\"./images/icon2.svg\">\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"card__counter\">\n\t\t\t<div class=\"counter\">\n\t\t\t\t<div class=\"counter__button counter__button_min\">\n\t\t\t\t\t<img class=\"counter__image\" src=\"./images/\u2212.svg\" alt=\"minus\" onclick=\"decrement(").concat(id, ")\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"counter__input\" id=").concat(id, ">\n\t\t\t\t").concat(search.item === undefined ? 0 : search.item, "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"counter__button counter__button_plus\" onclick=\"increment(").concat(id, ")\">\n\t\t\t\t\t<img class=\"counter__image\" src=\"./images/+.svg\" alt=\"plus\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"card__counter-text\">\n\t\t\t").concat(left, "\n\t\t\t</p>\n\t\t\t<div class=\"card__counter-buttons\">\n\t\t\t\t<div class=\"card__counter-like\">\n\t\t\t\t\t<img class=\"icons\" src=\"./images/like.svg\" alt=\"icon\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card__counter-delete\">\n\t\t\t\t\t<img class=\"icons\" src=\"./images/del.svg\" alt=\"icon\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"card__price\">\n\t\t\t<p class=\"price\">").concat(el.price, "</p>\n\t\t\t<p class=\"price-sale\">").concat(el.sale, "</p>\n\t\t</div>\n\t\t</div>");
  }).join("");
};

generateShop();

var increment = function increment(id) {
  var search = basket.find(function (el) {
    return el.id === id;
  });

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
};

var decrement = function decrement(id) {
  var search = basket.find(function (el) {
    return el.id === id;
  });
  if (search === undefined) return;else if (search.item === 0) return;else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter(function (x) {
    return x.item !== 0;
  });
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

var update = function update(id) {
  var search = basket.find(function (el) {
    return el.id === id;
  });
  document.getElementById(id).innerHTML = search.item;
  calc();
};

var calc = function calc() {
  var cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = basket.map(function (el) {
    return el.item;
  }).reduce(function (el, y) {
    return el + y;
  }, 0);
};

calc();