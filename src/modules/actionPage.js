import filter from './filter.js';

export default function actionPage() {
	const cards = document.querySelectorAll('.goods .card');
	const discountCheckbox = document.getElementById('discount-checkbox');
	const min = document.getElementById('min');
	const max = document.getElementById('max');
	const search = document.querySelector('.search-wrapper_input');
	const searchBtn = document.querySelector('.search-btn');



	discountCheckbox.addEventListener('click', filter);
	min.addEventListener('change', filter);		//Событие для фильтра
	max.addEventListener('change', filter);		//Событие для фильтра
	

	//Поиск
	searchBtn.addEventListener('click', () => {
		const searchText = new RegExp(search.value.trim(), 'i');
		cards.forEach((card) => {
			const title = card.querySelector('.card-title');
			if (!searchText.test(title.textContent)) {	//Проверка, есть ли в тексте рег.выр
				card.parentNode.style.display = 'none';
			} else {
				card.parentNode.style.display = 'block';
			}
		});
		search.value = '';
	});

}