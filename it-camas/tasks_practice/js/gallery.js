let photoInputEl = findInputElement();
let photoContainerEl = findPhotosContainer();
let imageURLs = [];

bindEnterClick(photoInputEl, photoContainerEl, imageURLs);
restorePhotos(photoContainerEl, imageURLs);



function findInputElement() {
    return document.querySelector('.js-new-photo');
}

function findPhotosContainer() {
    return document.querySelector('.js-photos');
}

function bindEnterClick(photoInputEl, photoContainerEl, imageURLs) {
    photoInputEl.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {

            // get url
            let src = photoInputEl.value;
            //create img with this url as src
            //create li with this img inside
            let li = document.createElement('li');
            li.innerHTML = `<img src='${src}' />`;
            //append this li to ul
            photoContainerEl.append(li);

            // push url to array
            imageURLs.push(src);

            //save to local storage
            localStorage.setItem('gallery', JSON.stringify(imageURLs));
        }
    })
}

function restorePhotos(photoContainerEl, imageURLs) {
    let photosStr = localStorage.getItem('gallery');
    if (!!photosStr) {
        let photos = JSON.parse(photosStr);
        photos.forEach(src => {
            imageURLs.push(src);
            //create img with this url as src
            //create li with this img inside
            let li = document.createElement('li');
            li.innerHTML = `<img src='${src}' />`;
            //append this li to ul
            photoContainerEl.append(li);
        });
    }
}
