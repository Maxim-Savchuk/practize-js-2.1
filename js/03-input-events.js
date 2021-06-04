const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
}; // Обьект ссылок на елементы

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);
// function onInputFocus() {
//     console.log('Инпут получил фокус - событие focus');
// };

// function onInputBlur() {
//     console.log('Инпут получил фокус - событие blur');
// };

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
};

function onLicenseChange(event) {
    refs.btn.disabled = !event.currentTarget.checked;
};