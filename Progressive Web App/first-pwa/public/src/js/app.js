var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

function animate() {
  title.classList.remove('animate-in');
  for (var i = 0; i < courseFeatureElements.length; i++) {
    courseFeatureElements[i].classList.remove('animate-in');
  }
  button.classList.remove('animate-in');

  setTimeout(function () {
    title.classList.add('animate-in');
  }, 1000);

  setTimeout(function () {
    courseFeatureElements[0].classList.add('animate-in');
  }, 3000);

  setTimeout(function () {
    courseFeatureElements[1].classList.add('animate-in');
  }, 4500);

  setTimeout(function () {
    courseFeatureElements[2].classList.add('animate-in');
  }, 6000);

  setTimeout(function () {
    courseFeatureElements[3].classList.add('animate-in');
  }, 7500);

  setTimeout(function () {
    courseFeatureElements[4].classList.add('animate-in');
  }, 9000);

  setTimeout(function () {
    courseFeatureElements[5].classList.add('animate-in');
  }, 10500);

  setTimeout(function () {
    courseFeatureElements[6].classList.add('animate-in');
  }, 12000);

  setTimeout(function () {
    button.classList.add('animate-in');
  }, 13500);
}

animate();

button.addEventListener('click', function() {
  animate();
});