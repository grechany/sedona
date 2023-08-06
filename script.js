//Открыть и закрыть модальное окно

const button = document.querySelector('.user-menu__button'); // Кнопка "Хочу сюда"
const button2 = document.querySelector('.search-button'); // Кнопка "Поиск гостиницы"
const modalWindow = document.querySelector('.modal-container'); // Выбираю модальное окно
const closeModalButton = document.querySelector('.modal-close-button'); // Кнопка крестик на модальном окне

button.onclick = function() {
    modalWindow.classList.remove('modal-container-close'); // Удаляю у модального окна класс по клику на кнопку "Хочу сюда"
};

if (button2) {                                             // Если button2 существует, то
  button2.onclick = function() {
    modalWindow.classList.remove('modal-container-close');
  };
};

closeModalButton.onclick = function() {
  modalWindow.classList.add('modal-container-close'); // Добавляю модальному окну класс скрывающий его
};

//Конец кода

//Действия в модальном окне

//Ошибка даты заезда

const form = document.querySelector('.modal-form');
const dateIn = document.getElementById('date-in');
const errorIn = document.getElementById('error-in');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы на сервер

    const today = new Date();
    const userDate = new Date(dateIn.value);

    if (userDate < today) {
        errorIn.classList.remove('input-message-close');
    } else {
        errorIn.classList.add('input-message-close'); // Закрываем сообщение об ошибке, если оно было ранее открыто
        // Если условие не выполняется (дата корректна), можно отправить форму на сервер
        form.submit();
    }
});

//Кнопки + и - взрослые

const buttonPlusAdult = document.querySelector('.plus-adult');
const adultCountInput = document.getElementById('adult');
const buttonMinusAdult = document.querySelector('.minus-adult');

buttonPlusAdult.onclick = function () {
    let adultCount = parseInt(adultCountInput.value) || 0; // Получаем текущее значение из поля и парсим его в число
    adultCount++; // Увеличиваем значение на 1
    adultCountInput.value = adultCount; // Обновляем значение в поле
};

buttonMinusAdult.onclick = function () {
    let adultCount = parseInt(adultCountInput.value) || 0; // Получаем текущее значение из поля и парсим его в число
    if (adultCount > 1) {
        adultCount--; // Уменьшаем значение на 1 только если оно больше 1
        adultCountInput.value = adultCount; // Обновляем значение в поле
    }
};


//Кнопки + и - дети

const buttonPlusChild = document.querySelector('.plus-child');
const childCountInput = document.getElementById('children');
const buttonMinusChild =document.querySelector('.minus-child');

buttonPlusChild.onclick = function () {
    let childCount = parseInt(childCountInput.value) || 0; // Получаем текущее значение из поля и парсим его в число
    childCount++; // Увеличиваем значение на 1
    childCountInput.value = childCount; // Обновляем значение в поле
};

buttonMinusChild.onclick = function () {
    let childCount = parseInt(childCountInput.value) || 0; // Получаем текущее значение из поля и парсим его в число
    if (childCount > 0) {
        childCount--; // Уменьшаем значение на 1
        childCountInput.value = childCount; // Обновляем значение в поле
    } 
};

//Конец кода