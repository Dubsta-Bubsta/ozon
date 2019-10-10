export default function renderCards(data) {	
	const goodsWrapper = document.querySelector('.goods');
	//Создание новой карточки
	data.goods.forEach((good) => {
		const card = document.createElement('div');	//Создание нового элемента div на странице
		card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
		card.innerHTML = `		
		<div class="card" data-category="${good.category}">
		${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
		<div class="card-img-wrapper">
		<span class="card-img-top"
		style="background-image: url('${good.img}')"></span>
		</div>
		<div class="card-body justify-content-between">
		<div class="card-price">${good.price} ₽</div>
		<h5 class="card-title">${good.title}</h5>
		<button class="btn btn-primary">В корзину</button>
		</div>
		</div>
		
		`;
		goodsWrapper.appendChild(card);
	});
}