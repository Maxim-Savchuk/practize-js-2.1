const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

    // const formElements = event.currentTarget.elements;

    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;

    // const formData = {
    //     mail,
    //     password,
    //     subscription,
    // };

    // console.log(formData);
};