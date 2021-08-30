/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ "./src/css/app.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



(function () {
  //Функция создаёт дерево опций из переданного селекта, 
  //работает также для многоуровневого селекта(уровни указывать в атрибутах data-level).
  function createOptionsTree(select) {
    var selectArr = [];

    var _iterator = _createForOfIteratorHelper(select.options),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var option = _step.value;
        var obj = {
          text: option.text,
          childList: [],
          value: option.value
        };

        if (!option.dataset.level) {
          selectArr.push(obj);
        } else {
          var parent = getNthParent(selectArr[selectArr.length - 1], parseInt(option.dataset.level));
          parent.childList.push(obj);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return selectArr;
  } // Вспомогательная функция. Нужна при использовании многоуровневого селекта. 
  // Определяет родительский элемент для добавления вложенных опций.


  function getNthParent(option, level) {
    var resultOption = option;
    --level;

    while (--level) {
      var childList = resultOption.childList;
      resultOption = childList[childList.length - 1];
    }

    return resultOption;
  } // Создаём список на основе ранее подготовленного из селекта массива данных.
  // Для многоуровневых селектов используется рекурсия.


  function createTreeDom(arr) {
    var ul = document.createElement('ul');

    var _iterator2 = _createForOfIteratorHelper(arr),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var option = _step2.value;
        var li = document.createElement('li');
        li.classList.add("selectWindow__list-item");
        li.insertAdjacentHTML("afterbegin", "<label class=\"checkbox\">\n                                              <input value=\"".concat(option.value, "\" type=\"checkbox\" class=\"checkbox__input\">\n                                              <div class=\"checkbox__state\">\n                                                  <div class=\"checkbox__control\">\n                                                      <svg class=\"checkbox__icon\" width=\"13\" height=\"13\" viewBox=\"0 0 12 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                          <path d=\"M1.71484 7.92681L5.60056 10.9913L10.4577 3.33011\" stroke=\"white\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                                      </svg>    \n                                                  </div>\n                                                  <div class=\"checkbox__legend selectWindow__list-item-text\">\n                                                      ").concat(option.text, "\n                                                  </div>\n                                              </div>\n                                          </label>"));

        if (option.childList.length > 0) {
          var childrenUl = createTreeDom(option.childList);

          if (childrenUl) {
            li.append(childrenUl);
          }
        }

        ul.classList.add('selectWindow__sublist');
        ul.append(li);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return ul;
  } // Отрисовываем DOM


  function createDOM() {
    // Для каждого мультиселекта на странице...
    var multiSelects = document.querySelectorAll('.multiSelect');

    var _iterator3 = _createForOfIteratorHelper(multiSelects),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var multiSelect = _step3.value;
        // Передаём мультиселект для подготовки дерева опций.
        var finalArr = createOptionsTree(multiSelect); // Создаём контейнер.

        var container = document.createElement('div');
        container.classList.add("container");
        document.body.append(container);
        container.append(multiSelect); // Название нашего селекта.

        var headerTitle = document.createElement('p');
        headerTitle.classList.add("header__title");
        headerTitle.textContent = "Выбор мультфильмов"; // Кнопку "Показать выбранное".

        var showSelected = document.createElement("button");
        showSelected.setAttribute("type", "button");
        showSelected.classList.add("header__button_showSelected");
        var closestSelect = container.querySelector(".multiSelect");
        showSelected.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 (".concat(getSelectValues(closestSelect).length, ")"); // Хедер.

        var header = document.createElement("div");
        header.classList.add("header");
        header.append(headerTitle);
        header.append(showSelected);
        container.append(header); // Создаём поле индикации выбора.

        var selectField = document.createElement("div");
        selectField.classList.add("selectField");
        selectField.textContent = "Пока ничего не выбрано";
        container.append(selectField); // Окно выбора опций.

        var selectWindow = document.createElement("div");
        selectWindow.classList.add("selectWindow");
        var selectHeader = document.createElement("div");
        selectHeader.classList.add("selectWindow__header");
        selectWindow.append(selectHeader); // Название окна выбора опций.

        var selectTitle = document.createElement("div");
        selectTitle.classList.add("selectWindow__title");
        selectTitle.innerHTML = "<svg class=\"selectWindow__back-arrow\" width=\"20\" height=\"24\" viewBox=\"0 0 20 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M10 2.68524L3 11.8787M3 11.8787L10 21.0721M3 11.8787H18\" stroke=\"black\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n                          </svg>\n                          <p>\u0412\u044B\u0431\u043E\u0440 \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u043E\u0432</p>";
        selectHeader.append(selectTitle); // Поле поиска.

        var searchField = document.createElement("input");
        searchField.classList.add("selectWindow__searchField");
        searchField.setAttribute("type", "text");
        selectHeader.append(searchField); // Создаём DOM на основе дерева опций, добавляем его в окно выбора опций.

        selectWindow.append(createTreeDom(finalArr)); // Кнопка "Применить".

        var applyButton = document.createElement("button");
        applyButton.setAttribute("type", "button");
        applyButton.classList.add("selectWindow__apply-button");
        var applyButtonText = document.createElement("span");
        applyButtonText.textContent = "Применить";
        applyButtonText.classList.add("selectWindow__apply-button-text");
        applyButton.append(applyButtonText); // Кнопка "Очистить".

        var clearButton = document.createElement("button");
        clearButton.setAttribute("type", "button");
        clearButton.classList.add("selectWindow__clear-button");
        clearButton.textContent = "Очистить"; // Контейнер для кнопок "Применить" и "Очистить".

        var buttonsWrapper = document.createElement("div");
        buttonsWrapper.classList.add("selectWindow__buttons-wrapper");
        selectWindow.append(buttonsWrapper);
        buttonsWrapper.append(applyButton);
        buttonsWrapper.append(clearButton);
        container.append(selectWindow); // Правим классы основного списка для корректной работы кода.

        var uls = selectWindow.querySelectorAll('ul');
        uls[0].classList.remove('selectWindow__sublist');
        uls[0].classList.add('selectWindow__list');
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  createDOM(); // Добавляем обработчики событий на элементы.

  function addListeners() {
    var containers = document.querySelectorAll(".container");

    var _iterator4 = _createForOfIteratorHelper(containers),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var container = _step4.value;
        var showSelected = container.querySelector(".header__button_showSelected");
        showSelected.addEventListener("click", openList1);
        var selectField = container.querySelector(".selectField");
        selectField.addEventListener("click", openList2);
        var backArrow = container.querySelector(".selectWindow__back-arrow");
        backArrow.addEventListener("click", goBack);
        var applyButton = container.querySelector(".selectWindow__apply-button");
        applyButton.addEventListener("click", handleApply);
        var checkAll = container.querySelector(".checkbox__input");
        checkAll.addEventListener("click", handleCheckAll);
        var checkItems = container.querySelectorAll(".checkbox__input");

        var _iterator5 = _createForOfIteratorHelper(checkItems),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var item = _step5.value;
            item.addEventListener("change", checkSelects);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var clearButton = container.querySelector(".selectWindow__clear-button");
        clearButton.addEventListener("click", clearChecks);
        var multiSelect = container.querySelector('.multiSelect');
        multiSelect.addEventListener("change", onSelectChange);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  addListeners(); // Обработчик клика по кнопке "Показать выбранное". Открывает окно выбора опций.

  function openList1(e) {
    document.querySelectorAll(".selectWindow_visible").forEach(function (elem) {
      return elem.classList.remove("selectWindow_visible");
    });
    e.target.closest(".container").querySelector(".selectWindow").classList.toggle("selectWindow_visible");
  } // Обработчик клика по полю индикации выбора. Открывает окно выбора опций.


  function openList2(e) {
    document.querySelectorAll(".selectWindow_visible").forEach(function (elem) {
      return elem.classList.remove("selectWindow_visible");
    });
    e.target.parentNode.querySelector(".selectWindow").classList.toggle("selectWindow_visible");
  } // Возвращение из окна выбора опций при нажатии стрелочки "назад".


  function goBack(e) {
    e.target.closest(".selectWindow").classList.remove("selectWindow_visible");
  } // Обработка клика по кнопке "Применить".


  function handleApply(event) {
    var closestContainer = event.target.closest(".container");
    var allChecks = closestContainer.querySelectorAll(".checkbox__input");
    var storeChecked = [];

    var _iterator6 = _createForOfIteratorHelper(allChecks),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var check = _step6.value;

        if (check.checked == true) {
          storeChecked.push(check);
        } else continue;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var fieldSelect = closestContainer.querySelector(".selectField");

    if (storeChecked.length > 0) {
      var firstCheckText = storeChecked[0].closest(".checkbox").querySelector(".selectWindow__list-item-text").textContent;
      fieldSelect.textContent = firstCheckText;
      fieldSelect.classList.add("selectField_some-selected");
    } else {
      fieldSelect.textContent = "Пока ничего не выбрано";
      fieldSelect.classList.remove("selectField_some-selected");
    }

    var showSelected = closestContainer.querySelector(".header__button_showSelected");
    showSelected.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 (".concat(storeChecked.length, ")");
    closestContainer.querySelector(".selectWindow").classList.remove("selectWindow_visible");
    closestContainer.querySelector(".selectWindow__searchField").value = "";
    processSearch(event);
    checkSelects();
  } // Функционал выделения всех опций при выборе "Все мультфильмы".


  function handleCheckAll(e) {
    var containers = document.querySelectorAll(".container");

    var _iterator7 = _createForOfIteratorHelper(containers),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var container = _step7.value;
        var checkAll = container.querySelector(".checkbox__input");
        var otherChecks = checkAll.closest(".selectWindow__list").querySelectorAll(".checkbox__input");

        if (checkAll.checked == true) {
          var _iterator8 = _createForOfIteratorHelper(otherChecks),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var check = _step8.value;
              check.checked = true;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else {
          var _iterator9 = _createForOfIteratorHelper(otherChecks),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _check = _step9.value;
              _check.checked = false;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  } // Стилизация выбранных опций.


  function checkSelects() {
    var containers = document.querySelectorAll(".container");

    var _iterator10 = _createForOfIteratorHelper(containers),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var container = _step10.value;
        var listItems = container.querySelectorAll(".selectWindow__list-item");

        var _iterator11 = _createForOfIteratorHelper(listItems),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var item = _step11.value;

            if (item.querySelector(".checkbox__input").checked == true) {
              item.style.background = "linear-gradient(0deg, rgba(3, 91, 119, 0.05), rgba(3, 91, 119, 0.05)), #FFFFFF";
            } else {
              item.style.background = "transparent";
              listItems[0].querySelector(".checkbox__input").checked = false;
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  } // Сброс всех выбранных опций в контейнере.


  function clearChecks(event) {
    var container = event.target.closest(".container");
    var clearButton = container.querySelector(".selectWindow__clear-button");
    var allCheckInputs = clearButton.closest(".selectWindow").querySelectorAll(".checkbox__input");

    var _iterator12 = _createForOfIteratorHelper(allCheckInputs),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var item = _step12.value;
        item.checked = false;
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  } // Получение опций с атрибутом "selected" из переданного селекта.


  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0; i < options.length; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }

    return result;
  } // Обработчик изменений в селекте.


  function onSelectChange(event) {
    if (event.target == document) {
      var containers = document.querySelectorAll(".container");

      var _iterator13 = _createForOfIteratorHelper(containers),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var container = _step13.value;
          processSelectChange(container);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    } else {
      var _container = event.target.closest(".container");

      processSelectChange(_container);
    }

    function processSelectChange(container) {
      var multiSelect = container.querySelector('.multiSelect');
      var allSelected = getSelectValues(multiSelect);
      var inputs = container.querySelectorAll(".checkbox__input");

      if (allSelected[0] == 0) {
        var _iterator14 = _createForOfIteratorHelper(multiSelect),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var select = _step14.value;
            select.selected = true;
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        var _iterator15 = _createForOfIteratorHelper(inputs),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var input = _step15.value;
            input.checked = true;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      } else {
        var _iterator16 = _createForOfIteratorHelper(inputs),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _input = _step16.value;

            if (allSelected.includes(_input.value)) {
              _input.checked = true;
            } else {
              _input.checked = false;
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }

      var click = new Event("click");
      var applyButton = container.querySelector(".selectWindow__apply-button");
      applyButton.dispatchEvent(click);
    }
  } // Вешаем обработчик ввода в поле поиска.


  (function () {
    var containers = document.querySelectorAll(".container");

    var _iterator17 = _createForOfIteratorHelper(containers),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var container = _step17.value;
        container.querySelector(".selectWindow__searchField").oninput = processSearch;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  })(); // Здесь функционал поля поиска.


  function processSearch(event) {
    var container = event.target.closest(".container");
    var val = container.querySelector(".selectWindow__searchField").value.trim();
    var listItems = container.querySelectorAll(".selectWindow__list-item-text");

    if (val != "") {
      listItems.forEach(function (elem) {
        if (elem.innerText.search(RegExp(val, "gi")) == -1) {
          elem.closest(".selectWindow__list-item").classList.add("selectWindow__list-item_hidden");
          elem.innerHTML = elem.innerText;
        } else {
          elem.closest(".selectWindow__list-item").classList.remove("selectWindow__list-item_hidden");
          var str = elem.innerText;
          elem.innerHTML = insertMark(str, elem.innerText.search(RegExp(val, "gi")), val.length);
        }
      });
    } else {
      listItems.forEach(function (elem) {
        elem.closest(".selectWindow__list-item").classList.remove("selectWindow__list-item_hidden");
        elem.innerHTML = elem.innerText;
      });
    }
  } // Вспомогательная функция поиска. Подсветка совпадений.


  function insertMark(string, pos, len) {
    return string.slice(0, pos) + "<b>" + string.slice(pos, pos + len) + "</b>" + string.slice(pos + len);
  } // При загрузке страницы будут проверены атрибуты "selected" для их незамедлительной отрисовки в UI.


  window.onload = onSelectChange;
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map