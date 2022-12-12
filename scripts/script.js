const img = document.querySelector('.image');
const dots = document.querySelectorAll('.dot');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let flag = false;

const imagesSrc = [
  'https://imgs.search.brave.com/0hPVQmSHROkh4Y8QmaQwojQh6Te1XHyYqhM4Y8Mz8es/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd0MtSWZo/MV9Ha25zSnRFbVk0/cHhTaGI0U1BWTF9N/cGFtczJRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v',
  'https://imgs.search.brave.com/fNIFa-MMOljL6C_PmJ2npfw8nDnzZOSo6NKkdxPfvpY/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3V6bHRv/RjZfRmpvdi1IeDdq/YVBpWmdPMnJyekEy/S3NyLTFBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v',
  'https://imgs.search.brave.com/ui23Y0uQwXLvQn5G0h3l-nb84slst3JXWpcDlZLVJGU/rs:fit:750:741:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvNWtzNnhn/cnIxd2syMS5qcGc',
  'https://imgs.search.brave.com/fVGBMbJ-062jtwjLDdGrih7siNBacUGG5BEQS6EQp3g/rs:fit:736:721:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvM2g4MzB0/dGFvODM0MS5qcGc',
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
let timeout = 5000;

setInterval(() => {
  if (index < imagesSrc.length) {
    index += 1;
  } else {
    index = 0;
  }
  timeout = 5000;
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
