// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";

import { Loader } from "@googlemaps/js-api-loader"


//====================custom select====================================================================================================================================
const titleMenuBlock = document.querySelector('.title-menu');
if (titleMenuBlock) {
const selOptions = titleMenuBlock.querySelector('.select__options');
const selIcon = titleMenuBlock.querySelector('.select__icon');
let titleMenuSelect = function () {
		document.addEventListener('click', function (e) {
			if (e.target.closest('.select__title')) {
				selOptions.classList.toggle('select__options_open');
				selIcon.classList.toggle('select__icon_open');
			} else {
				selOptions.classList.remove('select__options_open');
				selIcon.classList.remove('select__icon_open');
			}
		})
	}
	titleMenuSelect();
}

//====================google maps renew====================================================================================================================================

if (document.getElementById('map')) {
	const getLocations = document.querySelectorAll('[data-spollers] [data-spoller]');
	getLocations.forEach(getLocation => getLocation.addEventListener('click', function () {
		if (this.getAttribute('data-latitude') && this.getAttribute('data-longitude')) {
			location.lng = +this.getAttribute('data-latitude');
			location.lat = +this.getAttribute('data-longitude');
			zoomState = 14;
		}
		loadMap();
	}));

	document.addEventListener("selectCallback", function (e) {
		const currentSelect = e.detail.select;
		const optionsList = currentSelect.querySelectorAll('option');
		const pseudoOptions = document.querySelectorAll('.select__option');
		for (let index = 0; index < pseudoOptions.length; index++) {
			if (pseudoOptions[index].hasAttribute('hidden')) {
				const curentPseudoOption = pseudoOptions[index].getAttribute('data-value');
				if (curentPseudoOption === currentSelect.value) {
					const curentOption = optionsList[index];
					if (curentOption.getAttribute('data-latitude') && curentOption.getAttribute('data-longitude')) {
						location.lng = +curentOption.getAttribute('data-latitude');
						location.lat = +curentOption.getAttribute('data-longitude');
						zoomState = 14;
					}
					loadMap();
				}
			}
		}
	});
	//================================GOOGLE MAPS========================================================================================================================
	const location = { lat: 39.97077982835153, lng: -101.9679369497046 };
	let zoomState = 5;
	function loadMap() {
		const loader = new Loader({
		apiKey: "AIzaSyAINCif2uQXqQO47ySLAjm1Xhv-u602rbo",
		version: "weekly",
		});

		loader.load().then(() => {
			const map = new google.maps.Map(document.getElementById("map"), {
			center: location,
			zoom: zoomState,
			});
			const marker = new google.maps.Marker({
				position: location,
				map: map,
			});
		});
	}
	loadMap();
}




//===============Search Bar and Search Button Functioning=================================

//Обьявляем кнопку Поиска в пееременную
const searchButton = document.querySelector('.actions-header__search-button');

//Обьявляем язьіковой блок в пееременную
const languageButton = document.querySelector('.actions-header__language');
const languageButtonFooter = document.querySelector('.actions-footer__language');

//Обьявляем кнопку ENG в пееременную
const englishButton = document.querySelector('.actions-header__english');
const englishButtonFooter = document.querySelector('.actions-footer__english');

//Обьявляем кнопку RU в пееременную
const russianButton = document.querySelector('.actions-header__russian');
const russianButtonFooter = document.querySelector('.actions-footer__russian');

//Обьявляем поле Поиска в переменную
const searchInput = document.querySelector('.actions-header__search-input');


//Слушаем собьітие MOUSEOVER на документе
document.addEventListener("mouseover", function (e) {
	//Добавяем класс для КНОПКИ ЯЗЬІКА по наведению на кнопку
	if (e.target.closest('.actions-header__language')) {
		languageButton.classList.add("_search-active");
		languageButtonFooter.classList.add("_search-active");
	} else {
		languageButton.classList.remove("_search-active");
		languageButtonFooter.classList.remove("_search-active");
	}
	if (e.target.closest('.actions-footer__language')) {
		languageButtonFooter.classList.add("_search-active");
	} else {
		languageButtonFooter.classList.remove("_search-active");
	}

});

//========Открьітие - Заккрьітие поля INPUT по нажатию на Кнопку SEARCH
document.addEventListener("click", buttonClickSearch);

function buttonClickSearch(e) {
	if (e.target.closest(".actions-header__search-button")) {
		searchInput.classList.toggle("_search-active");
		if (searchInput.value == "") { //=========ЗАПРЕЩАЮ ОТПРАВКУ ЕСЛИ ПОЛЕ ПОИСКА ПУСТОЕ========
			e.preventDefault(e);
		}
	}
	//=========Закрьіваю поле INPUT Search если кликать не на него и не на кнопку SEARCH===============
	if (!e.target.closest(".actions-header__search-input") && !e.target.closest(".actions-header__search-button")) {
		searchInput.classList.remove("_search-active");
	}
}

