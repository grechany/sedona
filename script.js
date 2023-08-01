//Открыть и закрыть модальное окно

const button = document.querySelector('.user-menu__button');               // Кнопка "Хочу сюда"
const modalWindow = document.querySelector('.modal-container');            // Выбираю модальное окно
const closeModalButton = document.querySelector('.modal-close-button');   // Кнопка крестик на модальном окне

button.onclick = function () {
    modalWindow.classList.remove('modal-container-close');               //Удаляю у модального окна класс по клику
};

closeModalButton.onclick = function () {
    modalWindow.classList.add('modal-container-close');                  //Добавляю модальному окну класс скрывающий его
};

//Конец кода