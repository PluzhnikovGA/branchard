// Artist menu in header

document.querySelectorAll('.item__btn').forEach(button => {
  button.addEventListener('click', function(openArtistList) {
    document.querySelectorAll('.level-two__item').forEach(item => {
      if (item.querySelector('.item__btn') !== button) {
        item.classList.remove('level-two__item--active');
      };
    });
    openArtistList._isClick == true;

    button.parentElement.classList.toggle('level-two__item--active');
  });
});

document.body.addEventListener('click', function(openArtistList) {
  if (
    openArtistList.target.classList.contains('item__btn') == true ||
    openArtistList.target.classList.contains('item__block') == true ||
    openArtistList.target.classList.contains('scroll-bar__list') == true ||
    openArtistList.target.classList.contains('simplebar-content') == true
  ) return

  document.querySelectorAll('.level-two__item').forEach(item => {
    item.classList.remove('level-two__item--active')
  });
});

// Open Search menu in header

let btnOpenCloseMenu = document.querySelector('.level-one__search');
let headerLevelTwo = document.querySelector('.header__level-two');
let formSearch = document.querySelector('.level-two__form');
let btnSearch = document.querySelector('.form__search');

btnOpenCloseMenu.addEventListener('click', function() {
  btnOpenCloseMenu.classList.toggle('level-one__search--active');
  headerLevelTwo.classList.toggle('header__level-two--active');
});

btnOpenCloseMenu.addEventListener('keydown', function(activeSearch) {
  if (document.documentElement.scrollWidth <= 1200 &&
    document.querySelector('.level-one__search--active') != null) {
    if (activeSearch.key === keyEscape) {
        btnOpenCloseMenu.classList.remove('level-one__search--active');
        headerLevelTwo.classList.remove('header__level-two--active');
    };
  };
});

btnSearch.addEventListener('keydown', function(activeSearch) {
  if (document.documentElement.scrollWidth <= 1200 &&
    document.querySelector('.level-one__search--active') != null) {
    var keysTrigger = ['Escape', 'Enter'];
    if (keysTrigger.includes(activeSearch.key)) {
      btnOpenCloseMenu.classList.remove('level-one__search--active');
      headerLevelTwo.classList.remove('header__level-two--active');
    };
  };
});

document.body.addEventListener('click', function(activeSearch) {
  if (document.documentElement.scrollWidth <= 1200 &&
    document.querySelector('.level-one__search--active') != null &&
    (activeSearch.target.classList.contains('search__icon') != true &&
    activeSearch.target.classList.contains('form__search-text') != true)
    ) {
      btnOpenCloseMenu.classList.remove('level-one__search--active');
      headerLevelTwo.classList.remove('header__level-two--active');
    };
});


// Search form in header

const searchText = document.querySelector('.form__search-text');

searchText.addEventListener('click', function(activate_searchText) {
  activate_searchText._isClick = true;
  searchText.classList.add("form__search-text--active");
  searchText.classList.add("form__search-text--active::placeholder");
});

searchText.addEventListener('keydown', function(activate_searchText) {
  var tabKey = ['Tab', 'Enter', 'Escape']
  if (tabKey.includes(activate_searchText.key)) {
    searchText.classList.remove("form__search-text--active");
    searchText.classList.remove("form__search-text--active::placeholder");
    if (document.documentElement.scrollWidth <= 1200) {
      btnOpenCloseMenu.classList.remove('level-one__search--active');
      headerLevelTwo.classList.remove('header__level-two--active');
    };
  };
});

document.body.addEventListener('click', function(activate_searchText) {
  if (activate_searchText._isClick == true) return
  searchText.classList.remove("form__search-text--active");
  searchText.classList.remove("form__search-text--active::placeholder");
});

// Burger-menu in header

let burger = document.querySelector('.burger');
let menu = document.querySelector('.level-one__menu');
let menuLinks = menu.querySelectorAll('.nav__link');
let btnEntrance = menu.querySelector('.level-one__entrance');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('level-one__menu--active');
  document.body.classList.toggle('overflow--hidden');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){
    burger.classList.remove('burger--active')
    menu.classList.remove('level-one__menu--active')
    document.body.classList.remove('overflow--hidden')
  });
});