//========ПОД-МЕНЮ====================

//Обьявляем ПОДМЕНЮ в переменную
const subMenu = document.querySelector('.menu-header__body');
const subMenuFooter = document.querySelector('.menu-footer__body');

//Обьявляем ЗАГОЛОВОК ПОДМЕНЮ в переменную
const subMenuTitle = document.querySelector('.menu-header__item_submenu');
const subMenuFooterTitle = document.querySelector('.menu-footer__item_submenu');

//Обьявляем ТЕЛО ПОДМЕНЮ в переменную
//const subMenuBody = document.querySelector('.header-submenu__body');

//Собьітие наведение мьішью на саб-меню====================
// document.addEventListener("mouseover", subMenuShow);
//Собьітие КЛИК на саб-меню====================
document.addEventListener("click", subMenuShowClick);


//Функция появления саб меню при НАВЕДЕНИИ на тайтл 
function subMenuShow(e) {
	if (e.target.closest('.menu-header__item_submenu') || e.target.closest('.header-submenu__body')) {
		subMenu.classList.add('submenu-show');
	} else {
		subMenu.classList.remove('submenu-show');
	}
}
//Функция появления саб-меню при КЛИКЕ на тайтл
function subMenuShowClick(e) {
	//Хедер саб-меню открьітие-закрьітие
	if (e.target.closest('.menu-header__item_submenu')) {
		subMenu.classList.toggle('submenu-show');
	} else {
		subMenu.classList.remove('submenu-show');
	}
	//Футер саб-меню открьітие-закрьітие
	if (e.target.closest('.menu-footer__item_submenu')) {
		subMenuFooter.classList.toggle('submenu-show');
	} else {
		subMenuFooter.classList.remove('submenu-show');
	}
}


// ТАБЫ КОЛЛЕКЦИИ НА ГЛАВНОЙ

function startTabs() {
	const collections = document.querySelectorAll('.collection');

	if (collections.length) {
		collections.forEach(collection => {

			if (collection) {

				const collectionTabs = collection.querySelectorAll('.collection__name');
				const collectionContent = collection.querySelectorAll('.collection__body');
				const collectionTabsParent = collection.querySelector('.collection__navigation');

				function hideCollectionContent() {
					collectionContent.forEach(item => {
						item.classList.add('collection__body_hide');
					});
					collectionTabs.forEach(item => {
						item.classList.remove('collection__name_tab-active');
					});
				}

				function showCollectionContent(i = 0) {
					collectionContent[i].classList.add('collection__body_show');
					collectionContent[i].classList.remove('collection__body_hide');
					collectionTabs[i].classList.add('collection__name_tab-active');
				}

				hideCollectionContent();
				showCollectionContent();


				collectionTabsParent.addEventListener('mouseover', (e) => {
					const target = e.target;
					if (target && target.classList.contains('collection__name')) {
						collectionTabs.forEach((item, index) => {
							if (target == item) {
								hideCollectionContent();
								showCollectionContent(index);
							}
						});
					}
				});
			}
		});
	}
}
startTabs();







//==========STICKY HEADER-MENU=======================



//======СОБЬІТИЕ ПО ЗАГРУЗКЕ СТИЛЕЙ СТРАНИЦЬІ============================
window.addEventListener("load", function (e) {




	//=====Обьявляем Хедер-меню в переменную===============
	var header = document.getElementById("myHeader");
	//=====Обьявляем Хедер-ТОП в переменную===============
	const headerTop = document.querySelector('.header__top');
	//=====Обьявляем ВЬІСОТУ Хедер-ТОП в переменную===============
	const headerTopHeight = headerTop.offsetHeight;
	//=====Обьявляем переменную с расстоянием от веха страницьі до Хедер-меню
	var sticky = header.offsetTop - headerTopHeight;


	//======СОБЬІТИЕ СКРОЛЛ============================
	window.addEventListener("scroll", function (e) {
		if (window.scrollY > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});
});







//==============Функионал Кнопки с адресом со страницьі HOW TO BUY=================

//Обьявляем Блок с Кратой в переменную
const storeLocation = document.querySelector('.store-location');
	if (storeLocation) {
		//Собьітие КЛИК на Вьіборе Магазина====================
		document.addEventListener("click", storeLocationClick);
	
		//Функция присвоения класса 'map-active' всему блоку с картой при КЛИКЕ на Вьібор Магазина
		function storeLocationClick(e) {
			//
			if (e.target.closest('.select__body')) {
				storeLocation.classList.add('map-active');
			}
		}
	}
