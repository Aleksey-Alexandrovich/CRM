'use strict';

let electronics = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'шт',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];


const form = document.querySelector('form'); // Форма
const tbody = document.querySelector('.tbody');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal__container'); // Оболочка формы
const buttonOpen = document.querySelector('.summary__button'); //  Кнопка добавить товар
const buttonClose = document.querySelector('.modal__btn--button'); // Крестик закрывающий модалку
console.log(form);


const {title, units, category, flag, discount, description, count, price} = form; // Find form and elements

const templateModal = document.querySelector('#rowModal');



const createSpan = () => {
  const span = document.createElement('span');
  span.className = 'vendor-code__id';
  span.innerText = Math.floor(Math.random() * 100000000) + 1;
  return span;
}


// const addContactData = contact => {
//   electronics.push(contact);
// };


const addContactPage = (contact, tbody) => {
  tbody.append(createRowModal(contact));

  form.reset();
  closeModal();
};

const formControl = (form, tbody, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    const id = modalContainer.querySelector(".vendor-code__id").innerHTML;
    newContact.id = id;

    addContactPage(newContact, tbody);
    // addContactData(newContact);


    form.reset();
    closeModal();
  });
};


const checkControl = (flag, discount) => {
  flag.addEventListener('change', e => { //
    if (flag.checked === true) {
      discount.disabled = false;
    }
  });

  flag.addEventListener('change', e => {
    if (flag.checked === false) {
      discount.disabled = true;
      discount.value = '';
    }
  });
};


const template = document.querySelector('#row');

function getFormSum() {
  let sum = (+count.value || 0) * (+price.value || 0)
  form.querySelector(".summary__cost").innerText =  "$ "  +  sum.toFixed(2);
}
const modalControl = (buttonOpen, modal) => {
  const openModal = () => {
    modal.classList.add('is-visible');
    modalContainer.querySelector(".vendor-code__id")?.remove();
    modalContainer.append(createSpan());


    count.addEventListener("blur", getFormSum);
    price.addEventListener("blur", getFormSum);

 
  };

  const closeModal = () => {
    modal.classList.remove('is-visible');
  };


  buttonOpen.addEventListener('click', openModal);// Открытие модального окна при помощи обычной кнопки


  modal.addEventListener('click', (e) => { // Ставим прослушку на модальное окно, и ловим событие на нём или крестике на модалке, и закрываем окно.
    const target = e.target;
    if (target === modal || target.closest('.modal__btn--button')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};


function getSum() {
  return electronics.reduce((total,el) =>  total + el.price * el.count, 0);
}

const summary__cost = document.querySelector(".summary__cost");

function createRowModal (object) {
  const newCard = template.content.querySelector('.contact').cloneNode(true);

  let row = `<td class="table__cell">${object.id}</td>
		<td class="table__cell" data-number="1">${object.title}</td>
		<td class="table__cell" data-number="2">${object.category}</td>
		<td class="table__cell" data-number="3">${object.units}</td>
		<td class="table__cell" data-number="4">${object.count}</td>
		<td class="table__cell" data-number="5">${'$' + object.price}</td>
		<td class="table__cell" data-number="6">${'$' + object.count * object.price}</td>`;

  newCard.insertAdjacentHTML('afterbegin', row);
  const buttonDelete = newCard.querySelector('.erase');

  function deleteHandler() {
    newCard.remove();
    electronics = electronics.filter(el => el.id !== object.id);
		summary__cost.innerText = "$ "  +  getSum(electronics).toFixed(2)
  }
 


  buttonDelete.addEventListener("click", deleteHandler);

  if(!electronics.find(el => el.id == object.id)){
       electronics.push(object);
  }
	
  summary__cost.innerText = "$ "  +  getSum(electronics).toFixed(2);
  return newCard;
};


const renderGoods = (array) => {
  const tableRows = array.map(row => createRowModal(row));
  tbody.append(...tableRows);
};

const {closeModal} = modalControl(buttonOpen, modal);

formControl(form, tbody, closeModal);
checkControl(flag, discount);

renderGoods(electronics);
