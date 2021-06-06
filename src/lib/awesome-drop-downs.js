import './awesome-drop-down-styles.css';

let dropdowns = (function () {
  let dropDownList = [];
  // // addMainLevelDropdown
  // addSubLevelDropdown(mainLevel){}
  // // makeADrop
  // // writes to the DOM inside a nav element you specify
  // function writeToScreen(navElementToAttachTo) {
  function writeToScreen() {
    return console.log('asdf');
  }

  function initialSetup() {
    _labelSections();
    _setUpEventListeners();
  }
  initialSetup();

  function _labelSections() {}

  function _setUpEventListeners() {
    // for containers that start out hidden, add a not-hiddden class
    // when on hovering on parent element
    let allUls = document.querySelectorAll('ul');
    allUls.forEach((ul) => {
      ul.classList.add('awesome-dropdown-not-hidden');
    });
  }

  // let allMainLevelElements = [];
  // addEventListeners() {
  // }
  // const mainTab = document.getElementById('main-tab');
  // const menuTab = document.getElementById('menu-tab');
  // const aboutTab = document.getElementById('about-tab');
  // mainTab.addEventListener('click', function () {
  //   clearAndSwitchTab(mainTab);
  // });
  // menuTab.addEventListener('click', function () {
  //   clearAndSwitchTab(menuTab);
  // });
  // aboutTab.addEventListener('click', function () {
  //   clearAndSwitchTab(aboutTab);
  // });
  // const copyContainer = document.getElementById('copy-container');
  // function clearAndSwitchTab(tab) {
  //   while (copyContainer.firstChild) {
  //     copyContainer.removeChild(copyContainer.firstChild);
  //   }
  //   clearTabColors();
  //   let theId = tab.id;
  //   switch (theId) {
  //     case 'main-tab':
  //       mainTab.classList.add('tab-selected');
  //       // loadHomeTab();
  //       break;
  //     case 'menu-tab':
  //       menuTab.classList.add('tab-selected');
  //       // loadMenuTab();
  //       break;
  //     case 'about-tab':
  //       aboutTab.classList.add('tab-selected');
  //       // loadAboutTab();
  //       break;
  //   }
  // }
  function clearTabColors() {
    mainTab.classList.remove('tab-selected');
    menuTab.classList.remove('tab-selected');
    aboutTab.classList.remove('tab-selected');
  }
  return {
    // writeToScreen: writeToScreen,
    clearTabColors,
    writeToScreen,
  };
})();
export { dropdowns };
// export default dropdowns;
