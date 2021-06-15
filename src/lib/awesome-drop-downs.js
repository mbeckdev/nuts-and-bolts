import './awesome-drop-down-styles.css';

let dropdowns = (function () {
  'use strict';

  const allTopItems = document.querySelectorAll('.top-item');
  allTopItems.forEach((oneTopItem) => {
    oneTopItem.addEventListener('mouseenter', topItemMouseEnter);
    oneTopItem.addEventListener('mouseout', topItemMouseOut);
  });

  const allDropDownListContainers = document.querySelectorAll(
    '.dropdown-list-container'
  );
  allDropDownListContainers.forEach((oneDropDownListContainer) => {
    oneDropDownListContainer.addEventListener(
      'mouseover',
      keepListContainerVisible
    );
    oneDropDownListContainer.addEventListener(
      'mouseout',
      makeListContainerNotVisible
    );
  });

  function keepListContainerVisible(e) {
    // This is run when the person is hovering over the drop down list below
    // Need to keep it visible because we're trying to make it not
    //   visible when out of the topItem
    let thisMouseETarget = e.target;
    let dropdownListContainer = thisMouseETarget.closest(
      '.dropdown-list-container'
    );

    if (
      !dropdownListContainer.classList.contains(
        'dropdown-list-container-expanded'
      )
    ) {
      dropdownListContainer.classList.add('dropdown-list-container-expanded');
    }
  }

  function makeListContainerNotVisible(e) {
    let thisMouseETarget = e.target;
    let dropdownListContainer = thisMouseETarget.closest(
      '.dropdown-list-container'
    );

    if (
      dropdownListContainer.classList.contains(
        'dropdown-list-container-expanded'
      )
    ) {
      dropdownListContainer.classList.remove(
        'dropdown-list-container-expanded'
      );
    }
  }

  function topItemMouseEnter(e) {
    document.documentElement.style.setProperty('--dropdown-height1', '800px');

    let dropdownListContainerSibling = e.target.nextElementSibling;
    dropdownListContainerSibling.classList.add(
      'dropdown-list-container-expanded'
    );
  }

  function topItemMouseOut(e) {
    document.documentElement.style.setProperty('--dropdown-height1', '800px');

    let dropdownListContainerSibling = e.target.nextElementSibling;
    dropdownListContainerSibling.classList.remove(
      'dropdown-list-container-expanded'
    );
  }
})();
// export default dropdowns;
export { dropdowns };

// let dropDownList = [];
// // // addMainLevelDropdown
// // addSubLevelDropdown(mainLevel){}
// // // makeADrop
// // // writes to the DOM inside a nav element you specify
// // function writeToScreen(navElementToAttachTo) {
// function writeToScreen() {
//   return console.log('asdf');
// }

// function initialSetup() {
//   _labelSections();
//   _setUpEventListeners();
// }
// initialSetup();

// function _labelSections() {}

// function _setUpEventListeners() {
//   // for containers that start out hidden, add a not-hiddden class
//   // when on hovering on parent element
//   let allUls = document.querySelectorAll('ul');
//   allUls.forEach((ul) => {
//     ul.classList.add('awesome-dropdown-not-hidden');
//   });
// }

// function clearTabColors() {
//   mainTab.classList.remove('tab-selected');
//   menuTab.classList.remove('tab-selected');
//   aboutTab.classList.remove('tab-selected');
// }
// return {
//   // writeToScreen: writeToScreen,
//   clearTabColors,
//   writeToScreen,
// };
