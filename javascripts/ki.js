document.onMouseMove = function(event){
  let x = event.x -50;
  let y = event.y - 50;
  console.log(x +' '+ y);
  document.querySelector('.y-1').style.transform = 'rotate(45deg)';
}

document.addEventListener('mousemove', function(e) {
  var pupil = document.getElementById('pupil');
  var rect = pupil.getBoundingClientRect();

  var pupilCenterX = rect.left + rect.width / 2;
  var pupilCenterY = rect.top + rect.height / 2;

  var dx = e.clientX - pupilCenterX;
  var dy = e.clientY - pupilCenterY;

  var distance = Math.sqrt(dx * dx + dy * dy);

  var maxDistance = 11; // Maximum distance the pupil can move from the center, increased to 20

  var moveDistance = Math.min(distance, maxDistance);

  var moveX;
  var moveY;

  if (distance > 0) {
    moveX = dx * moveDistance / distance;
    moveY = dy * moveDistance / distance;
  } else {
    moveX = 0;
    moveY = 0;
  }

  pupil.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});

document.addEventListener('mousemove', function(e) {
  var pupil = document.getElementById('pupil-bottom');
  var rect = pupil.getBoundingClientRect();

  var pupilCenterX = rect.left + rect.width / 2;
  var pupilCenterY = rect.top + rect.height / 2;

  var dx = e.clientX - pupilCenterX;
  var dy = e.clientY - pupilCenterY;

  var distance = Math.sqrt(dx * dx + dy * dy);

  var maxDistance = 11; // Maximum distance the pupil can move from the center, increased to 20

  var moveDistance = Math.min(distance, maxDistance);

  var moveX;
  var moveY;

  if (distance > 0) {
    moveX = dx * moveDistance / distance;
    moveY = dy * moveDistance / distance;
  } else {
    moveX = 0;
    moveY = 0;
  }

  pupil.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});

