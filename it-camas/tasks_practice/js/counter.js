let counterWidgetEl = findMainElements('.js-counter');
let counterValueEl = findMainElements('.js-counter-value');
bindClickListener(counterWidgetEl);
restorePreviousValue();


function findMainElements(className) {
    var widgetEl = document.querySelector(className);
    return widgetEl;
};

function bindClickListener(counter) {
    counter.addEventListener('click', () => {
        //increment counter and display new value
        var currentValue = counterValueEl.innerHTML;
        currentValue++;

        //save to local storage
        localStorage.setItem('counter_value', currentValue)
        counterValueEl.innerHTML = currentValue;
        return counterValueEl;
    });
};

function restorePreviousValue() {
    var savedCounterValue = localStorage.getItem('counter_value');
    if (!!savedCounterValue) {
        counterValueEl.innerHTML = savedCounterValue;
    }
}


