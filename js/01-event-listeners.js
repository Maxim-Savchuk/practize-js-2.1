const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetButtonClick);

// function handleTargetButtonClick() {
//     console.log('Клик');
// }

addListenerBtn.addEventListener('click', event => {
    console.log('Вешаю слушатель события на целевую кнопку');

    targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
    console.log('Снимаю слушателя события с целевой кнопки');

    targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
    console.log('Клик по целевой кнопке');
};
