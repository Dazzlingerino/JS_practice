//find elements
let showPrevBtn = document.getElementById('show-prev');
let showNextBtn = document.getElementById('show-next');
let slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);


//create images array
let imagesURLS = [];
imagesURLS.push('https://www.cdc.gov/flu/images/other/flu-in-cats-other-tp4.jpg');
imagesURLS.push('https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg');
imagesURLS.push('https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg');
imagesURLS.push('https://www.ethosvet.com/wp-content/uploads/Untitled-3-01-20-625x375.png');
imagesURLS.push('https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/cat-410261.jpg?h=191a1c11&itok=Y1Z7MQVJ');

let currentImageIndex = 0;

slideImage.src = imagesURLS[currentImageIndex];
showPrevBtn.disabled = true;
//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesURLS[currentImageIndex];
    showNextBtn.disabled = false;

    //disable prev button if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesURLS[currentImageIndex];
    showPrevBtn.disabled = false;

    //disable next button if need
    if (currentImageIndex === (imagesURLS.length - 1)) {
        showNextBtn.disabled = true;
    }
}