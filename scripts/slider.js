const img = document.querySelector('.image');
const dots = document.querySelectorAll('.dot');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let flag = false;

const imagesSrc = [
  'images/chatgpt.png',
  'images/mdn.png',
  'images/spotify.png',
  'images/stackoverflow.png',
   'images/youtube.jpg',
  'images/github-slider.png',
];

const changeImage = () => {
  dots.forEach(dot => {
    dot.classList.remove('now');
  });
  if (index < imagesSrc.length) {
    img.style.backgroundImage = `url(${imagesSrc[index]})`;
    dots[index].classList.add('now');
  } else {
    index = 0;
    img.style.backgroundImage = `url(${imagesSrc[index]})`;
    dots[index].classList.add('now');
  }
};

let index = 0;
let timeout = 3000;

setInterval(() => {
  if (index < imagesSrc.length) {
    index += 1;
  } else {
    index = 0;
  }
  timeout = 3000;
  changeImage();
}, timeout);

left.addEventListener('click', () => {
  index -= 1;
  if(index < 0)
  {
    index = imagesSrc.length-1;
  }
  changeImage();
});

right.addEventListener('click', () => {
  index += 1;
  if(index > imagesSrc.length)
  {
    index = 0;
  }
  changeImage();
});
