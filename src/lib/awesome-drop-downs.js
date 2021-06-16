import './awesome-drop-down-styles.css';

let dropdowns = (function () {
  'use strict';

  // *****************************
  // Drop down addEventListeners
  // *****************************

  const allTopItems = document.querySelectorAll('.top-item');
  allTopItems.forEach((oneTopItem) => {
    oneTopItem.addEventListener('mouseenter', topItemMouseEnter);
    oneTopItem.addEventListener('mouseleave', topItemMouseOut);
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

  // *****************************
  // Drop down functions
  // *****************************

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
    setHeightOfDropdown(e);

    let dropdownListContainerSibling = e.target.nextElementSibling;
    dropdownListContainerSibling.classList.add(
      'dropdown-list-container-expanded'
    );
  }

  function topItemMouseOut(e) {
    console.log('mouseout');
    if (e.target.nodeName == 'a') {
      console.log('a !!!');
    }

    let dropdownListContainerSibling = e.target.nextElementSibling;
    dropdownListContainerSibling.classList.remove(
      'dropdown-list-container-expanded'
    );
  }

  // *****************************
  // Set height of dropdown container
  // *****************************
  function setHeightOfDropdown(e) {
    let numOfLis = _findNumOfLis(e);
    let liHeight = 0;
    if (numOfLis > 0) {
      liHeight = _findLiHeight(e);
    }

    let dropdownHeightTotal = liHeight * numOfLis;
    let dropdownHeightTotalInPx = dropdownHeightTotal + 'px';
    document.documentElement.style.setProperty(
      '--dropdown-height',
      dropdownHeightTotalInPx
    );
  }

  function _findLiHeight(e) {
    let thisTopItem = e.target;
    let firstLi = thisTopItem.nextElementSibling.querySelector('li');
    return firstLi.offsetHeight;
  }

  function _findNumOfLis(e) {
    let thisTopItem = e.target;
    let allLisBelow = thisTopItem.nextElementSibling.querySelectorAll('li');
    return allLisBelow.length;
  }
})();

export { dropdowns };