const invertColor = (currentStar) => {
  if (currentStar.getAttribute('fill') === '#FCAFFF') {
    currentStar.setAttribute('fill', '#7BB2F4');
  } else {
    currentStar.setAttribute('fill', '#FCAFFF');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Выбираем все звезды
  var stars = document.querySelectorAll('#up-big-star, #up-small-star, #bottom-big-star, #bottom-small-star');

// Добавляем обработчик события клика для каждой звезды
  stars.forEach(function(star) {
    star.addEventListener('click', function(event) {
      // event.target ссылается на звезду, по которой было совершено нажатие
      var clickedStar = event.target;

     invertColor(clickedStar)
    });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Выбираем кнопку "Начать" и элементы "start-create-constellation" и "run-create-constellation"
  var startButton = document.querySelector('.button-container');
  var startCreateConstellation = document.getElementById('start-create-constellation');
  var runCreateConstellation = document.getElementById('run-create-constellation');

  // Добавляем обработчик события клика на кнопку "Начать"
  startButton.addEventListener('click', function() {
    // Изменяем свойство display для элементов "start-create-constellation" и "run-create-constellation"
    startCreateConstellation.style.display = 'none';
    runCreateConstellation.style.display = 'flex';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  var startButton = document.querySelector('.button-container');
  var startCreateConstellation = document.getElementById('start-create-constellation');
  var runCreateConstellation = document.getElementById('run-create-constellation');

  startButton.addEventListener('click', function() {
    startCreateConstellation.style.display = 'none';
    runCreateConstellation.style.display = 'flex';

    var constellationSky = document.getElementById('constellation-sky');
    var starCount = Math.floor(Math.random() * (10 - 6 + 1)) + 6;

    for (var i = 0; i < starCount; i++) {
      var star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      star.setAttribute('width', '80');
      star.setAttribute('height', '81');
      star.setAttribute('viewBox', '0 0 80 81');
      star.setAttribute('fill', 'none');

      var starPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      starPath.setAttribute('d', 'M40.1389 0.333008L50.9051 29.428L80.0001 40.1941L50.9051 50.9602L40.1389 80.0552L29.3728 50.9602L0.277832 40.1941L29.3728 29.428L40.1389 0.333008Z');
      starPath.setAttribute('fill', 'white');

      star.appendChild(starPath);

      var starSize = Math.floor(Math.random() * (74 - 48 + 1)) + 48;
      star.style.width = starSize + 'px';
      star.style.height = starSize + 'px';

      var skyRect = constellationSky.getBoundingClientRect();

      console.log(skyRect.height, 'skyRect.height')
      var starX, starY;

      // Проверяем, чтобы звезды не спавнились друг на друге и были на расстоянии друг от друга минимум на 30 пикселей
      while (true) {
        starX = Math.floor(Math.random() * (skyRect.width - starSize));
        starY = Math.floor(Math.random() * skyRect.height - 50);

        var isOverlap = false;
        for (var j = 0; j < constellationSky.children.length; j++) {
          var existingStar = constellationSky.children[j].getBoundingClientRect();
          if (starX < existingStar.right + 30 && starX + starSize + 30 > existingStar.left &&
            starY < existingStar.bottom + 30 && starY + starSize + 30 > existingStar.top) {
            isOverlap = true;
            break;
          }
        }

        if (!isOverlap) {
          break;
        }
      }

      star.style.position = 'absolute';
      star.style.left = starX + 'px';
      star.style.top = starY + 'px';

      constellationSky.appendChild(star);
    }
  });
});

function checkStarCollision(x, y) {
  // Выбираем все звезды внутри constellation-sky
  var stars = document.querySelectorAll('#constellation-sky svg');

  // Проверяем каждую звезду на пересечение с курсором
  stars.forEach(function(star) {
    var starRect = star.getBoundingClientRect();
    if (x > starRect.left && x < starRect.right && y > starRect.top && y < starRect.bottom) {
      // Если курсор пересекает звезду, меняем ее цвет на лунно-золотой и увеличиваем размер
      var starPath = star.querySelector('path');
      starPath.setAttribute('fill', '#FF4B71'); // Цвет лунного золота
    }
  });
}
document.addEventListener('DOMContentLoaded', (event) => {
  var constellationSky = document.getElementById('constellation-sky-draw');
  var isDrawing = false;
  var path;

  var svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgContainer.style.width = '100%';
  svgContainer.style.height = '100%';
  svgContainer.style.position = 'absolute';
  constellationSky.appendChild(svgContainer);

  constellationSky.addEventListener('mousedown', function(event) {
    isDrawing = true;

    var skyRect = constellationSky.getBoundingClientRect();
    var x = event.clientX - skyRect.left;
    var y = event.clientY - skyRect.top;

    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${x},${y}`);
    path.setAttribute('stroke', 'white');
    path.setAttribute('stroke-width', '4');
    path.setAttribute('fill', 'none');

    svgContainer.appendChild(path);
  });

  constellationSky.addEventListener('mousemove', function(event) {
    if (isDrawing) {
      var skyRect = constellationSky.getBoundingClientRect();
      var x = event.clientX - skyRect.left;
      var y = event.clientY - skyRect.top;

      var d = path.getAttribute('d');
      path.setAttribute('d', `${d} L${x},${y}`);

      // Вызываем функцию checkStarCollision для проверки пересечения с звездой
      checkStarCollision(x, y);
    }
  });

  constellationSky.addEventListener('mouseup', function(event) {
    isDrawing = false;
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  var constellationSky = document.getElementById('constellation-sky-draw');
  var isDrawing = false;
  var path;

  var svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgContainer.style.width = '100%';
  svgContainer.style.height = '100%';
  svgContainer.style.position = 'absolute';
  constellationSky.appendChild(svgContainer);

  constellationSky.addEventListener('mousedown', function(event) {
    isDrawing = true;

    var skyRect = constellationSky.getBoundingClientRect();
    var x = event.clientX - skyRect.left;
    var y = event.clientY - skyRect.top;

    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${x},${y}`);
    path.setAttribute('stroke', 'white');
    path.setAttribute('stroke-width', '4');
    path.setAttribute('fill', 'none');

    svgContainer.appendChild(path);
  });

  constellationSky.addEventListener('mousemove', function(event) {
    if (isDrawing) {
      var skyRect = constellationSky.getBoundingClientRect();
      var x = event.clientX - skyRect.left;
      var y = event.clientY - skyRect.top;

      var d = path.getAttribute('d');
      path.setAttribute('d', `${d} L${x},${y}`);

      // Вызываем функцию checkStarCollision для проверки пересечения с звездой
      checkStarCollision(x, y);
    }
  });

  constellationSky.addEventListener('mouseup', function(event) {
    isDrawing = false;

    // Проверяем каждую звезду на ее цвет
    var stars = document.querySelectorAll('#constellation-sky svg');
    stars.forEach(function(star) {
      var starPath = star.querySelector('path');
      if (starPath.getAttribute('fill') !== '#FF4B71') {
        star.style.display = 'none';
      }
    });

    var modal = document.getElementById('modal-container');
    console.log(modal, 'modal');
    modal.style.display = 'flex';

    // Показываем кнопку constellation-button
    var constellationButton = document.querySelector('.constellation-button');
    constellationButton.style.display = 'block';

  });

  // Добавляем обработчик события click на кнопку constellation-button
  var constellationButton = document.querySelector('.constellation-button');
  constellationButton.addEventListener('click', function() {
    var runCreateConstellation = document.getElementById('run-create-constellation');
    var startCreateConstellation = document.getElementById('start-create-constellation');

    var skyContainer = document.querySelector('#constellation-sky');
    var svgContainer = document.querySelector('#constellation-sky-draw');
    var buttonContainer = document.querySelector('.constellation-button');

    // Очищаем содержимое skyContainer
    skyContainer.innerHTML = '';



    buttonContainer.style.display = 'none';

    // Скрываем текущий экран и показываем экран start-create-constellation
    runCreateConstellation.style.display = 'none';
    startCreateConstellation.style.display = 'flex';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  var elements = document.querySelectorAll('.karma-1, .karma-2, .karma-3, .karma-4, .karma-5, .karma-6, .karma-7, .karma-8, .karma-9, .karma-10');

  elements.forEach(function(element) {
    element.addEventListener('mousedown', function(e) {
      e.preventDefault();

      var offsetX = e.clientX - element.getBoundingClientRect().left;
      var offsetY = e.clientY - element.getBoundingClientRect().top;

      function onMouseMove(e) {
        element.style.left = e.clientX - offsetX + 'px';
        element.style.top = e.clientY - offsetY + 'px';
      }

      document.addEventListener('mousemove', onMouseMove);

      element.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
      }, { once: true });

      // Если мышь отпущена вне элемента
      document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
      }, { once: true });
    });
  });
});

document.addEventListener('mousemove', function(e) {
  var pupil = document.getElementById('pupil-bottom-karma');
  var rect = pupil.getBoundingClientRect();

  var pupilCenterX = rect.left + rect.width / 2;
  var pupilCenterY = rect.top + rect.height / 2;

  var dx = e.clientX - pupilCenterX;
  var dy = e.clientY - pupilCenterY;

  var distance = Math.sqrt(dx * dx + dy * dy);

  var maxDistance = 11; // Maximum distance the pupil can move from the center, increased to 20

  var moveDistance = Math.min(distance, maxDistance);

  var moveX;
  var moveY;

  if (distance > 0) {
    moveX = dx * moveDistance / distance;
    moveY = dy * moveDistance / distance;
  } else {
    moveX = 0;
    moveY = 0;
  }

  pupil.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});

document.addEventListener('DOMContentLoaded', (event) => {
  var startButton = document.querySelector('.matrix-button-start');
  var matrixLayout = document.querySelector('.matrix-layout');
  var matrixStartTitle = document.querySelector('.matrix-start-title');
  var matrixForm = document.querySelector('.matrix-form');

  startButton.addEventListener('click', function() {
    // Изменяем стили элементов
    matrixLayout.style.width = '665px';
    matrixLayout.style.height = '419px';
    matrixStartTitle.style.display = 'none';
    matrixForm.style.display = 'block';
    startButton.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  var checkButton = document.querySelector('.button-container-form-check');
  var matrixLayout = document.querySelector('.matrix-layout');
  var matrixForm = document.querySelector('.matrix-form');
  var matrixFormImgContainer = document.querySelector('.matrix-form-img-container');

  checkButton.addEventListener('click', function() {
    // Изменяем стили элементов
    matrixLayout.style.width = '902px';
    matrixLayout.style.height = '559px';
    matrixLayout.style.backgroundColor = '#12122C'
    matrixForm.style.display = 'none';
    matrixFormImgContainer.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  var checkButton = document.querySelector('.button-container-form-check');
  var matrixFormImgContainer = document.querySelector('.matrix-form-img-container');
  var imgElement = document.getElementById('matrix-form-img');

  checkButton.addEventListener('click', function() {
    var style = window.getComputedStyle(matrixFormImgContainer);
    var display = style.getPropertyValue('display');

    if (display !== 'none') {
      var randomNumber = Math.floor(Math.random() * 3) + 1; // generates a random number between 1 and 3
      imgElement.setAttribute('src', './img/count-matrix-' + randomNumber + '.png');
    }
  });
});
