
let tapeSkills = [
  'HTML/CSS',
  'JAVASCRIPT',
  'REACT',
  'NODE.JS',
  'REACT NATIVE',
  'TYPESCRIPT',
];

let lenta = [];

for (let a = 0; a <= 3; a++) {
  lenta.push(...tapeSkills);
}

const bannerItem = document.getElementById('banner__item');
bannerItem.innerHTML = ``;

function addItems() {
  lenta.forEach(lang => {
    bannerItem.innerHTML += `<span class = "banner__text">${lang}</span>
    <span class = "banner-point"></span>`;
  });
  
  lenta.forEach(lang => {
    bannerItem.innerHTML += `<span class = "banner__text">${lang}</span>
    <span class = "banner-point"></span>`;
  });
}

let position = 0;

function move() {
  position -= 2;
  bannerItem.style.transform = `translateX(${position}px)`;
  if (Math.abs(position) >= bannerItem.scrollWidth) {
    position = 0;
  }

  requestAnimationFrame(move);
}

addItems();
move();

const bannerItemBottom = document.getElementById('banner__item_bottom');
bannerItemBottom.innerHTML = ``;

function addItemsBottom() {
  lenta.forEach(lang => {
    bannerItemBottom.innerHTML += `<span class="banner__text">${lang}</span>
        <span class="banner-point"></span>`;
  });

  lenta.forEach(lang => {
    bannerItemBottom.innerHTML += `<span class="banner__text">${lang}</span>
        <span class="banner-point"></span>`;
  });
}

addItemsBottom();

let positionBottom = 0;
const maxPositionBottom = bannerItemBottom.scrollWidth;

function moveRight() {
  positionBottom += 2;

  if (positionBottom >= maxPositionBottom) {
    positionBottom = -bannerItemBottom.offsetWidth;
  }

  bannerItemBottom.style.transform = `translateX(${positionBottom}px)`;
  requestAnimationFrame(moveRight);
}

moveRight();