
const carouselImgs = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'
];

const carousel = document.querySelector('.carousel');
const smallCarousel = document.querySelector('.small-carousel');

const slider = document.querySelector('.conteiner');
let startAuto = true;

for(i = 0; i < carouselImgs.length; i++){

  const insImg = carouselImgs[i];

  console.log (insImg);

  carousel.innerHTML += `<img class="conteiner-img single none" src="${insImg}"> `

  smallCarousel.innerHTML += `<img class="conteiner-small-img single-active" src="${insImg}"> `
};

const imgCollection = document.getElementsByClassName('single');

const imgSmall = document.getElementsByClassName('single-active');

const btnUp = document.querySelector('.top');

const btnDown = document.querySelector('.bottom');

console.log(btnDown, btnUp);

let counter = 0 ;

imgCollection[0].classList.remove('none');
imgSmall[0].classList.add('active');

btnUp.classList.add('none');

btnUp.addEventListener('click', next);

btnDown.addEventListener('click', pre);

// AUTO 

slider.addEventListener('mouseenter', ()=> goAuto= false);
slider.addEventListener('mouseleave', ()=> goAuto= true);

setInterval(()=> {
  if (goAuto) next();
}, 1000);


// FUNCTION 


function next(){

  imgCollection[counter].classList.add('none');
  imgSmall[counter].classList.remove('active');
  
  counter++

  if (counter === carouselImgs.length){
    counter = 0;
  }

  imgCollection[counter].classList.remove('none');
  imgSmall[counter].classList.add('active');

  if(counter === imgCollection.length - 1 ){
    btnDown.classList.add('none');
  }
  
  btnUp.classList.remove('none');  

};

function pre(){

  imgCollection[counter].classList.add('none');
  imgSmall[counter].classList.remove('active');
  
  counter--

  imgCollection[counter].classList.remove('none');
  imgSmall[counter].classList.add('active');

  if(counter === 0){
    btnUp.classList.add('none');
  }

  btnDown.classList.remove('none');

};