const mostPopPorducts = document.querySelector(".most-popular-products");

const jsonFile = "http://localhost:3000/product";

fetch(jsonFile)
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    data.map((product) => {
      const { id, name, image, name_url } = product;
      mostPopPorducts.innerHTML += `
        <div class="product-card" data-product-id="${id}">
					<div class="product-card__container">
						<div class="product-card__btn cart" data-tooltip="add to cart"><span class="material-symbols-rounded"> shopping_bag </span></div>
						<div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="material-symbols-rounded"> favorite </span></div>
						<div class="product-card__img">
							<a href = "${name_url}"><img src="${image}" alt="${name}" /></a>
						</div>
					</div>
					<div class="product-card__description">
						<div class="product-card__text">${name}</div>
 					</div>
					 
				</div>
        `;
    });
  });

const mostPopSpoPorducts = document.querySelector(
  ".most-popular-spoonproducts"
);

const jsonspoonFile = "http://localhost:3000/utensils";

fetch(jsonspoonFile)
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    data.map((product) => {
      const { id, selection1, image, selection1_url } = product;
      mostPopSpoPorducts.innerHTML += `
        <div class="product-card" data-product-id="${id}">
					<div class="product-card__container">
						<div class="product-card__btn cart" data-tooltip="add to cart"><span class="material-symbols-rounded"> shopping_bag </span></div>
						<div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="material-symbols-rounded"> favorite </span></div>
						<div class="product-card__img">
							<a href = "${selection1_url}"><img src="${image}" alt="${selection1}" /></a>
						</div>
					</div>
					<div class="product-card__description">
						<div class="product-card__text">${selection1}</div>
 					</div>
					 
				</div>
        `;
    });
  });

const bags = document.querySelector(".most-popular-bags");

const jsonsbagFile = "http://localhost:3000/bags";

fetch(jsonsbagFile)
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    data.map((product) => {
      const { id, image, selection1, selection1_url } = product;
      bags.innerHTML += `
        <div class="product-card" data-product-id="${id}">
					<div class="product-card__container">
						<div class="product-card__btn cart" data-tooltip="add to cart"><span class="material-symbols-rounded"> shopping_bag </span></div>
						<div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="material-symbols-rounded"> favorite </span></div>
						<div class="product-card__img">
							<a href = "${selection1_url}"><img src="${image}" alt="${selection1}" /></a>
						</div>
					</div>
					<div class="product-card__description">
						<div class="product-card__text">${selection1}</div>
 					</div>
					 
				</div>
        `;
    });
  });
