function addErrorClass(elemId) {
    let element = document.getElementById(elemId);
    element.className = 'error-input'
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

let sendButton = document.getElementById('send-button');

// different naming of listener functions
// const sendButtonClickListener = () => addErrorClass('last-name');
// sendButton.addEventListener('click', sendButtonClickListener)

const OnSendButtonClick = () => addErrorClass('last-name');

sendButton.addEventListener('click', OnSendButtonClick)

let firstNameEl = document.getElementById('first-name');
const onFirstNameKeyup = () => addErrorClass('first-name');

firstNameEl.addEventListener('keyup', onFirstNameKeyup)