const $arrowLeft = document.querySelector('.arrow-left');
const $arrowRight = document.querySelector('.arrow-right');

const $carrousel = document.querySelector('.content');
const $form = document.querySelector('.form');

// TO MODAL
const $modal = document.querySelector('.modal');
const $modalContainer = document.querySelector('.modal-container');
const $cancel = document.querySelector('.cancel');
const $button_cancel = document.querySelector('#button-cancel');
const $image = document.querySelectorAll('.unvisible');
const $img = document.querySelector('#img');
const $title = document.querySelector('#title');
const $idTitle = document.getElementById('header-title');

// TO HERO
const $wafe = document.querySelector('.hero__wafe');
const $return = document.querySelector('.return');

// TO TABLE
const $table = document.querySelector('.table');

const $contact = document.querySelector('#contact');
const $number = document.querySelector('#number');
const $three = document.querySelector('#three');
const options = {
  // root,
  // rootMargin:
  // threshold
}
const observer = new IntersectionObserver(cb, options);

observer.observe($wafe);

window.addEventListener('load', () => {
  $carrousel.style = "overflow: hidden;";
});

document.body.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    $modal.classList.remove('modal-active');
  } else {
    return null;
  }
});

$form.addEventListener('submit', e => {
  e.preventDefault();
  let list = [];
  const content = e.target.content.value;
  if (content.length < 20) {
    showNotify(false);
    return document.getElementById('error-form').innerHTML = "The content of the message must be higher than 20 words";
  } else {
    document.getElementById('error-form').innerHTML = "";
    showNotify(true);
    setTimeout(() => {
      showNotify(false);
    }, 60000);
  }
  list.push(e.target.name.value);
  list.push(e.target.email.value);
  list.push(content);
  console.log(list);
});

$arrowLeft.addEventListener('click', e => {
  $carrousel.scrollLeft -= $carrousel.offsetWidth;
  conditional();
});

$arrowRight.addEventListener('click', e => {
  $carrousel.scrollLeft += $carrousel.offsetWidth;
  conditionalTwo();
});

$cancel.addEventListener('click', (e) => {
  $modal.classList.remove('modal-active');
});

$button_cancel.addEventListener('click', e => {
  $modal.classList.remove('modal-active');
});

$contact.addEventListener('click', e => {
  $number.classList.toggle('visible-return');
});

$image.forEach(item => {
  item.addEventListener('click', e => {
    const imgByItem = item.children[0].children[0];
    $modalContainer.style = "display: inherit;";
    $title.textContent = imgByItem.alt;
    $img.setAttribute('src', imgByItem.currentSrc);
    $modal.classList.add('modal-active');
    $idTitle.focus();
  });
});

$table.addEventListener('click', e => {
  $carrousel.style = "overflow: auto;";
  $table.classList.add('table-fade');
  $arrowRight.classList.remove('not-allowed');
  $arrowRight.removeAttribute('disabled');
  $arrowLeft.classList.remove('not-allowed');
  $arrowLeft.removeAttribute('disabled');
});

function visibleClone() {
  document.querySelector('#one').removeAttribute('tabindex');
  document.querySelector('#two').removeAttribute('tabindex');
  document.querySelector('#three').setAttribute('tabindex', '-1');
  document.querySelector('#four').setAttribute('tabindex', '-1');
  document.querySelector('#five').setAttribute('tabindex', '-1');
}

function conditionalTwo() {
  if ($carrousel.scrollLeft === 0) {
    $three.removeAttribute('tabindex');
    document.querySelector('#one').setAttribute('tabindex', '-1');
    document.querySelector('#four').removeAttribute('tabindex');
  } else if ($carrousel.scrollLeft >= 745) {
    document.querySelector('#five').removeAttribute('tabindex');
    document.querySelector('#three').setAttribute('tabindex', '-1');
    document.querySelector('#two').setAttribute('tabindex', '-1');
  } else {
    console.log('NEVER');
  }
}

function conditional() {
  if ($carrousel.scrollLeft < 800) {
    visibleClone();
  } else if ($carrousel.scrollLeft >= 1000) {
    $three.removeAttribute('tabindex');
    document.querySelector('#two').removeAttribute('tabindex');
    document.querySelector('#five').setAttribute('tabindex', '-1');
    document.querySelector('#one').setAttribute('tabindex', '-1');
    document.querySelector('#four').removeAttribute('tabindex');
  } else {
    document.querySelector('#five').removeAttribute('tabindex');
  }
}

const widthDevice = window.matchMedia('(max-width: 800px)');

widthDevice.addEventListener('change', change);

function change() {
  if (widthDevice.matches) {
    document.querySelector('#one').removeAttribute('tabindex')
    document.querySelector('#four').removeAttribute('tabindex');
    document.querySelector('#three').removeAttribute('tabindex');
    document.querySelector('#five').removeAttribute('tabindex');
    document.querySelector('#two').removeAttribute('tabindex');
  } else {
    document.querySelector('#four').setAttribute('tabindex', '-1');
    document.querySelector('#three').setAttribute('tabindex', '-1');
    document.querySelector('#five').setAttribute('tabindex', '-1');
  }
}

function showNotify(conditional) {
  if (conditional) document.querySelector('.notify-me').style = "display: initial;";
  else document.querySelector('.notify-me').style = "display: none;"
}

function cb(entries, observer) {
  if (entries[0].isIntersecting) {
    $return.classList.remove('visible-return');
  } else {
    $return.classList.add('visible-return');
  }
}