btnEntrance.addEventListener('click', function() {
  burger.classList.remove('burger--active');
  menu.classList.remove('level-one__menu--active');
  document.body.classList.remove('overflow--hidden');
});

// Swiper in hero block

const swiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
 });

//  Scroll to map in hero block

var scrollMap = document.getElementById("myMap");
var scrollBtnMap = document.querySelector(".hero__btn")

function handleBtnClickScroll() {
  scrollMap.scrollIntoView({block: "center", behavior: "smooth"});
};

scrollBtnMap.addEventListener('click', handleBtnClickScroll);

//  Swiper in gallery block

const element = document.querySelector(".gallery__select-box");
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
});

const swiper_two = new Swiper('.gallery__swiper', {
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      allowTouchMove: false,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.btn-swiper-one-next',
    prevEl: '.btn-swiper-one-prev',
  },
  pagination: {
    el: '.swiper-pagination-one',
    type: 'fraction',
  },
 });

//  Open info about picture in gallery block

const btnsPicture = document.querySelectorAll('.gallery__swiper-slide');
const windows_overlay = document.querySelector('.gallery__expanding-windows-overlay');
const windows = document.querySelectorAll('.gallery__expanding-window');
const keyEscape = "Escape"

btnsPicture.forEach((el) => {
  el.addEventListener('click', (openPicture) => {
    let path = openPicture.currentTarget.getAttribute('data-path');

    document.querySelector(`[data-target="${path}"]`).classList.add('expanding-window--visible');
    windows_overlay.classList.add('expanding-windows-overlay--visible');
    document.querySelector(`[data-path="${path}"]`).classList.add('swiper-slide--active')
  });
});

document.body.addEventListener('click', function(closeInfoPicture) {
  if (document.querySelector('.swiper-slide--active') != null &&
  (closeInfoPicture.target.classList.contains('gallery__expanding-windows-overlay') === true) ||
  closeInfoPicture.target.classList.contains('expanding-window__escape') === true) {
    closePicture()
  }
});

window.addEventListener('keydown', function(escape) {
  if (escape.key == keyEscape && this.document.querySelector('.expanding-windows-overlay--visible') != null) {
    closePicture()
  }
});

function closePicture() {
  windows_overlay.classList.remove('expanding-windows-overlay--visible');
  windows.forEach((ele) => {
    ele.classList.remove('expanding-window--visible');
  });
  document.querySelector('.swiper-slide--active').classList.remove('swiper-slide--active');
}

//  Open info about artist and scroll to artist in catalog block

const btnsArtist = document.querySelectorAll('.artist__btn');
var scrollArtist = document.getElementById("info-artist");

btnsArtist.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-artist');
    const windowsArtist = document.querySelectorAll('.info-artist__container');
    const nameArtist = document.querySelectorAll('.info-artist__name');

    windowsArtist.forEach((el) => {
      el.classList.remove('info-artist__container--active');
    })

    nameArtist.forEach((el) => {
      el.classList.remove('info-artist__name--active');
    })


    const target = document.querySelector(`[data-artist-target="${path}"]`)

    if (target === null) {
      document.querySelector(`[data-artist-target="unknown_artist"]`).classList.add('info-artist__container--active');
      document.querySelector(`[data-artist-name="${path}"]`).classList.add('info-artist__name--active');
    } else {
      target.classList.add('info-artist__container--active')
    }

    if (window.innerWidth < 577) {
      scrollArtist.scrollIntoView({block: 'start', behavior: "smooth"});
    };

  });
});

// accordion in catalog block

