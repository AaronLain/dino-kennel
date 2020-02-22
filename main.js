const dinos = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const viewSingleDino = () => {
    let domString = '';
    domString += `<button id="close-single-view" class="btn btn-outline-dark single-dino"><i class="fas fa-times"></i></button>`
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
}

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
}

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (i = 0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    }
}

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString += '<div class="col-4"'
        domString +=    `<div class="card" style="background-color: #f7f7f7;">`
        domString +=        `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="${dinoArray[i].name}">`
        domString +=        `<div class="card-body">`
        domString +=            `<h5 class="card-title">${dinoArray[i].name}</h5>`
        domString +=            `<p class="card-text">Health: ${dinoArray[i].health}.</p>`
        domString +=            `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
        domString +=        `</div>`
        domString +=    `</div>`
        domString +='</div>'
    }
    printToDom('kennel', domString);
    singleDinoAddEvents()
}

const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length + 1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value,
    };
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
    console.log(dinos, "hi from newDinos");
};

const events = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);

}

const init = () => {
    events();
    printDinos(dinos);
};

init();