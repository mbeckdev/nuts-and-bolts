'use strict';
// import css from './styles.css';
import './styles.css';
import './lib/awesome-drop-down-styles.css';

//GET PICTURES INTO THIS PROJECT WHEN YOU GET SOME PICTURES:
// import MyPicture from './image.png';

// const myPic = new Image();
// myPic.src = MyPicture;
// someDiv.appendChild(myPic);

// in src/StyleSheet.css :
// .someOtherDiv {
//   color: red;
//   background: url('./image.png');
// }

import { loadPage } from './lib/load-page.js';
import { dropdowns } from './lib/awesome-drop-downs.js';
dropdowns.writeToScreen();

// import { loadHomeTab } from './page-home.js';
// import { loadMenuTab } from './page-menu.js';
// import { loadAboutTab } from './page-about.js';

// loadPage();
// loadHomeTab();
// loadMenuTab();
// loadAboutTab();
