let counterWidgetEl = findMainElements('.js-counter');
let counterValueEl = findMainElements('.js-counter-value');
bindClickListener(counterWidgetEl, counterValueEl);
restorePreviousValue();


function findMainElements(className) {
    return document.querySelector(className);
};

function bindClickListener(counterWidgetEl, counterValueEl) {
    counterWidgetEl.addEventListener('click', () => {
        //increment counter and display new value
        var currentValue = counterValueEl.innerHTML;
        currentValue++;

        //save to local storage
        localStorage.setItem('counter_value', currentValue)
        counterValueEl.innerHTML = currentValue;

    });
};

function restorePreviousValue() {
    var savedCounterValue = localStorage.getItem('counter_value');
    if (!!savedCounterValue) {
        counterValueEl.innerHTML = savedCounterValue;
    }
}


