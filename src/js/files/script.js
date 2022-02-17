// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


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
document.addEventListener("mouseover",function(e){
	//Добавяем класс для КНОПКИ ЯЗЬІКА по наведению на кнопку
	if(e.target.closest('.actions-header__language')){
		languageButton.classList.add("_search-active");
		languageButtonFooter.classList.add("_search-active");
	}
	else{
		languageButton.classList.remove("_search-active");
		languageButtonFooter.classList.remove("_search-active");
	}
	if(e.target.closest('.actions-footer__language')){
		languageButtonFooter.classList.add("_search-active");
	}
	else{
		languageButtonFooter.classList.remove("_search-active");
	}

});

//========Открьітие - Заккрьітие поля INPUT по нажатию на Кнопку SEARCH
document.addEventListener("click", buttonClickSearch);

function buttonClickSearch(e){
	if(e.target.closest(".actions-header__search-button")){
		searchInput.classList.toggle("_search-active");
		if(searchInput.value == ""){//=========ЗАПРЕЩАЮ ОТПРАВКУ ЕСЛИ ПОЛЕ ПОИСКА ПУСТОЕ========
			e.preventDefault(e);
		}
	}
	//=========Закрьіваю поле INPUT Search если кликать не на него и не на кнопку SEARCH===============
	if(!e.target.closest(".actions-header__search-input") && !e.target.closest(".actions-header__search-button")){
		searchInput.classList.remove("_search-active");
	}
}



//Смена язьіка по клику в Хедере и в Футере
document.addEventListener("click", buttonClickLangSwitch);

function buttonClickLangSwitch(e){
	if(e.target.closest(".actions-header__language") || e.target.closest(".actions-footer__language")){
		languageButton.classList.toggle("_language-change");
		languageButtonFooter.classList.toggle("_language-change");
	}
	if(languageButton.classList.contains("_language-change") || languageButtonFooter.classList.contains("_language-change")){
			englishButton.innerHTML = `<span>RU</span><span class="arrow-down"></span>`;
			russianButton.innerHTML = `<span>ENG</span>`;
			englishButtonFooter.innerHTML = `<span>RU</span><span class="arrow-down"></span>`;
			russianButtonFooter.innerHTML = `<span>ENG</span>`;
		} else {
			englishButton.innerHTML = `<span>ENG</span><span class="arrow-down"></span>`;
			russianButton.innerHTML = `<span>RU</span>`;
			englishButtonFooter.innerHTML = `<span>ENG</span><span class="arrow-down"></span>`;
			russianButtonFooter.innerHTML = `<span>RU</span>`;
		}
};




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
document.addEventListener("mouseover", subMenuShow);
//Собьітие КЛИК на саб-меню====================
document.addEventListener("click", subMenuShowClick);


//Функция появления саб меню при НАВЕДЕНИИ на тайтл 
function subMenuShow(e){
	if(e.target.closest('.menu-header__item_submenu') || e.target.closest('.header-submenu__body')){
		subMenu.classList.add('submenu-show');
	}
	else{
		subMenu.classList.remove('submenu-show');
	}
}
//Функция появления саб-меню при КЛИКЕ на тайтл
function subMenuShowClick(e){
	//Хедер саб-меню открьітие-закрьітие
	if(e.target.closest('.menu-header__item_submenu')){
		subMenu.classList.toggle('submenu-show');
	}
	//Футер саб-меню открьітие-закрьітие
	if(e.target.closest('.menu-footer__item_submenu')){
		subMenuFooter.classList.toggle('submenu-show');
	}
	else{
		subMenuFooter.classList.remove('submenu-show');
	}
}


// ТАБЫ КОЛЛЕКЦИИ НА ГЛАВНОЙ

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


//Обьявляем Адрес Магазина в переменную
const storeLocationAdress = document.querySelector('.store-location__adress');

//Собьітие КЛИК на Адресе Магазина====================
document.addEventListener("click", storeLocationClick);

//Функция присвоения класса 'map-active' всему блоку с картой при КЛИКЕ на Адресе Магазина
function storeLocationClick(e){
	//
	if(e.target.closest('.store-location__adress')){
		storeLocation.classList.toggle('map-active');
	}
	
}