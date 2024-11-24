let tapeSkills = ['HTML/CSS', 'JAVASCRIPT', 'REACT', 'NODE.JS', 'REACT NATIVE', 'TYPESCRIPT'];

let lenta = [];

for (let a = 0; a <= 2; a++) {
lenta.push(...tapeSkills);
}


console.log(lenta);

const bannerItem = document.getElementById("banner__item");
bannerItem.innerHTML = ``;



function addItems() {
    lenta.forEach(lang => {
        bannerItem.innerHTML += `<span class = "banner__text">${lang}</span>
    <span class = "banner-point"></span>`;

    });
}

function addItem() { 
    tapeSkills.forEach(lang => {
        bannerItem.innerHTML += `<span class = "banner__text">${lang}</span>
    <span class = "banner-point"></span>`;
    });
}


let position = 0;

function move(){
position -=2;
bannerItem.style.transform = `translateX(${position}px)`;
requestAnimationFrame(move);
}
move()
    

addItems();

setTimeout(addItem, 15000);



const bannerItemBottom = document.getElementById("banner__item_bottom");
bannerItemBottom.innerHTML = "";


function addItemsBottom() {
    lenta.forEach(lang => {
        bannerItemBottom.innerHTML += `<span class="banner__text">${lang}</span>
        <span class="banner-point"></span>`;
    });
}

addItemsBottom();


let positionBottom = 0;

function moveRight() {
    positionBottom += 2; 
    bannerItemBottom.style.transform = `translateX(${positionBottom}px)`;
    requestAnimationFrame(moveRight);
}

moveRight();