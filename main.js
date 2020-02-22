const dinos = [ {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Mary',
    adventures: [],
    health: 1,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
    id: 'dino3',
    name: 'Susan',
    type: 'Stegasaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 45,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    } ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id)
    let domString = '';
    domString += `<button id="close-single-view" class="btn btn-outline-dark single-dino"><i class="fas fa-times"></i></button>`
    domString += `<div class="container">`
    domString +=     `<div class="row">`
    domString +=         `<div class="col-6">`
    domString +=             `<img class="img-fluid"src="${selectedDino.imageUrl}" alt="${selectedDino.name}"/>`
    domString +=         `</div>`
    domString +=         `<div class="col-6" style="background-color: #f7f7f7">`
    domString +=             `<h2>${selectedDino.name}</h2>`
    domString +=             `<h3>Type: ${selectedDino.type}</h3>`
    domString +=             `<h4>Age: ${selectedDino.age}</h4>`
    domString +=             `<h5>Health: ${selectedDino.health}</h5>`
    domString +=             `<h6>Owner: ${selectedDino.owner}</h6>`
    domString +=         `</div>`
    domString +=     `</div>`
    domString += `</div>`
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
}

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
};

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (i = 0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    }
};

const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (i = 0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseenter', dinoHealth);
    }
};

const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((dino) => dino.id === dinoId);
    dinos[dinoPosition].health += 1;
    printDinos(dinos);
}

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString += '<div class="col-4">'
        domString +=    `<div id="${dinoArray[i].id}" class="card" style="background-color: #f7f7f7;">`
        domString +=        `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="${dinoArray[i].name}">`
        domString +=        `<div class="card-body">`
        domString +=            `<h5 class="card-title">${dinoArray[i].name}</h5>`
        domString +=            `<p class="card-text">Health: ${dinoArray[i].health}</p>`
        domString +=            `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
        domString +=        `</div>`
        domString +=    `</div>`
        domString +='</div>'
    }
    printToDom('kennel', domString);
    singleDinoAddEvents()
    petEvents();
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