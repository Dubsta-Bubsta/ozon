import filter from './filter.js';

export default function renderCatalog() {
	const cards = document.querySelectorAll('.goods .card');
	const catalogList = document.querySelector('.catalog-list');
	const catalogWrapper = document.querySelector('.catalog');
	const catalogBtn = document.querySelector('.catalog-button');
	const categories = new Set();
	
	cards.forEach((card) => {			
		categories.add(card.dataset.category);
	});

	categories.forEach((item) => {
		const li = document.createElement('li');
		li.textContent = item;
		catalogList.appendChild(li);
	});

	const allLi = catalogList.querySelectorAll('li')
	
	catalogBtn.addEventListener('click', (event) => {
		if (catalogWrapper.style.display == 'block')
			catalogWrapper.style.display = 'none';
		else 
			catalogWrapper.style.display = 'block';

		if (event.target.tagName == "LI"){
			
			allLi.forEach((elem) => {
				if (elem === event.target){
					elem.classList.add('active');
				} else {
					elem.classList.remove('active');
				}
			});
			filter();
		}
	});
}