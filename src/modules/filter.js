export default function filer() {
	const cards = document.querySelectorAll('.goods .card');
	const discountCheckbox = document.getElementById('discount-checkbox');
	const min = document.getElementById('min');
	const max = document.getElementById('max');
	const activeLi = document.querySelector('.catalog-list li.active');

	cards.forEach((card) => {
			const cardPrice = card.querySelector('.card-price');	//Получение цен с P
			const price = parseFloat(cardPrice.textContent);		//Отделение цифр от P
			const discount = card.querySelector('.card-sale');	//Получение карт, у которых есть скидка
			
			card.parentNode.style.display = 'block';
			if((min.value && price < min.value) || (max.value && price > max.value)){
				card.parentNode.style.display = 'none';
			} else if (discountCheckbox.checked && !discount){
				card.parentNode.style.display = 'none';
			} else if(activeLi){
				if(card.dataset.category !== activeLi.textContent)
					card.parentNode.style.display = 'none';
			}
		});
}