// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//===============Search Bar and Search Button Functioning=================================

//Обьявляем кнопку Поиска в пееременную
const searchButton = document.querySelector('.actions-header__search-button');

//Обьявляем язьіковой блок в пееременную
const languageButton = document.querySelector('.actions-header__language');

//Обьявляем кнопку ENG в пееременную
const englishButton = document.querySelector('.actions-header__english');

//Обьявляем кнопку RU в пееременную
const russianButton = document.querySelector('.actions-header__russian');

//Обьявляем поле Поиска в переменную
const searchInput = document.querySelector('.actions-header__search-input');


//Слушаем собьітие MOUSEOVER на документе
document.addEventListener("mouseover",function(e){
	//Добавяем класс для импута по наведению на кнопку SEARCH, поле поиска, блока язьіка
	if(e.target.closest('.actions-header__search-button') || e.target.closest('.actions-header__search-input')){
		searchInput.classList.add("_search-active");
	} 
	else {
		searchInput.classList.remove("_search-active");
	}
	//Добавяем класс для КНОПКИ ЯЗЬІКА по наведению на кнопку
	if(e.target.closest('.actions-header__language')){
		languageButton.classList.add("_search-active");
	}
	else{
		languageButton.classList.remove("_search-active");
	}
});



//Смена язьіка по клику
document.addEventListener("click", buttonClickLangSwitch);

function buttonClickLangSwitch(e){
	if(e.target.closest(".actions-header__language")){
		languageButton.classList.toggle("_language-change");
		
	}
	if(languageButton.classList.contains("_language-change")){
			englishButton.innerHTML = `<span>RU</span><span class="arrow-down"></span>`;
			russianButton.innerHTML = `<span>ENG</span>`;
		} else {
			englishButton.innerHTML = `<span>ENG</span><span class="arrow-down"></span>`;
			russianButton.innerHTML = `<span>RU</span>`;
		}
};




//========ПОДМЕНЮ====================

//Обьявляем ПОДМЕНЮ в переменную
const subMenu = document.querySelector('.header-submenu');

//Обьявляем ЗАГОЛОВОК ПОДМЕНЮ в переменную
const subMenuTitle = document.querySelector('.header-submenu__title');

//Обьявляем ТЕЛО ПОДМЕНЮ в переменную
const subMenuBody = document.querySelector('.header-submenu__body');

//Собьітие наведение мьішью на саб-меню====================
document.addEventListener("mouseover", subMenuShow);
//Собьітие КЛИК на саб-меню====================
document.addEventListener("click", subMenuShowClick);


//Функция появления саб меню при НАВЕДЕНИИ на тайтл 
function subMenuShow(e){
	if(e.target.closest('.header-submenu__title') || e.target.closest('.header-submenu__body')){
		subMenu.classList.add('submenu-show');
	}
	else{
		subMenu.classList.remove('submenu-show');
	}
}
//Функция появления саб меню при КЛИКЕ на тайтл
function subMenuShowClick(e){
	if(e.target.closest('.header-submenu__title')){
		subMenu.classList.toggle('submenu-show');
	}
}

//document.addEventListener("click",function(e){
//	if(!e.target.pageBody){
//		aproveBlock.style.display = `none`;
//	}
//});
//
//
//
////СМЕНА ЯЗЬІКА
//
////Задаем переменньіе
//const langButton = document.querySelector('.language');
//const langButtonUa = document.querySelector('.language__ua');
//const langButtonRu = document.querySelector('.language__ru');
////const pageBody = document.body;
//
//document.addEventListener("click", buttonClickLangSwitch);
//
//
//		//Функция КЛИКА на КНОПКУ
//		function buttonClickLangSwitch(e){
//			if(e.target.closest(".language")){
//				pageBody.classList.toggle("_language-change");
//				langButton.classList.toggle("_language-change");
//				langButtonUa.classList.toggle("_language-change");
//				langButtonRu.classList.toggle("_language-change");
//			}
//		};

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















