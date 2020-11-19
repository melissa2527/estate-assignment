const data = estateData.slice(0, 10);

const list = document.querySelector('.estate-list');

for (let i = 0; i < data.length; i++) {
  const content = document.createElement('div');
  content.innerHTML = `
  <div id=${data[i].id}>
  <img src=${data[i].images[0]} alt=${data[i].name}>
  <div>${data[i].name}</div>
  <p id="price-${data[i].id}" class="price" >Price ${data[i].prize_czk}</p>
  <p id="land-${data[i].id}" >Land Area ${data[i].land_area}</p>
  <p id="floor-${data[i].id}">${data[i].building_area}</p>
  </div>
  `
list.appendChild(content);
}


const estateA = document.getElementById(`${data[2].id}`);
const estateB = document.getElementById(`${data[3].id}`);
const compareBtn = document.querySelector('.btn');

const price_estateA = document.getElementById(`price-${data[2].id}`);
const price_estateB = document.getElementById(`price-${data[3].id}`);

const land_estateA = document.getElementById(`land-${data[2].id}`);
const land_estateB = document.getElementById(`land-${data[3].id}`);

const floor_estateA = document.getElementById(`floor-${data[2].id}`);
const floor_estateB = document.getElementById(`floor-${data[3].id}`);

compareBtn.addEventListener('click', () => {
  if (data[2].prize_czk > data[3].prize_czk) {
    price_estateA.classList.add('higher-price');
    price_estateB.classList.add('lower-price');
    // console.log('A price is higher');
  } else {
    price_estateB.classList.add('higher-price');
    price_estateA.classList.add('lower-price');
    // console.log('B price is higher');
  }
  if (data[2].building_area > data[3].building_area) {
    floor_estateA.classList.add('more-floor');
    floor_estateB.classList.add('less-floor');
    // console.log('A floor size is bigger');
  } else {
    floor_estateB.classList.add('more-floor');
    floor_estateA.classList.add('less-floor');
    // console.log('B floor size is bigger');
  }
  if (data[2].land_area > data[3].land_area) {
    land_estateA.classList.add('more-land');
    land_estateB.classList.add('less-land');
    // console.log('A land is bigger');
  } else {
    land_estateB.classList.add('more-land');
    land_estateA.classList.add('less-land');
    // console.log('B land is bigger');
  }}
)