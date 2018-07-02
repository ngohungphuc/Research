/*
 * @Author: hoangphucvu
 * @Date:   2016-12-15 09:10:59
 * @Last Modified by:   hoangphucvu
 * @Last Modified time: 2016-12-15 11:41:31
 */

console.log('app loaded');
var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

require('../css/bootstrap.css');
require('../css/app.css');