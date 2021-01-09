function alertValues(elPar) {
    console.log(elPar.value);
}

function getEl(id) {
    let elId = id;
    let element = document.getElementById(elId);
    return element.value;
}


let firstNameId = 'first-name';
console.log(getEl(firstNameId));

let lastNameId = 'last-name';
console.log(getEl(lastNameId));

let addressId = 'address';
getEl(addressId);

let citiesId = 'cities';
getEl(citiesId);

let hobbiesId = 'hobbies';
getEl(hobbiesId);

// window.alert(getEl(lastNameId))
// window.alert(lastNameEl.className)
// window.alert(citiesEl.value)
// window.alert(addressNameEl.className)