let stars = findAllStars();
bindClickListener(stars);
restorePreviousValue(stars);




function findAllStars() {
    let stars = document.querySelectorAll('.js-stars img');
    return stars;
}

function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            //remove all active classes
            let activeStars = document.querySelectorAll('.js-stars img.active');
            activeStars.forEach(star => star.classList.remove('active'));
            //add active class to clicked and prev images

            let clickedStar = e.currentTarget;
            let clickedImageIndex = 0;
            for (let i = 0; i < stars.length; i++) {
                let star = stars[i];
                star.classList.add('active');
                if (star === clickedStar) {
                    clickedImageIndex = i;
                    break;
                }
            }
            // save clicked image order number
            localStorage.setItem('rating-value', clickedImageIndex)
        });
    });
}

function restorePreviousValue(stars) {
    let savedValue = localStorage.getItem('rating-value');
    if (!!savedValue) {
        for (let i = 0; i < stars.length; i++) {
            let star = stars[i];
            star.classList.add('active');
            if (i === Number(savedValue)) {
                break;

            }

        }
    }
};