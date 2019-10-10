export default function addCart() {
    const cards = document.querySelectorAll('.goods .card');		//Получение массива карточек
    const cartWrapper = document.querySelector('.cart-wrapper');	//Содержание корзины
    const cartEmpty = document.getElementById('cart-empty');
    const countGoods = document.querySelector('.counter');
    
    
    
    cards.forEach((card) => {	//Для каждой карточки
        const btn = card.querySelector('button');	//Получаем кнопку на карточке
        btn.addEventListener('click', () => {		//Для карточки создается событие при нажатии
        const cardClone = card.cloneNode(true);	//Карточка клонируется
            cartWrapper.appendChild(cardClone);		//Добавляется в корзину
    
            
            showData();	//Показ количества элементов в корзине
    
            //Удаление из корзины
            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
    
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData(); //Обновляем цены
            });
        });
    });
    
    function showData(){
            const cardsCart = cartWrapper.querySelectorAll('.card');	//Элементы в корзине
            const cardsPrice = cartWrapper.querySelectorAll('.card-price');	//Цены каждого товара в корзине
            const cardTotal = document.querySelector('.cart-total span');
            countGoods.textContent = cardsCart.length;	
    
            let sum = 0;
            cardsPrice.forEach((cardPrice) => {
                let price = parseFloat(cardPrice.textContent);
                sum += price;
            });
            cardTotal.textContent = sum;
    
            if (cardsCart.length !== 0){
                cartEmpty.remove();
            } else {
                cartWrapper.appendChild(cartEmpty);
            }
        }
    }