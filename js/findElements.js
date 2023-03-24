const form = document.querySelector('form'); // Форма
const tbody = document.querySelector('.tbody');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal__container'); // Оболочка формы
const buttonOpen = document.querySelector('.summary__button'); //  Кнопка добавить товар
const buttonClose = document.querySelector('.modal__btn--button'); // Крестик закрывающий модалку
const templateModal = document.querySelector('#rowModal');
const template = document.querySelector('#row');
const summary__cost = document.querySelector(".summary__cost");

export default { form, tbody, modal, modalContainer, buttonOpen, buttonClose, templateModal, template, summary__cost };