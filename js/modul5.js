import elements from './findElements.js';
import electronicsObj from './data.js';

const {getSum,  deleteItem,  addItem, electronics } = electronicsObj;


const { form, tbody, modal, modalContainer, buttonOpen, buttonClose, templateModal, template, summary__cost,} = elements;

const {title, units, category, flag, discount, description, count, price} = form;


const createSpan = () => { // Cоздаём спан с рандомным id
  const span = document.createElement('span');
  span.className = 'vendor-code__id';
  span.innerText = Math.floor(Math.random() * 100000000) + 1;
  return span;
}

const closeModal = () => {
  modal.classList.remove('is-visible');
};

const addContactPage = (contact, tbody) => { // Добавляем строку в таблицу
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
 
    buttonOpen.addEventListener('click', openModal); // Открытие модального окна при помощи обычной кнопки
    modal.addEventListener('click', (e) => { // Ставим прослушку на модальное окно, и ловим событие на нём или крестике на модалке, и закрываем окно.

    const target = e.target;
    if (target === modal || target.closest('.modal__btn--button')) {
      closeModal();
    }
  }); 
};


function createRowModal (object) {
  const newCard = template.content.querySelector('.contact').cloneNode(true);

	const randomImage = `https://picsum.photos/600/600`;

  let row = `<td class="table__cell">${object.id}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${object.title}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${object.category}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${object.units}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${object.count}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${'$' + object.price}</td>
		<td class="table__cell" data-pic="https://picsum.photos/600/600">${'$' + object.count * object.price}</td>`;

  newCard.insertAdjacentHTML('afterbegin', row);
  const buttonDelete = newCard.querySelector('.erase');
	// находим кнопку загрузить изображение
	const getPicture = newCard.querySelector('.downloading');

	getPicture.addEventListener('click', () => {
		open('https://picsum.photos/600/600','', 'width=600,height=600,top=270,left=640');
	})

  function deleteHandler() {
    newCard.remove();
    deleteItem(object.id);
		summary__cost.innerText = "$ "  +  getSum().toFixed(2)
  }
 
  buttonDelete.addEventListener("click", deleteHandler);

  addItem(object);
	
  summary__cost.innerText = "$ "  +  getSum().toFixed(2);
  return newCard;
};


const renderGoods = (array) => {
  const tableRows = array.map(row => createRowModal(row));
  tbody.append(...tableRows);
};




const init = () => {
  modalControl(buttonOpen, modal);
  formControl(form, tbody, closeModal);
  checkControl(flag, discount);
  renderGoods(electronics);
}

init();