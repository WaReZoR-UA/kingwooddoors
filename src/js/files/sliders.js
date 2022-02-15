/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Lazy, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
const customGallery = document.querySelectorAll('.gallery-slider__images');
const tumbsGallery = document.querySelectorAll('.gallery-slider__tumbs');
let swiperTumbs;
// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице

	for (let i = 0; i < customGallery.length; i++) {
		customGallery[i].classList.add('gallery-slider__images_' + i);
		tumbsGallery[i].classList.add('gallery-slider__tumbs_' + i);
		if (document.querySelector('.gallery-slider__tumbs_' + i)) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			swiperTumbs = new Swiper('.gallery-slider__tumbs_' + i, { // Указываем скласс нужного слайдера
				modules: [Lazy],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				simulateTouch: true,
				freeMode: true,
				loop: true,
				lazy: true,
				centeredSlides: true,
				watchSlidesProgress: true,
			});
		}
		if (document.querySelector('.gallery-slider__images_' + i)) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.gallery-slider__images_' + i, { // Указываем скласс нужного слайдера
				modules: [Navigation, Lazy, Thumbs],
				observer: true,
				observeParents: true,
				simulateTouch: true,
				slidesPerView:'auto',
				freeMode: true,
				centeredSlides: true,
				loop: true,
				lazy: true,
				navigation: {
					prevEl: '.gallery-slider__prev',
					nextEl: '.gallery-slider__next',
				},
				thumbs: {
					swiper: swiperTumbs,
				},
			});
	}
		//Слайдер ХЕДЕРА
		if (document.querySelector('.header-slider__images')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.header-slider__images', { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Lazy, Thumbs, Pagination, Autoplay],
				observer: true,
				observeParents: true,
				simulateTouch: true,
				slidesPerView: "auto",
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				speed: 2500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				freeMode: true,
				centeredSlides: true,
				loop: true,
				lazy: true,
				navigation: {
					prevEl: '.header-slider__prev',
					nextEl: '.header-slider__next',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				},
				/*
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				*/
				// События
				on: {
				}
			});
		}
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});