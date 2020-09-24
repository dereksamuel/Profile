const $arrowLeft = document.querySelector('.arrow-left');
const $arrowRight = document.querySelector('.arrow-right');

const $carrousel = document.querySelector('.content');

// TO MODAL
const $modal = document.querySelector('.modal');
const $modalContainer = document.querySelector('.modal-container');
const $cancel = document.querySelector('.cancel');
const $image = document.querySelectorAll('.content__figure--img');

// TO HERO
const $wafe = document.querySelector('.hero__wafe');
const $return = document.querySelector('.return');

// TO TABLE
const $table = document.querySelector('.table');

const $img = document.querySelector('#img');
const $title = document.querySelector('#title');
const options = {
  // root,
  // rootMargin:
  // threshold
}
const observer = new IntersectionObserver(cb, options);

observer.observe($wafe);
$arrowLeft.addEventListener('click', e => {
  $carrousel.scrollLeft -= $carrousel.offsetWidth;
});

$arrowRight.addEventListener('click', e => {
  $carrousel.scrollLeft += $carrousel.offsetWidth;
});

$cancel.addEventListener('click', (e) => {
  $modal.classList.remove('modal-active');
});

$image.forEach(item => {
  item.addEventListener('click', e => {
    $modalContainer.style = "display: inherit;";
    $title.textContent = e.currentTarget.alt;
    console.log($img.setAttribute('src', e.currentTarget.currentSrc));
    $modal.classList.add('modal-active');
  });
});

$table.addEventListener('click', e => {
  $table.classList.add('table-fade');
  $arrowRight.classList.remove('not-allowed');
  $arrowRight.removeAttribute('disabled');
  $arrowLeft.classList.remove('not-allowed');
  $arrowLeft.removeAttribute('disabled');
});

function cb(entries, observer) {
  if (entries[0].isIntersecting) {
    $return.classList.remove('visible-return');
  } else {
    $return.classList.add('visible-return');
  }
}
