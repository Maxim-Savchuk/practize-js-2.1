//mouseenter & mouseleave (Это ховер)
//mouseover & mouseout
//mousemove (chatty event - болтливое событие)

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
};

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
};

function onMouseMove(event) {
    console.log(event);
};