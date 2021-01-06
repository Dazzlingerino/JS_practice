let sliderFactory = {
    createNewSlider: function () {
        let newSlider = {
            imagesURLS: [],
            currentImageIndex: 0,

            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,

            start: function (elementId) {
                let that = this;

                let element = document.querySelector('#' + elementId);

                this.showPrevBtn = element.querySelector('.show-prev');
                this.showNextBtn = element.querySelector('.show-next');
                this.slideImage = element.querySelector('.slide-img');

                let onShowPrevBtnClickWrapper = function (e) {
                    that.onShowPrevBtnClick(e);
                };

                let onShowNextBtnClickWrapper = function (e) {
                    that.onShowNextBtnClick(e);
                };
                //subscribe to events
                this.showPrevBtn.addEventListener('click', onShowPrevBtnClickWrapper);
                this.showNextBtn.addEventListener('click', onShowNextBtnClickWrapper);


                //create images array
                this.imagesURLS.push('https://www.cdc.gov/flu/images/other/flu-in-cats-other-tp4.jpg');
                this.imagesURLS.push('https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg');
                this.imagesURLS.push('https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg');
                this.imagesURLS.push('https://www.ethosvet.com/wp-content/uploads/Untitled-3-01-20-625x375.png');
                this.imagesURLS.push('https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/cat-410261.jpg?h=191a1c11&itok=Y1Z7MQVJ');



                this.slideImage.src = this.imagesURLS[this.currentImageIndex];
                this.showPrevBtn.disabled = true;

            },

            onShowPrevBtnClick: function (e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesURLS[this.currentImageIndex];
                this.showNextBtn.disabled = false;

                //disable prev button if need
                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },

            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesURLS[this.currentImageIndex];
                this.showPrevBtn.disabled = false;

                //disable next button if need
                if (this.currentImageIndex === (this.imagesURLS.length - 1)) {
                    this.showNextBtn.disabled = true;
                }
            },
        };
        return newSlider;
    };
}