new Accordion('.catalog__accordion', {
  elementClass: 'accordion__item',
  triggerClass: 'accordion__btn',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// swiper in events block

const swiper_three = new Swiper('.events__swiper', {
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,
  allowTouchMove: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.btn-swiper-two-next',
    prevEl: '.btn-swiper-two-prev',
  },
  pagination: {
    el: '.swiper-pagination-two',
    type: 'bullets',
    clickable: true,
  },
 });

//  Tooltip

const toolTip = document.body.querySelectorAll('.projects__marker');

toolTip.forEach((btn) => {
  btn.addEventListener('click', (click) => {
    toolTip.forEach((btnO) => {
      btnO.classList.remove('marker--active');
    })
    if (click.target.classList.contains('marker__popup') == true ||
    click.target.classList.contains('marker__text') == true) return
    btn.classList.add('marker--active');
  });
});

toolTip.forEach((btn) => {
  btn.addEventListener('keydown', (keydown) => {
    var keysTrigger = ['Escape', 'Enter', 'Tab'];
    if (document.querySelector('.marker--active') != null &&
    keysTrigger.includes(keydown.key)) {
      toolTip.forEach((btnO) => {
        btnO.classList.remove('marker--active');
      });
    } else {
      if (document.querySelector('.marker--active') == null && keysTrigger.includes('Enter')) {
        btn.classList.add('marker--active');
      };
    };
  });
});

document.body.addEventListener('click', click => {
  if (document.querySelector('.marker--active') != null &&
  click.target.classList.contains('projects__marker') == false &&
  click.target.classList.contains('marker__open') == false &&
  click.target.classList.contains('marker__i') == false &&
  click.target.classList.contains('marker__ellipse') == false
  ) {
    document.querySelector('.marker--active').classList.remove('marker--active')
  };
})

// swiper in projects block

const swiper_four = new Swiper('.partners-card__swiper', {
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  allowTouchMove: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.btn-swiper-three-next',
    prevEl: '.btn-swiper-three-prev',
  },
 });

 // form in contacts block

var selectTel = document.querySelector("input[type='tel']");
var telMask = new Inputmask("+7(999) 999-99-99")

telMask.mask(selectTel)

const validation = new JustValidate('.contacts__form', {
  errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
    fontSize: '12px',
    lineHeight: "16px",
    color: '#d11616',
  },
  errorLabelCssClass: 'error',
  successFieldCssClass: 'is-valid',
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('.input-name', [
  {
    rule: "required",
    value: true,
    errorMessage: "Введите имя",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "Минимальная длина имени 3 символа",
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: "Максимальная длина имени 30 символов",
  },
  {
    rule: 'customRegexp',
    value: /^[a-zа-яё]+$/gi,
    errorMessage: "Указан недопустимый символ",
  },
])
.addField('.input-tel', [
  {
    rule: "required",
    value: true,
    errorMessage: "Введите телефон",
  },
  {
    rule: 'function',
    validator: function() {
      const phone = selectTel.inputmask.unmaskedvalue();
      return phone.length === 10
    },
    errorMessage: "Введите корректный телефон",
  }
]).onSuccess((event) => {
  let formData = new FormData(event.target);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Отправлено');
      };
    };
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  event.target.reset();
});

// map in contacts block

if (document.documentElement.scrollWidth > 576) {
  var webSiteSize = 'big'
} else {
  var webSiteSize = 'little'
};

ymaps.ready(init);
function init() {
  myMap = new ymaps.Map('myMap', {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: [],
  });

  if (document.documentElement.scrollWidth > 576) {
    addZoomBtn();
    addGeoBtn();
  };

  myMap.behaviors.disable('scrollZoom', 'drag');

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts/point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10],

  });

  myMap.geoObjects.add(myPlacemark);

  function addOrRemoveBbtn () {
    if (document.documentElement.scrollWidth > 576 && webSiteSize === 'little') {
      addZoomBtn();
      addGeoBtn();

      webSiteSize = 'big';
    } else {
      if (document.documentElement.scrollWidth <= 576 && webSiteSize === 'big') {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
        webSiteSize = 'little'
      };
    };
  };

  window.setInterval(addOrRemoveBbtn, 100);

  function addZoomBtn() {
    myMap.controls.add('zoomControl', {
      position: {
        bottom: 'auto',
        top: 261,
        right: 11,
        left: 'auto',
      },
      size: "small",
    });
  };

  function addGeoBtn() {
    myMap.controls.add('geolocationControl', {
      position: {
        bottom: 'auto',
        top: 353,
        right: 11,
        left: 'auto',
      },
    });
  };
};
