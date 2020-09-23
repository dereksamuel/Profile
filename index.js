const $arrowLeft = document.querySelector('.arrow-left');
const $arrowRight = document.querySelector('.arrow-right');

const $carrousel = document.querySelector('.content');

// PARA EL MODAL
const $modal = document.querySelector('.modal');
const $modalContainer = document.querySelector('.modal-container');
const $cancel = document.querySelector('.cancel');
const $image = document.querySelectorAll('.content__figure--img');

const $img = document.querySelector('#img');
const $title = document.querySelector('#title');

$arrowLeft.addEventListener('click', (e) => {
  $carrousel.scrollLeft -= $carrousel.offsetWidth;
});

$arrowRight.addEventListener('click', (e) => {
  $carrousel.scrollLeft += $carrousel.offsetWidth;
});

$cancel.addEventListener('click', (e) => {
  $modal.classList.remove('modal-active');
});

$image.forEach(item => {
  item.addEventListener('click', (e) => {
    $modalContainer.style = "display: inherit;";
    $title.textContent = e.currentTarget.alt;
    console.log($img.setAttribute('src', e.currentTarget.currentSrc));
    $modal.classList.add('modal-active');
  });
});
